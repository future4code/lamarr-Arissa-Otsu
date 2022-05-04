// Exercícios de interpretação de código

// Exercício 01
// O código está somando o incremento i à variável valor desde que i seja menor do que o 5. Quando i for igual a 5, o código imprime a variável valor.
// Irá imprimir o valor 10 (0 + 1 + 2 + 3 + 4 = 10)

// Exercício 02
/* a. 19
      21
      23
      25
      27
      30
*/
// b. 
/* const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    console.log(lista.indexOf(numero))
} */


// Exercício 03
// *
// **
// ***
// ****

// Exercícios de escrita de código

// Exercício 01
console.log ("Exercício 01")
let bichinhosDeEstimacao = Number(prompt("Quantos bichinhos de estimação você possui?"))
let bichinho = ""
let arrayDeBichinhos = []
if (bichinhosDeEstimacao===0) {
    console.log ("Que pena! Você pode adotar um pet.")
} else {
    for (let i=0; i < bichinhosDeEstimacao; i++) {
        bichinho = prompt("Digite o nome de cada um do seu bichinho de estimação")
        arrayDeBichinhos[i] = bichinho
    }
    console.log (arrayDeBichinhos)
} 
console.log ("")

// Exercício 02
let arrayOriginal = [-7, -4, 1, 2, 3, 4, 5, 6, 10, 21, 98, 202, 1064]

// a.
console.log ("Exercício 02 - item a")
function imprimirArray (array) {
    for (let i=0; i < array.length; i++ ){
        console.log (array[i])
    }
}

imprimirArray(arrayOriginal)
console.log ("")

// b.
console.log ("Exercício 02 - item b")
function imprimirArrayDividido (array) {
    for (let i=0; i < array.length; i++ ){
        let numDividido = array[i]/10
        console.log (numDividido)
    }
}

imprimirArrayDividido(arrayOriginal) 
console.log ("")

// c.
console.log ("Exercício 02 - item c")
function imprimirArrayDePares (array) {
    let arrayDeNumeroPar = []
    for (let i=0; i < array.length; i++ ){
        let resto = array[i]%2
        if (resto === 0) {
            arrayDeNumeroPar.push(array[i])
        }
    }
    console.log (arrayDeNumeroPar)
}

imprimirArrayDePares(arrayOriginal) 
console.log ("")

// d.
console.log ("Exercício 02 - item d")
function imprimirArrayDeStrings (array) {
    let arrayDeStrings = []
    for (let i=0; i < array.length; i++ ){
        let frase = `O elemento do index ${i} é: ${array[i]}`
        arrayDeStrings.push(frase)
        }
    console.log (arrayDeStrings)
}

imprimirArrayDeStrings(arrayOriginal) 
console.log ("")

// e. 
console.log ("Exercício 02 - item e")
function imprimirMaiorEMenor (array) {
    let maiorNumero = -10000000000
    let menorNumero = 100000000000
    for (let i=0; i < array.length; i++ ) {
            if (array[i] > maiorNumero) {
                maiorNumero = array[i]
            }
    }
    for (let i=0; i < array.length; i++ ) {
        if (array[i] < menorNumero) {
            menorNumero = array[i]
        }
    }
    console.log (`O maior número é ${maiorNumero}. E o menor número é ${menorNumero}.`)
}

imprimirMaiorEMenor(arrayOriginal)
console.log ("")

// Desafios

// Exercício 01
/* console.log ("Vamos jogar!")
let numeroDoPrimeiroJogador = Number(prompt("Digite um número."))
let numeroChutado

while (numeroDoPrimeiroJogador !== numeroChutado) {
    numeroChutado = Number(prompt("Chute um número."))
    if (numeroChutado < numeroDoPrimeiroJogador) {
        console.log (`O número chutado foi: ${numeroChutado}`)
        console.log ("Errou!! O número escolhido é maior do que o número que você chutou.")
    } else if (numeroChutado > numeroDoPrimeiroJogador) {
        console.log (`O número chutado foi: ${numeroChutado}`)
        console.log ("Errou!! O número escolhido é menor do que o número que você chutou.")
    } 
}
console.log (`O número chutado foi: ${numeroChutado}`)
console.log ("Acertou!") */


