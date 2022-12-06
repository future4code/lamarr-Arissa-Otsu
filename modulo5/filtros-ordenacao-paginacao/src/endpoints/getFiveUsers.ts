import { Request, Response } from "express";
import { connection } from   "../data/connection";

export const getFiveUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        let page = Number(req.query.page)
        let size = 5
        let offset = size * (page - 1)

        if (isNaN(page) || page < 1) {
            page = 1
        }

        const result = await connection("aula48_exercicio")
        .limit(size)
        .offset(offset)

        res.status(200).send(result)   
    } catch (error:any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}