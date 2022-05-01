// Exercícios de interpretação de código

// Exercício 01
// a. O código verifica se o resto da divisão do número digitado pelo usuário por 2 é igual a zero.
// b. Para números que possuem resto igual a zero, isto é, números pares
// c. Para números que não possuem resto igual a zero, ou seja, números ímpares.

// Exercício 02
// a. O código retorna o preço da fruta escolhida pelo usuário.
// b. "O preço da fruta Maçã é R$ 2.25"
// c. "O preço da fruta Pêra é R$ 5"

// Exercício 03
// a. A primeira linha está pedindo para o usuário digitar um número, transformando o string recebido em um number e armazenando esse número na váriavel,
// b. Irá retornar a mensagem "Esse número passou no teste" para o número 10.
//    Para o número -10, nenhuma mensagem será exibida.
// c. Sim, irá ser exibida uma mensagem de erro para a variável mensagem. Para que ela fosse exibida, o console.log (mensagem) deveria estar dentro do if, pois a variável foi definida apenas dentro da condicional.

// Exercícios de escrita de código

// Exercício 01
const idade = Number(prompt("Digite a sua idade."))

if (idade >= 18) {
    console.log ("Você pode dirigir.")
} else {
    console.log ("Você não pode dirigir.")
}

// Exercício 02
let turno = prompt ("Qual o turno em que você estuda? Digite M para Matutino, V para Vespertino e N para Noturno.")
if (turno === "M") {
    console.log ("Bom dia!")
} else if (turno === "V") {
    console.log ("Boa tarde!")
} else if (turno === "N") {
    console.log ("Boa noite!")
} else {
    console.log ("Turno não encontrado.")
} 

// Exercício 03
let outroTurno = prompt ("Qual o turno em que você estuda? Digite M para Matutino, V para Vespertino e N para Noturno.")
switch (outroTurno) {
    case "M":
        console.log ("Bom dia!")
        break
    case "V":
        console.log ("Boa tarde!")
        break
    case "N":
        console.log ("Boa noite!")
        break
    default:
        console.log ("Turno não encontrado.")
        break
} 

// Exercício 04
let generoDoFilme = prompt("Qual o gênero do filme que irão assistir?")
let valorDoIngresso = Number(prompt("Qual é o valor do ingresso?"))

function escolherFilme (genero,valor) {
    if ((genero === "fantasia") && (valor < 15)) {
    console.log ("Bom filme!")
    }   else {
    console.log ("Escolha outro filme.")
    }
}

escolherFilme(generoDoFilme,valorDoIngresso) 

// Desafios
// Exercício 01
/* let generoDoFilme = prompt("Qual o gênero do filme que irão assistir?")
let valorDoIngresso = Number(prompt("Qual é o valor do ingresso?"))

function escolherFilme (genero,valor) {
    if ((genero === "fantasia") && (valor < 15)) {
    let comida = prompt ("Qual lanche irá comprar?")
    console.log ("Bom filme!")
    console.log (`Aproveite o seu ${comida}.`)
    }   else {
    console.log ("Escolha outro filme.")
    }
}

escolherFilme(generoDoFilme,valorDoIngresso) */

