import express, { Request, Response } from "express"
import { listaDeProdutos } from "./data"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

// Exercício 01
app.get("/test", (req:Request, res:Response) => {
    res.status(200).send("Servidor rodando na porta http://localhost:3003!")
})

// Exercício 02 -> arquivo data.ts

// Exercício 03 -> arquivo type.ts

// Exercício 04
app.post("/produtos", (req:Request, res:Response) => {
    const {name, price} = req.body
    try {
        if (!name){
            const erro=new Error("O nome do produto não foi informado!");
            erro.name="MissingProductName";
            throw erro;
        } else if (!price) {
            const erro=new Error("O preço do produto não foi informado!");
            erro.name="MissingProductPrice";
            throw erro;
        } else if (typeof name !== "string") {
            const erro=new Error("O parâmetro name deve ser do tipo string!");
            erro.name="ProductNameIsNotAString";
            throw erro;
        } else if (typeof price !== "number") {
            const erro=new Error("O parâmetro price deve ser do tipo number!");
            erro.name="ProductNumberIsNotANumber";
            throw erro;
        } else if (price<0) {
            const erro=new Error("O parâmetro price deve ser maior do que zero!");
            erro.name="ProductNumberIsNotGreaterThanZero";
            throw erro;
        } else {
            listaDeProdutos.push({id: Date.now().toString(), name, price})
            res.status(200).send(listaDeProdutos)
        }
    } catch (e:any){
        if(e.name==="MissingProductName"){
            res.status(422).send(e.message);
        } else if(e.name==="MissingProductPrice"){
            res.status(422).send(e.message);
        } else if(e.name==="ProductNameIsNotAString"){
            res.status(422).send(e.message);
        } else if(e.name==="ProductNumberIsNotANumber"){
            res.status(422).send(e.message);
        } else if(e.name==="ProductNumberIsNotGreaterThanZero"){
            res.status(422).send(e.message);
        } else {
            res.status(500).send(e.message)
        }
    }
})

// Exercício 05
app.get("/produtos", (req:Request, res:Response) => {
    res.status(200).send(listaDeProdutos)
})

// Exercício 06
app.put("/produtos", (req:Request, res:Response) => {
    const idDoProduto = req.headers.authorization
    const {price} = req.body

    try {
        if (!price) {
            const erro=new Error("O preço do produto não foi informado!");
            erro.name="MissingProductPrice";
            throw erro;
        } 
        if (typeof price !== "number") {
            const erro=new Error("O parâmetro price deve ser do tipo number!");
            erro.name="ProductNumberIsNotANumber";
            throw erro;
        } 
        if (price<=0) {
            const erro=new Error("O parâmetro price deve ser maior do que zero!");
            erro.name="ProductNumberIsNotGreaterThanZero";
            throw erro;
        }
        if (!idDoProduto) {
            const erro=new Error("O id do produto não foi informado!");
            erro.name="MissingProductId";
            throw erro;
        }

        const productSelectedById = listaDeProdutos.find((produto)=>{
            return produto.id === idDoProduto
        })

        if (!productSelectedById) {
            const erro=new Error("Produto não encontrado!");
            erro.name="ProductNotFound";
            throw erro;
        } else {
            let listaAtualizada = listaDeProdutos.map((produto => {
                if (produto.id === idDoProduto) {
                    return {...produto, price: price}
                }
                return produto
            }))
            res.status(200).send(listaAtualizada)
        }

    } catch (e:any) {
        if(e.name==="MissingProductPrice"){
            res.status(422).send(e.message);
        } else if(e.name==="ProductNumberIsNotANumber"){
            res.status(422).send(e.message);
        } else if(e.name==="ProductNumberIsNotGreaterThanZero"){
            res.status(422).send(e.message);
        } else if (e.name==="ProductNotFound"){
            res.status(404).send(e.message);
        } else if (e.name==="MissingProductId"){
            res.status(401).send(e.message);
        } else {
            res.status(500).send(e.message)
        }
    }
})

// Exercício 07
app.delete("/produtos", (req:Request, res:Response) => {
    const idDoProduto = req.query.idDoProduto

    try {
        if (!idDoProduto) {
            const erro=new Error("O id do produto não foi informado!");
            erro.name="MissingProductId";
            throw erro;
        }

        const productSelectedById = listaDeProdutos.find((produto)=>{
            return produto.id === idDoProduto
        })

        if (!productSelectedById) {
            const erro=new Error("Produto não encontrado!");
            erro.name="ProductNotFound";
            throw erro;
        } 

        let novaLista = listaDeProdutos.filter((produto)=> {
            return (produto.id !== idDoProduto) 
        })
    
        res.status(200).send(novaLista)

    } catch (e:any) {
        if (e.name==="MissingProductId"){
            res.status(422).send(e.message);
        } else if (e.name==="ProductNotFound") {
            res.status(404).send(e.message);
        } else {
            res.status(500).send(e.message)
        }
    }
})

