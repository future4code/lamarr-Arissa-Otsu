import { Request, Response } from "express";
import { connection } from   "../data/connection";

export const filterUsersByType = async(req: Request,res: Response): Promise<void> =>{
    let statusCode = 400
    try {
        let type = req.params.type as string

        if (!type) {
            type = "%"
        }
        
        const result = await connection ("aula48_exercicio")
        .where("type", "like", `%${type}%`)

        if (result.length < 1) {
            res.status(404).send("Não foi encontrado um usuário com o tipo mencionado.") 
        }

        res.status(200).send(result)   

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
}