// Exercício 02
/* let nomeCompleto = prompt ("Digite o seu nome completo.")
let tipoDeJogo = prompt ("Qual o tipo de jogo? Digite IN para internacional e DO para doméstico.")
let etapaDoJogo = prompt ("Qual é a etapa do jogo? Digite SF para semi-final, DT para decisão do terceiro lugar e FI para final.")
let categoria = Number(prompt ("Qual a categoria? Digite 1, 2, 3 ou 4."))
let quantidadeDeIngressos = Number(prompt("Quantos ingressos irá comprar?"))
const dolar = 4.10

function imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor){
    console.log ("--- Dados da compra ---")
    console.log (`Nome do cliente: ${nomeCompleto}`)
    if (tipoDeJogo === "DO") {
        let tipoDeJogoCompleto = "Nacional"
        console.log (`Tipo de jogo: ${tipoDeJogoCompleto}`)
    } else {
        let tipoDeJogoCompleto = "Internacional"
        console.log (`Tipo de jogo: ${tipoDeJogoCompleto}`)
    }
    if (etapaDoJogo === "SF") {
        let etapaDojogoCompleto = "Semi-final"
        console.log (`Etapa do jogo: ${etapaDojogoCompleto}`)
    } else if (etapaDoJogo === "DT") {
        let etapaDojogoCompleto = "Decisão do 3º lugar"
        console.log (`Etapa do jogo: ${etapaDojogoCompleto}`)
    } else {
        let etapaDojogoCompleto = "Final"
        console.log (`Etapa do jogo: ${etapaDojogoCompleto}`)
    }
    console.log (`Categoria: ${categoria}`)
    console.log (`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log (`--- Valores ---`)
    if (tipoDeJogo === "DO") {
        console.log (`Valor do ingresso: R$ ${valorIndividual}`)
        console.log (`Valor total: R$ ${valor}`)
    } else {
        console.log (`Valor do ingresso: U$ ${valorIndividual}`)
        console.log (`Valor total: U$ ${valor}`)
    }
}


if ((tipoDeJogo==="DO")&&(etapaDoJogo==="SF")&&(categoria===1)){
    let valorIndividual = 1320
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="DO")&&(etapaDoJogo==="SF")&&(categoria===2)) {
    let valorIndividual = 880
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="DO")&&(etapaDoJogo==="SF")&&(categoria===3)) {
    let valorIndividual = 550
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="DO")&&(etapaDoJogo==="SF")&&(categoria===4)) {
    let valorIndividual = 220
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="DO")&&(etapaDoJogo==="DT")&&(categoria===1)) {
    let valorIndividual = 660
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="DO")&&(etapaDoJogo==="DT")&&(categoria===2)) {
    let valorIndividual = 440
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="DO")&&(etapaDoJogo==="DT")&&(categoria===3)) {
    let valorIndividual = 330
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="DO")&&(etapaDoJogo==="DT")&&(categoria===4)) {
    let valorIndividual = 170
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="DO")&&(etapaDoJogo==="FI")&&(categoria===1)) {
    let valorIndividual = 1980
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="DO")&&(etapaDoJogo==="FI")&&(categoria===2)) {
    let valorIndividual = 1320
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="DO")&&(etapaDoJogo==="FI")&&(categoria===3)) {
    let valorIndividual = 880
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="DO")&&(etapaDoJogo==="FI")&&(categoria===4)) {
    let valorIndividual = 330
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="IN")&&(etapaDoJogo==="SF")&&(categoria===1)){
    let valorIndividual = 1320*dolar
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="IN")&&(etapaDoJogo==="SF")&&(categoria===2)) {
    let valorIndividual = 880*dolar
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="IN")&&(etapaDoJogo==="SF")&&(categoria===3)) {
    let valorIndividual = 550*dolar
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="IN")&&(etapaDoJogo==="SF")&&(categoria===4)) {
    let valorIndividual = 220*dolar
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="IN")&&(etapaDoJogo==="DT")&&(categoria===1)) {
    let valorIndividual = 660*dolar
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="IN")&&(etapaDoJogo==="DT")&&(categoria===2)) {
    let valorIndividual = 440*dolar
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="IN")&&(etapaDoJogo==="DT")&&(categoria===3)) {
    let valorIndividual = 330*dolar
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="IN")&&(etapaDoJogo==="DT")&&(categoria===4)) {
    let valorIndividual = 170*dolar
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="IN")&&(etapaDoJogo==="FI")&&(categoria===1)) {
    let valorIndividual = 1980*dolar
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="IN")&&(etapaDoJogo==="FI")&&(categoria===2)) {
    let valorIndividual = 1320*dolar
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="IN")&&(etapaDoJogo==="FI")&&(categoria===3)) {
    let valorIndividual = 880*dolar
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else if ((tipoDeJogo==="IN")&&(etapaDoJogo==="FI")&&(categoria===4)) {
    let valorIndividual = 330*dolar
    let valor = quantidadeDeIngressos*valorIndividual
    imprimirDadosDeCompra (nomeCompleto, tipoDeJogo, etapaDoJogo, categoria,quantidadeDeIngressos, valorIndividual, valor)
} else {
    console.log ("Informações não encontradas. Verifique a sua ortografia e tente novamente.")
} */




