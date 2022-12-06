import { Request, Response } from "express";
import getAddressInfo from "../services/getAddress";


export default async function getUserAddress(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const { cep } = req.body;

    if (!cep) {
      res.statusCode = 422;
      throw "Necessário inserir cep";
    }

    const result = await getAddressInfo(cep)
    res.status(201).send(result)
  } catch (error: any) {
    console.log(error)
  }
}
