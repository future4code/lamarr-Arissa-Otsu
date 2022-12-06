import { Request, Response } from "express";
import { connection } from   "../data/connection";

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    let statusCode = 400
    try {
        let name = req.query.name as string
        let type = req.query.type as string
        let sort = req.query.sort as string
        let order = req.query.order as string
        let page = Number(req.query.page)
        let size = 5
        let offset = size * (page - 1)

        if (!name) {
            name = "%"
        }

        if (!type) {
            type = "%"
        }

        if(!sort){
            sort = "name"
        }

        if(sort === "name"){
            sort = "name"
        }

        if(sort === "type"){
            sort = "type"
        }

        if (!order) {
            order = "DESC"
        }

        if (order && order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
            order = "DESC"
        }

        if (!page || isNaN(page) || page < 1) {
            page = 1
        }

        const result = await connection ("aula48_exercicio")
        .where("name", "like", `%${name}%`)
        .where("type", "like", `%${type}%`)
        .orderBy(sort, order)
        .limit(size)
        .offset(offset)

        if (result.length < 1) {
            res.status(404).send("Não foi encontrado um usuário com os parâmetros informados.") 
        }

        res.status(200).send(result)   

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
}