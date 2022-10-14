const input = require("readline-sync")

const idade=input.question("Qual e a sua idade? ")
const escolaridade=input.question("Possui ensino medio completo? Responda com sim ou nao. ")
const horasDisponiveis=input.question("Quantas horas voce tem disponivel por semana para o curso? ")
const turno = input.question("O seu curso sera o integral ou noturno? ")


function checarDados (idade:number, escolaridade:string, horasDisponiveis:number, turno:string):boolean {
    if (idade >= 18 && escolaridade.toLocaleLowerCase()==="sim" && horasDisponiveis >= 20  && turno.toLocaleLowerCase() === "noturno") {
        return true
    }else if(idade >= 18 && escolaridade.toLocaleLowerCase()==="sim" && horasDisponiveis >= 40 && turno.toLocaleLowerCase() === "integral") {
        return true 
    }else {
        return false
    }
}

console.log(checarDados(idade,escolaridade,horasDisponiveis,turno))