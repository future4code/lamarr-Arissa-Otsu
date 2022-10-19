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