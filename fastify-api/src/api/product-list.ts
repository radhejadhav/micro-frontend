import { FastifyInstance } from "fastify";
import productData from "./product-data.json";

 const productList = async (fastify: FastifyInstance)=>{

    fastify.get("/products",(req:any, rep:any)=>{

        return rep.send([...productData])
        
    })

}

export default productList;