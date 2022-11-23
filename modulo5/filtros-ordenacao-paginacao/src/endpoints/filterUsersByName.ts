import { Request, Response } from "express";
import { connection } from   "../data/connection";

export const filterUsersByName = async(req: Request,res: Response): Promise<void> =>{
    let statusCode = 400
    try {
        let name = req.query.name as string

        if (!name) {
            name = "%"
        }
        
        const result = await connection ("aula48_exercicio")
        .where("name", "like", `%${name}%`)

        if (result.length < 1) {
            res.status(404).send("Não foi encontrado um usuário com esse nome.") 
        }

        res.status(200).send(result)   

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
}