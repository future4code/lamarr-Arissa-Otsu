import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/userDto";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password }: UserInputDTO = req.body;

      const userBusiness = new UserBusiness();

      const user: UserInputDTO = { 
        email, 
        name, 
        password 
      }
      
      await userBusiness.create(user);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await new UserBusiness().getAll();
        res.send(users).status(200);
    } catch (error:any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }
}
