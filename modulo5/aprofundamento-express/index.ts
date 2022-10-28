import { listaDeTarefas } from "./data"
import express, {Request, Response} from "express"
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

// Exercício 01

app.get("/ping",(req:Request, res:Response) => {
    res.status(200).send("pong")
})

// Exercício 02 - arquivo type.ts

// Exercício 03 - arquivo data.ts

// Exercício 04

app.get("/tarefas",(req:Request, res:Response) => {
    const status = (req.query.status)

    if(!status) {
        res.status(400).send("Necessário inserir status da tarefa (concluída ou em andamento)!")
    }

    let listaFiltrada = listaDeTarefas.filter ((tarefa) => {
        if(status === "concluída") {
            return (tarefa.completed === true)
        } else if (status === "em andamento") {
            return (tarefa.completed === false)
        } else {
            res.status(400).send("Insira um desses status: concluída ou em andamento")
        }
    })

    res.status(200).send(listaFiltrada)
})

// Exercício 05
app.post("/tarefas", (req:Request, res:Response) => {
    const {userId, id, title, completed } = req.body

    if(!userId|| !id|| !title || completed===undefined ){
        res.status(400).send('Necessário inserir os parâmetros')
    }

    listaDeTarefas.push({userId: userId, id:id, title: title, completed: completed})

    res.status(200).send(listaDeTarefas)
})

// Exercício 06
app.put("/tarefas/:idDoUsuario", (req:Request, res:Response) => {
    const idDoUsuario = Number(req.params.idDoUsuario)
    const idDaTarefa = Number(req.headers.authorization)

    let listaAtualizada = listaDeTarefas.map((tarefa => {
        if (tarefa.userId === idDoUsuario) {
            if(tarefa.id === idDaTarefa) {
                return {...listaDeTarefas, !tarefa.completed}
            }
        }
    }))
    res.status(200).send(listaAtualizada)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});