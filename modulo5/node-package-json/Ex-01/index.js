// Exercício 01

// 1-a) Pode-se utilizar o comando process.argv

// 1-b)
const colors = require('colors');
const name = process.argv[2]
const age = Number (process.argv[3])

if (typeof name === 'string' && !isNaN(age)) {
    console.log(`Olá, ${name}! Você tem ${age} anos.`.rainbow)
} else {
    console.log("Por favor, inserir dois parâmetros válidos.")
}

// 1-c)
const nome = process.argv[2]
const idade = Number (process.argv[3])

if (typeof name === 'string' && !isNaN(age)) {
    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade+7}.`.rainbow)
} else {
    console.log("Por favor, inserir dois parâmetros válidos.")
}
