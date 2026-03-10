const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URL;
const dbname=process.env.DBNAME;


const collection ={
  PRODUCTS:"products"
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



export const dbconnection=(cname)=>{
  return client.db(dbname).collection(cname)
}