import { listaDeTarefas } from "./data"
import express, {Request, Response} from "express"
import cors from 'cors'
import * as allTypes from './type'

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

    if(!userId || !id || !title || completed===undefined){
        res.status(400).send('Necessário inserir os parâmetros')
    }

    listaDeTarefas.push({userId: userId, id:id, title: title, completed: completed})

    res.status(200).send(listaDeTarefas)
})

// Exercício 06
app.put("/tarefas/:idDoUsuario", (req:Request, res:Response) => {
    const idDoUsuario = Number(req.params.idDoUsuario)
    const idDaTarefa = Number(req.headers.authorization)

    if(!idDoUsuario || !idDaTarefa){
        res.status(400).send('Necessário inserir os parâmetros (id do usuário e id da tarefa).')
    }

    listaDeTarefas.map((tarefa => {
        if (tarefa.userId === idDoUsuario) {
            if (tarefa.id === idDaTarefa) {
                let index = listaDeTarefas.findIndex((tarefa => {
                    return tarefa.id === idDaTarefa
                }))
    
                if (index !== -1) {
                    listaDeTarefas[index].completed = !listaDeTarefas[index].completed
                } 
                return listaDeTarefas
            } 
        } 
    }))
    
    res.status(200).send(listaDeTarefas)
})

// Exercício 07

app.delete("/tarefas", (req:Request, res:Response) => {
    const idDaTarefa = Number(req.query.idDaTarefa)

    if(!idDaTarefa) {
        res.status(400).send('Necessário inserir o id da tarefa.')
    }

    let novaLista = listaDeTarefas.filter((tarefa)=> {
        return (tarefa.id !== idDaTarefa) 
    })

    if (novaLista.length === listaDeTarefas.length) {
        res.status(400).send("O id inserido não existe.")
    } else {
        res.status(200).send(novaLista)
    }
})

// Exercício 08
app.get("/tarefas/usuario", (req:Request, res:Response) => {
    const idDoUser= Number(req.query.idDoUser)

    if(!idDoUser) {
        res.status(400).send('Necessário inserir o id do usuário.')
    }

    let listaDoUsuario: allTypes.Tarefa[] = []
    listaDeTarefas.map((tarefa)=> {
        if(idDoUser === tarefa.userId) {
            return listaDoUsuario.push(tarefa)
        }
    })
    
    if (listaDoUsuario.length < 1 ) {
        res.status(400).send("O id inserido não existe.")
    } else {
        res.status(200).send(listaDoUsuario)
    }
})

// Exercício 09
// https://documenter.getpostman.com/view/22375499/2s8YKCH41S

// Exercício 10
app.get("/tarefas/usuarios", (req:Request, res:Response) => {
    const idDoUser= Number(req.query.idDoUser)

    if(!idDoUser) {
        res.status(400).send('Necessário inserir o id do usuário.')
    }

    let listaDoUsuario: allTypes.Tarefa[] = []
    let listaOutros: allTypes.Tarefa[] = []

    listaDeTarefas.map((tarefa)=> {
        if(idDoUser === tarefa.userId) {
            return listaDoUsuario.push(tarefa)
        } else {
            return listaOutros.push(tarefa)
        }
    })
    
    let listaCompleta: allTypes.TarefaFiltrada = {
        todos: {
            selectedUser: listaDoUsuario,
            others:listaOutros
        }
    }

    if (listaDoUsuario.length < 1 ) {
        res.status(400).send("O id inserido não existe.")
    } else {
        res.status(200).send(listaCompleta)
    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});