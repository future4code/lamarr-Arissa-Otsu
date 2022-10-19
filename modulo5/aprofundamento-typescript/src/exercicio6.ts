// Exercício 6

type Dados = {
    nome: string;
    preco: number;
    classificacao: string
}

type DadosComDesconto = {
    nome: string;
    preco: number;
    classificacao: string
    precoComDesconto: number
}

function precificarComDesconto (array: Dados[]): DadosComDesconto[] {
    let arrayComDesconto: DadosComDesconto[] = []
    array.map((item) => {
        switch (item.classificacao) {
            case "verão":
                return arrayComDesconto.push({ ...item, precoComDesconto: item.preco * 0.95 })
            case "inverno":
                return arrayComDesconto.push({ ...item, precoComDesconto: item.preco * 0.90 })
            case "banho":
                return arrayComDesconto.push({ ...item, precoComDesconto: item.preco * 0.96 })
            case "íntimas":
                return arrayComDesconto.push({ ...item, precoComDesconto: item.preco * 0.93 })
        }
    })
    return arrayComDesconto
}

const exemplo = [
    {nome:"biquíni", preco: 10, classificacao: "banho"},
    {nome:"casaco de lã", preco: 10, classificacao: "inverno"},
    {nome:"sutiã", preco: 10, classificacao: "íntimas"},
    {nome:"camiseta", preco: 10, classificacao: "verão"}
]
console.log(precificarComDesconto(exemplo))