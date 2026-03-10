import { dbconnection } from "@/Components/lib/dbconnection";
import { ObjectId } from "mongodb";




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


export const singleproducts = async (id) => {
  try {

    // console.log(id)
    const productscollection = await dbconnection("products");

    const singleproduct = await productscollection.findOne({
      _id: new ObjectId(id),
    });

    return singleproduct;
  } catch (err) {
    console.log(err);
    return null;
  }
};