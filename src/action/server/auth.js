"use server"


import { dbconnection } from "@/Components/lib/dbconnection";


export const postUser=async(payload)=>{
    const {email,password,name}=payload;
    if(!email || !password){
        return null;
    }


    const usercollection = await dbconnection("user")


    const isExist=await usercollection.findOne({email})

    if(isExist){
        return null;
    }



    const newuser={
        provider:"Credentials",
        name,
        email,
        password,
        role:"user"
    }


    const result=await usercollection.insertOne(newuser)

    if(result.acknowledged){
        return{
            ...result,insertedId:result.insertedId.toString()
        }
    }
}