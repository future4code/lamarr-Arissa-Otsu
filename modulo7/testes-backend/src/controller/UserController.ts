import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
   
   constructor (private userBusiness: UserBusiness) {}

   public async signup(req: Request, res: Response) {
      try {
         const { name, role, email, password } = req.body
         const result = await this.userBusiness.signup(
            name,
            email,
            password,
            role
         );
         res.status(200).send(result);
      } catch (error:any) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await this.userBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error:any) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   async getUserById(req: Request, res: Response): Promise<void> {
      try {
         const id = req.params.id
         const user = await this.userBusiness.getUserById(id)

         res.status(200).send(user)
      } catch (error: any) {
         res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
      }
   }
}

