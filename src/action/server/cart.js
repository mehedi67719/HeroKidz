"use server"

import { authOptions } from "@/Components/lib/authOptions";
import { dbconnection } from "@/Components/lib/dbconnection"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { cache } from "react";

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

        const result = await cartcollection.updateOne({ email: user.email, productId: product._id }, updateData)

        return { success: Boolean(result.modifiedCount) }
    }

    else {

        const newData = {
            productId: product?._id,
            email: user?.email,
            username: user?.user?.name,
            title: product?.title,
            quantity: 1,
            image: product?.image,
            price: product?.price - (product.price * product.discount) / 100,

        }


        const result = await cartcollection.insertOne(newData);

        return { success: result.acknowledged }
    }


}



export const getcart = cache(async () => {
    const { user } = await getServerSession(authOptions);
    if (!user) {
        return []
    }

    const result = await cartcollection.find({ email: user?.email }).toArray();
    return result

})


export const deletecart = async (id) => {
    const { user } = await getServerSession(authOptions);
    if (!user) return [];

    const result = await cartcollection.deleteOne({
        email: user.email,
        _id: new ObjectId(id)
    });

    if(Boolean(result.deletedCount)){
        revalidatePath('/cart')
    }
    return {success:Boolean(result.deletedCount)};
};