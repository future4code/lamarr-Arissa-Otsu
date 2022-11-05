import express, {Request, Response} from "express"
import { users } from "./data"

import cors from 'cors'
import { error } from "console"
import { isTupleTypeNode } from "typescript"

const app = express()

app.use(express.json())

app.use(cors())

// Exercício 01
app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
})

// a) Utilizaria o método GET.
// b) Indicaria como "/users"

// Exercício 02
app.get("/users/type", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userType = req.query.type?.toLocaleString().toLocaleUpperCase()

        if(userType !== "ADMIN" && userType !== "NORMAL") {
            errorCode = 422
            throw new Error ("Necessário inserir o tipo do usuário (ADMIN OU NORMAL)")
        }

        const filteredUsers = users.filter((user) => {
            return user.type === userType
        })

        if (filteredUsers.length < 1) {
            errorCode = 404
            throw new Error("Nenhum usuário encontrado com o tipo inserido.");
        }

        res.status(200).send(filteredUsers)
    } catch (e:any) {
        res.status(errorCode).send(e.message)
    }
})

// a) O pârametro foi passado por query, pois é necessário apenas realizar uma filtragem do array de usuários.
/* b) Poderia realizar a seguinte tipagem: 

export type User = {
    id: number, 
    name: string, 
    email: string, 
    type: UserType,
    age: number
}

export enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
*/

// Exercício 03
app.get("/users/name", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userName = req.query.name

        if(!userName) {
            errorCode = 422
            throw new Error ("Necessário inserir o nome do usuário a ser buscado.")
        }

        const filteredUsers = users.filter((user) => {
            return user.name.toLocaleLowerCase() === userName.toString().toLocaleLowerCase()
        })

        if (filteredUsers.length < 1) {
            errorCode = 404
            throw new Error("Nenhum usuário encontrado com o nome inserido.");
        }

        res.status(200).send(filteredUsers)
    } catch (e:any) {
        res.status(errorCode).send(e.message)
    }
})

// a) O pârametro foi passado por query, pois é necessário apenas realizar uma filtragem dos array de usuários.
/* b) Já realizado na requisição acima.
        if (filteredUsers.length < 1) {
            errorCode = 404
            throw new Error("Nenhum usuário encontrado com o nome inserido.");
        }
*/

// Exercício 04
app.post("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {name, email, type, age} = req.body
        
        if(!name || !email || !type || !age) {
            errorCode = 422
            throw new Error ("Necessário inserir todos os parâmetros (name, email, type, age).")
        }

        if (typeof name !== "string" || typeof email !== "string" || typeof type!== "string") {
            errorCode = 422
            throw new Error ("Os parâmetros name, email e type devem ser do tipo string.")
        }

        if (typeof age !== "number" || age <= 0) {
            errorCode = 422
            throw new Error ("O parâmetro age deve ser do tipo number e também deve ser maior do que zero.")
        }
        if(type.toLocaleUpperCase() !== "ADMIN" && type.toLocaleUpperCase() !== "NORMAL") {
            errorCode = 422
            throw new Error ("Necessário inserir um tipo de usuário válido (ADMIN OU NORMAL)")
        }

        const newUser = {
            id: Math.random(),
            name: name,
            email: email,
            type: type, 
            age: age
        }

        users.push(newUser)

        res.status(200).send(users)
    } catch (e:any) {
        res.status(errorCode).send(e.message)
    }
})

// a) A requisição funcionou normalmente.
// b) Não, pois o método PUT é mais adequado para a atualização de dados já existentes e não para a inserção de novos dados.

// Exercício 05
app.put("/users", (req: Request, res: Response) => {
    try {
        for (let i=0; i<users.length; i++) {
            if (i=users.length - 1) {
                users[i].name = users[i].name + "-ALTERADO"
            }
        }
        res.status(200).send(users)
    } catch (e:any) {
        res.status(400).send("Erro")
    }
})

// Exercício 06
app.patch("/users", (req: Request, res: Response) => {
    try {
        for (let i=0; i<users.length; i++) {
            if (i=users.length - 1) {
                users[i].name = users[i].name.replace("-ALTERADO", "-REALTERADO") 
            }
        }
        res.status(200).send(users)
    } catch (e:any) {
        res.status(400).send("Erro")
    }
})

// Exercício 06
app.delete("/users/:id", (req:Request, res:Response) => {
    const userId = Number(req.params.id)
    let errorCode = 400

    try {
        if (!userId) {
            errorCode = 422
            throw new Error ("Necessário inserir o id do usuário.")
        }

        const userSelectedById = users.find((user)=>{
            return user.id === userId
        })

        if (!userSelectedById) {
            errorCode = 404
            throw new Error ("Usuário não encontrado.")
        } 

        let newUsersList = users.filter((user)=> {
            return (user.id !== userId) 
        })
    
        res.status(200).send(newUsersList)

    } catch (e:any) {
        res.status(errorCode).send(e.message)
    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});