import { Request, Response } from "express";
import { connection } from "../data/connection";
import getAddressInfo from "../services/getAddressInfo";
import getAddress from "../services/getAddress";
import { address, user } from "../types";

export default async function createUser(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const { name, nickname, email, zipcode, number, complement } = req.body;

    /* if (!name || !nickname || !email || !zipcode) {
      res.statusCode = 422;
      throw "'name', 'nickname', 'email' e 'zipcode' são obrigatórios";
    } */

    const id: string = Date.now().toString();
    const address = await getAddressInfo(zipcode);

    const newUser: user = { id, name, nickname, email, address };

    const addressInfo= await getAddress(zipcode)
    const street = addressInfo.Logradouro
    const district = addressInfo.Bairro
    const city = addressInfo.Cidade
    const state = addressInfo.Estado
    const newAddress: address = {zipcode, street, number, complement, district, city, state}
    
    const result = await connection("User_Address").insert(newAddress);

    res.status(201).send(result);
  } catch (error: any) {
    console.log(error);
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send("Ops! Um erro inesperado ocorreu =/");
    }
  }
}