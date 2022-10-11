// Exercício 02
const colors = require('colors');

const operations = process.argv[2]
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])

if (typeof operations === "string" && !isNaN(n1) && !isNaN(n2)) {
    switch(operations){
        case "add":
            console.log (`O resultado da soma é: ${n1 + n2}.`.rainbow)
            break;
        case "sub":
            console.log (`O resultado da subtração é: ${n1 - n2}.`.rainbow)
            break;
        case "mult":
            console.log (`O resultado da multiplicação é: ${n1 * n2}.`.rainbow)
            break;
        case "div":
            console.log (`O resultado da divisão é: ${n1 / n2}.`.rainbow)
            break;
        default: 
            console.log("Escolha uma operação existente: add, sub, div ou mult.")
    }
} else {
    console.log ("Por favor, inserir parâmetros válidos.")
}

