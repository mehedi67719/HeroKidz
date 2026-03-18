"use server"

import { authOptions } from "@/Components/lib/authOptions";
import { dbconnection } from "@/Components/lib/dbconnection"
import { getServerSession } from "next-auth";

const cartcollection = await dbconnection("cart");


export const handlecart = async ({ product, inc = true }) => {
    const user = await getServerSession(authOptions);

    // console.log(user)
    if (!user) {
        return { success: false }
    }

    const isadded = await cartcollection.findOne({ email: user.email, productId: product._id })


    if (isadded) {
        const updateData = {
            $inc: {
                quantity: inc ? 1 : -1
            }
        }

        const result = await cartcollection.updateOne({ email: user.email, productId: product._id}, updateData )

        return { success: Boolean(result.modifiedCount) }
    }

    else {

        const newData = {
            productId: product?._id,
            email: user?.email,
            username:user?.user?.name,
            title:product?.title,
            quantity:1,
            image:product?.image,
            price:product?.price-(product.price*product.discount)/100,
            
        }


        const result=await cartcollection.insertOne(newData);

        return {success:result.acknowledged}
    }

    return {
        success: true
    }
}