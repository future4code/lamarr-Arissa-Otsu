import {app} from "./app"
import {getAllUsers} from "../src/endpoints/getAllUsers"
import { filterUsersByName } from "./endpoints/filterUsersByName"
import { filterUsersByType } from "./endpoints/filterUsersByType"
import { orderAllUsers } from "./endpoints/orderAllUsers"
import { getFiveUsers } from "./endpoints/getFiveUsers"

// Exercício 1- a) Filtrar por nome do usuário
app.get("/users/name", filterUsersByName)

// Exercício 1- b) Filtrar por tipo do usuário
app.get("/users/:type", filterUsersByType)

// Exercício 2 - Ordenar usuários
app.get("/order", orderAllUsers)

// Exercício 3 - Pegar 5 usuários 
app.get("/fiveusers", getFiveUsers)

// Exercício 4 - Pegar usuários + Filtrar + Ordenar 
app.get("/users", getAllUsers)