// Exercício 11
app.get("/produtosfiltrados", (req:Request, res:Response) => {
    let search = req.query.search
    if(search && search !==undefined) {
        let listaFiltrada = listaDeProdutos.filter((produto) => {
            return produto.name.toLocaleLowerCase() === search?.toString().toLocaleLowerCase()
        })

        if (listaFiltrada.length>0) {
            res.status(200).send(listaFiltrada)
        } else {
            res.status(200).send("O produto não existe!")
        }
    } else {
        res.status(200).send(listaDeProdutos)
    }
})

// Exercício 12
app.put("/produtos/modificacao", (req:Request, res:Response) => {
    const idDoProduto = req.headers.authorization
    const {price, name} = req.body

    try {
        if (!idDoProduto) {
            const erro=new Error("O id do produto não foi informado!");
            erro.name="MissingProductId";
            throw erro;
        }
        if (!price && !name) {
            const erro=new Error("O preço e o nome do produto não foram informados! Pelo menos um desses parâmetros deve ser inserido.");
            erro.name="MissingProductParameters";
            throw erro;
        } 
        
        if (!price && name) {
            if (typeof name !== "string") {
                const erro=new Error("O parâmetro name deve ser do tipo string!");
                erro.name="ProductNameIsNotAString";
                throw erro;
            } else {
                const productSelectedById = listaDeProdutos.find((produto)=>{
                    return produto.id === idDoProduto
                })
        
                if (!productSelectedById) {
                    const erro=new Error("Produto não encontrado!");
                    erro.name="ProductNotFound";
                    throw erro;
                } else {
                    let listaAtualizada = listaDeProdutos.map((produto => {
                        if (produto.id === idDoProduto) {
                            return {...produto, name: name}
                        }
                        return produto
                    }))
                    res.status(200).send(listaAtualizada)
                }
            }
        }

        if (!name && price) {
            if (typeof price !== "number") {
                const erro=new Error("O parâmetro price deve ser do tipo number!");
                erro.name="ProductNumberIsNotANumber";
                throw erro;
            } else if (price<=0) {
                const erro=new Error("O parâmetro price deve ser maior do que zero!");
                erro.name="ProductNumberIsNotGreaterThanZero";
                throw erro;
            } else {
                const productSelectedById = listaDeProdutos.find((produto)=>{
                    return produto.id === idDoProduto
                })
        
                if (!productSelectedById) {
                    const erro=new Error("Produto não encontrado!");
                    erro.name="ProductNotFound";
                    throw erro;
                } else {
                    let listaAtualizada = listaDeProdutos.map((produto => {
                        if (produto.id === idDoProduto) {
                            return {...produto, price: price}
                        }
                        return produto
                    }))
                    res.status(200).send(listaAtualizada)
                }
            }
        }
    
        if (name && price) {
            if (typeof name !== "string") {
                const erro=new Error("O parâmetro name deve ser do tipo string!");
                erro.name="ProductNameIsNotAString";
                throw erro;
            } else if (typeof price !== "number") {
                const erro=new Error("O parâmetro price deve ser do tipo number!");
                erro.name="ProductNumberIsNotANumber";
                throw erro;
            } else if (price<=0) {
                const erro=new Error("O parâmetro price deve ser maior do que zero!");
                erro.name="ProductNumberIsNotGreaterThanZero";
                throw erro;
            } else {
                const productSelectedById = listaDeProdutos.find((produto)=>{
                    return produto.id === idDoProduto
                })
        
                if (!productSelectedById) {
                    const erro=new Error("Produto não encontrado!");
                    erro.name="ProductNotFound";
                    throw erro;
                } else {
                    let listaAtualizada = listaDeProdutos.map((produto => {
                        if (produto.id === idDoProduto) {
                            return {...produto, price: price, name:name}
                        }
                        return produto
                    }))
                    res.status(200).send(listaAtualizada)
                }
            }
        }
    } catch (e:any) {
        if(e.name==="MissingProductParameters"){
            res.status(422).send(e.message);
        } else if(e.name==="ProductNumberIsNotANumber"){
            res.status(422).send(e.message);
        } else if(e.name==="ProductNumberIsNotGreaterThanZero"){
            res.status(422).send(e.message);
        } else if (e.name==="ProductNotFound"){
            res.status(404).send(e.message);
        } else if (e.name==="MissingProductId"){
            res.status(401).send(e.message);
        } else {
            res.status(500).send(e.message)
        }
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
