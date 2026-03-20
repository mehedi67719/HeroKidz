"use server";
import { dbconnection } from "@/Components/lib/dbconnection";

const ordercollection = await dbconnection("order");
const cartcollection = await dbconnection("cart");

export const postorder = async (order) => {
  const result = await ordercollection.insertOne(order);

  if (result.acknowledged) {
    await cartcollection.deleteMany({});
  }

  return result;
};