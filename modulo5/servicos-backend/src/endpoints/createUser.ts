import { Request, Response } from "express";
import { connection } from "../data/connection";
import getAddressInfo from "../services/getAddressInfo";
import getAddress from "../services/getAddress";
import { address, user } from "../types";
import transporter from "../services/mailTransporter";

export default async function createUser(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const { name, nickname, email, zipcode, number, complement } = req.body;

    if (!name || !nickname || !email || !zipcode || !number) {
      res.statusCode = 422;
      throw " Necessário informar 'name', 'nickname', 'email', 'zipcode' e 'number'.";
    }

    const id: string = Date.now().toString();
    const address = await getAddressInfo(zipcode);

    const newUser: user = { id, name, nickname, email, address };
    await connection("Users").insert(newUser);

    const addressInfo= await getAddress(zipcode)
    const street = addressInfo.Logradouro
    const district = addressInfo.Bairro
    const city = addressInfo.Cidade
    const state = addressInfo.Estado
    const newAddress: address = {zipcode, street, number, complement, district, city, state}
    
    await connection("User_Address").insert(newAddress);

    const send = await transporter.sendMail({
      from: process.env.NODEMAILER_USER,
      to: [email],
      subject: "Conta criada!",
      text: "Parabéns! Sua conta foi criada com sucesso!",
    });

    console.log(send);

    res.status(201).send("Usuário criado e endereço atualizado!");
  } catch (error: any) {
    console.log(error);
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send("Ops! Um erro inesperado ocorreu.");
    }
  }
}