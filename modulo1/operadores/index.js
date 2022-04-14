// Resolução dos exercícios de interpretação de código

// Questão 01
/* a. false
   b. false
   c. true
   d. boolean
*/

// Questão 02
/* Há a necessidade de transformar as variavéis primeiroNumero e segundoNumero em variáveis do tipo number para que a operação de soma seja feita.
 O resultado que será impresso no console será a junção dos dois números digitados (primeiroNumerosegundoNumero)
*/

// Questão 03
/* Pode-se utilizar a conversão Number(), conforme código abaixo:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

// Resolução dos exercícios de escrita de código

// Questão 01
let idade = Number(prompt("Qual é a sua idade?"))
let idadeMelhorAmigo = Number(prompt("Qual é a idade do seu melhor amigo ou amiga?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", (idade > idadeMelhorAmigo))
console.log("A diferença de idade entre vocês é:", (idade-idadeMelhorAmigo))

// Questão 02
let numeroPar = Number (prompt("Digite um número par."))
console.log("O resto da divisão é:", (numeroPar % 2)) // O resultado que será impresso será sempre zero, pois todo número par é divisível por 2.
// Se um número ímpar for inserido, o resultado que será impresso será sempre 1.

// Questão 03
let idadeAnos = Number(prompt("Digite a sua idade em anos."))
console.log("A sua idade em meses é:", (idadeAnos*12))
console.log("A sua idade em dias é:", (idadeAnos*365))
console.log("A sua idade em horas é:", (idadeAnos*365*24)) 

// Questão 04
let primeiroNumero = Number(prompt("Digite um número."))
let segundoNumero = Number (prompt("Digite outro número."))

console.log("O primeiro numero é maior que segundo?", (primeiroNumero>segundoNumero))
console.log("O primeiro numero é igual ao segundo?", (primeiroNumero===segundoNumero))
console.log("O primeiro numero é divisível pelo segundo?", ((primeiroNumero%segundoNumero)===0))
console.log("O segundo numero é divisível pelo primeiro?", ((segundoNumero%primeiroNumero)===0)) 

// Resolução dos desafios

/*// Questão 01
let a = 77
let b = 80
let c = 30
console.log ("O valor de 77 °F em K é:", (((a-32)*(5/9))+273.15), "K")
console.log("O valor de 80 °C em °F é:", (b*(9/5)+32),"°F")
console.log("O valor de 30 °C em °F é:", (c*(9/5)+32),"°F.","E o valor de 30 °C em K é:",(c + 273.15) , "K")

let valorEmCelsius = Number(prompt("Digite o valor da temperatura em graus valorEmCelsius."))
console.log("O valor da temperatura digitada em °F é:", (valorEmCelsius*(9/5)+32),"°F.","E o valor da temperatura digitada em K é:",(valorEmCelsius + 273.15) , "K") */

/* // Questão 02
let consumo = 280
let desconto = 15
let valor = 0,05

console.log("O valor a ser pago pelo consumo de 280 quilowatt-hora é:", consumo*valor, "reais.")
console.log("O valor a ser pago pelo consumo de 280 quilowatt-hora com 15% de desconto é:", consumo*valor*(100-desconto)/100, "reais")

let consumoDeEnergia = Number(prompt("Digite o valor do consumo de energia em quilowatt-hora."))
console.log("O valor a ser pago pelo seu consumo de energia é:", consumoDeEnergia*valor, "reais.")
let descontoEnergia = Number(prompt("Digite o valor do desconto em porcentagem."))
console.log("O valor a ser pago pelo seu consumo de energia com desconto é:", consumoDeEnergia*valor*(100-descontoEnergia)/100, "reais")
 */

/* // Questão 03

console.log("20lb equivalem a", (20*0.453592), "kg")
console.log("10.5oz equivalem", (10.5*0.0283495), "kg")
console.log("100mi equivalem a", (100*1609.34), "m")
console.log("50ft equivalem a",(50*0.3048), "m")
console.log("103.56gal equivalem a", (103.56*3.78541) , "l")
console.log("450 xic equivalem a", (450*0.24) , "l")

let valorEmLibras = Number(prompt("Digite o valor em lb que deseja conveter em kg."))
console.log("O valor digitado em lb corresponde a", (valorEmLibras*0.453592), "kg") */

