// Exercícios de interpretação de código

// Exercício 01
// a. Vai retornar 10 e 50, respectivamente.
// b. O sistema iria realizar a multiplicação, mas no console não seria impresso nada.

// Exercício 02
// a. Essa função está transformando todo o texto do usuário em letras minúsculas e verificando se existe a palavra cenoura nesse mesmo texto.
// b. i. true
//    ii. true
//    iii. true

// Exercícios de escrita de código

// Exercício 01
// a.
let formarFrase = function () {
   const frase = "Eu sou Arissa, tenho 24 anos, moro em Paraguaçu Paulista e sou estudante da Labenu."
   return frase
}
 console.log(formarFrase())

// b.
let formarFrase2 = function(nome, idade, cidade, profissao){
    const frase2 = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
    console.log(frase2)
}

let nomeDoUsuario = prompt("Digite seu nome.")
let idadeDoUsuario = prompt("Digite sua idade.")
let cidadeDoUsuario = prompt("Digite a cidade onde mora.")
let profissaoDoUsuario = prompt("Digite sua profisssão.")

formarFrase2(nomeDoUsuario, idadeDoUsuario, cidadeDoUsuario, profissaoDoUsuario)

// Exercício 02

// a.
let somarNumeros = function (a,b){
    soma = a + b
    return soma
}

let primeiroNumero = Number(prompt("Digite um número."))
let segundoNumero = Number(prompt("Digite um outro número."))

console.log("A soma dos números é:", somarNumeros(primeiroNumero,segundoNumero))

//b.
let igualdadeDosNumeros = function (a,b){
    return a>=b
}

let primeiroNumero1 = Number(prompt("Digite um número."))
let segundoNumero1 = Number(prompt("Digite um outro número."))

console.log("O primeiro número é maior ou igual ao segundo?", igualdadeDosNumeros(primeiroNumero1,segundoNumero1))

// c.
let numeroPar = function (a){
    resto = a%2
    console.log("O número digitado é par?", resto===0)
}

let numero = prompt("Digite um número.")
numeroPar(numero) 

//d.
let tamanhoDaFrase = function(frase){
    console.log("O tamanho da frase é:", frase.length,".", "A frase em letras maiúsculas é:", frase.toUpperCase())
}

let fraseDoUsuario = prompt("Digite uma frase.")
tamanhoDaFrase(fraseDoUsuario) 

// Exercício 03
let somar = function(a,b){
    return a+b
 }

let subtrair = function(a,b){
    subtracao = a-b
    console.log("Diferença:", subtracao)
}

let multiplicar = function(a,b){
    multiplicacao = a*b
    console.log("Multiplicação:", multiplicacao)
}

let dividir = function(a,b){
    divisao = a/b
    console.log("Divisão:", divisao)
}

let numero1 = Number(prompt("Digite um número."))
let numero2 = Number(prompt("Digite um segundo número."))

console.log ("Número inseridos:", numero1, "e", numero2)
console.log("Soma:", somar(numero1,numero2))
subtrair(numero1,numero2)
multiplicar(numero1,numero2)
dividir(numero1,numero2) 

// Desafios
/* // Exercício 01
let imprimirNumero = numero => {
    console.log (numero)
}

let somar = (a,b) => {
    soma = a+b
    imprimirNumero(soma)
}

let n1 = Number(prompt("Digite um número."))
let n2 = Number(prompt("Digite um segundo número."))
somar(n1,n2)

// Exercício 02
let teoremaDePitagoras = function(a,b){
    hipotenusa = Math.sqrt((a*a) + (b*b))
    return hipotenusa
}

let a = Number(prompt("Digite o valor do primeiro cateto."))
let b = Number(prompt("Digite o valor do segundo cateto."))
console.log("O valor da hipotenusa é:", teoremaDePitagoras(a,b))  
 */
