import { dbconnection } from "@/Components/lib/dbconnection";




export const allproducts=async()=>{
    try{
        const productscollection =await dbconnection("products")

        const products=await productscollection.find().toArray();
        return products
    }
    catch(err){
        console.log(err)
        return [];
    }
}