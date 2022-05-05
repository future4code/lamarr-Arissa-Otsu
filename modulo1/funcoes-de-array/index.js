// Exercícios de interpretação de texto

// Exercício 01
// Irá imprimir:
// [{ nome: "Amanda Rangel", apelido: "Mandi" },{ nome: "Laís Petra", apelido: "Laura" },{ nome: "Letícia Chijo", apelido: "Chijo" }]

// Exercício 02
// ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

// Exercício 03
//[{ nome: "Amanda Rangel", apelido: "Mandi" },{ nome: "Laís Petra", apelido: "Laura" }]

// Exercícios de escrita de código

// Exercício 01
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

// a.
console.log ("Resolução do exercício 01 - item a")

function retornarNomes (pets) {
    return pets.nome
}

let nomesDosPets = pets.map(retornarNomes)
console.log (nomesDosPets)
console.log ("")

// b.
console.log ("Resolução do exercício 01 - item b")

function retornarSalsichas (pets) {
    return pets.raca === "Salsicha"
}

let salsichas = pets.filter(retornarSalsichas)
console.log (salsichas)
console.log ("")

// c.
console.log ("Resolução do exercício 01 - item c")

function retornarPoodles (pets) {
    return pets.raca === "Poodle"
}

function retornarDesconto (pets) {
    return `Você ganhou um cupom de desconto de 10% para a tosar o/a ${pets.nome}`
}

let mensagem = pets.filter(retornarPoodles).map(retornarDesconto)
console.log (mensagem)
console.log ("")

// Exercício 02
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a.
console.log ("Resolução do exercício 02 - item a")

function retornarNomesDosItens (produtos) {
    return produtos.nome
}

let nomeDosProdutos = produtos.map(retornarNomesDosItens)
console.log (nomeDosProdutos) 
console.log ("")

// b.
console.log ("Resolução do exercício 02 - item b")

function aplicarDesconto (produtos) {
    return {
        nome: produtos.nome,
        preco: produtos.preco*0.95
    }
}

let produtosComDesconto = produtos.map(aplicarDesconto)
console.log (produtosComDesconto)
console.log ("") 

// c.
console.log ("Resolução do exercício 02 - item c")

function retornarBebidas (produtos) {
    return produtos.categoria === "Bebidas"
}

let bebidas = produtos.filter(retornarBebidas)
console.log (bebidas)
console.log ("")

// d.
console.log ("Resolução do exercício 02 - item d")

function retornarYpe (produtos) {
    return produtos.nome.includes("Ypê")
}

let produtosYpe = produtos.filter(retornarYpe)
console.log(produtosYpe)
console.log ("")

// e.
console.log ("Resolução do exercício 02 - item e")

function construirFrase (produtos){
    return `Compre ${produtos.nome} por ${produtos.preco}`
}

let fraseDosProdutosYpe = produtos.filter(retornarYpe).map(construirFrase)
console.log (fraseDosProdutosYpe)
console.log ("")

// Desafio

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

// a.
console.log ("Resolução do desafio - item a")
function retornarNomeDoPokemon (pokemon){
    return pokemon.nome
}

let pokemonsOrdenados = pokemons.map(retornarNomeDoPokemon)
pokemonsOrdenados.sort()
console.log (pokemonsOrdenados)
console.log ("")

// b.
console.log ("Resolução do desafio - item b")
function retornarTipo (pokemon) {
    return pokemon.tipo
}

let tipoDePokemons = pokemons.map(retornarTipo)
let tipoDePokemonsSemRepeticao = [...new Set(tipoDePokemons)]
console.log(tipoDePokemonsSemRepeticao)
console.log ("")