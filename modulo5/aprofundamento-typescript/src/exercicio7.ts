// Exercício 7


type Pratos = {
    nome: string,
    custo: number,
    venda: number,
    ingredientes: string[]
}

let arrayDeProdutos = [
    {nome: "Batata Frita", custo: 20, venda: 35, ingredientes:["batata", "sal", "óleo"]},
    {nome: "Camarão Empanado", custo: 38, venda: 70, ingredientes:["camarão", "sal", "óleo", "farinha"]}
]

// a)
function cadastrarProduto (prato:Pratos): Pratos[] {
    arrayDeProdutos.push(prato)
    return arrayDeProdutos
}

console.log(cadastrarProduto({nome: "Caesar Salad", custo: 22, venda: 40, ingredientes:["alface", "sal", "molho"]}))

// b)
function retornarValor (nome:string) {
    for (let i=0; i<arrayDeProdutos.length; i++) {
        if (nome === arrayDeProdutos[i].nome) {
            return {nome: nome, preco: arrayDeProdutos[i].venda}
        } 
    }
}

console.log(retornarValor("Camarão Empanado"))

// c)
type Venda = {
    nome: string,
    cliente: string
}

let arraydeProdutosVendidos: Venda[] = [{nome: "Batata Frita", cliente: "Arissa"}]

function realizarVenda (nome:string, cliente: string): Venda[] {
    arraydeProdutosVendidos.push({nome, cliente})
    return arraydeProdutosVendidos
}

console.log(realizarVenda("Camarão Empanado", "Luna"))

//d)
let arrayDeLucro: number[] = []
let somaDosLucros: number = 0
function determinarLucro () {
    arraydeProdutosVendidos.map((prato) => {
        for (let y=0; y<arrayDeProdutos.length; y++) {
            if(prato.nome === arrayDeProdutos[y].nome) {
                return arrayDeLucro.push(arrayDeProdutos[y].venda - arrayDeProdutos[y].custo)
            }
        }
    }) 

    for (let x=0; x<arrayDeLucro.length; x++) {
        somaDosLucros += arrayDeLucro[x]
    }

    return (`O lucro é de R$ ${somaDosLucros},00`)
}

console.log(determinarLucro())