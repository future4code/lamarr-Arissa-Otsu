import { Request, Response } from "express";
import { connection } from   "../data/connection";

export const orderAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        let sort = req.query.sort as string
        let order = req.query.order as string

        if(!sort){
            sort = "email"
        }

        if(sort === "name"){
            sort = "name"
        }

        if(sort === "type"){
            sort = "type"
        }

        if (!order) {
            order = "ASC"
        }
        
        if (order && order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
            order = "ASC"
        }

        const result = await connection("aula48_exercicio")
        .orderBy(sort, order)

        res.status(200).send(result)   
    } catch (error:any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}