import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../data/UserDatabase";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export const userRouter = express.Router();

const userDatabase = new UserDatabase()
const userBusiness = new UserBusiness(userDatabase, new HashGenerator(), new IdGenerator(), new TokenGenerator())
const userController = new UserController(userBusiness)

userRouter.post("/signup", (req,res) => userController.signup (req, res));
userRouter.post("/login", (req, res) => userController.login (req,res));
userRouter.get("/profile/:id", (req, res) => userController.getUserById(req, res))
