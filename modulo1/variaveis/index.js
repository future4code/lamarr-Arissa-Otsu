// Exercícios de interpretação de código

/* Questão 01 - A saída de console.log (b) será 10. 
                A saída de console.log (a,b) será 10,5
*/

// Questão 02 - A saída de console.log (a,b,c) será 10,10,10

/* Questão 03 - A variável p poderia ser chamada de horasTrabalhadasPorDia
                A variável t poderia ser chamada de rendaDiaria
*/

// Exercícios de escrito de código

//  Questão 01
let nome1
let idade1
console.log (typeof nome1)
console.log (typeof idade1)
// O tipo de variável retornada foi undefined. Isso acontece pois não foi atribuído um valor para essa variável.
let nome = prompt ("Qual é o seu nome?")
let idade = prompt ("Qual é a sua idade?")
console.log (typeof nome)
console.log (typeof idade)
// O tipo de variável retornada foi string, pois a variável armazenou a resposta recebida como texto.
console.log ("Olá,", nome,"!","Você tem", idade, "anos.")   

// Questão 02
let cafeDaManha = prompt ("Você tomou café da manhã hoje?")
let almoço = prompt ("Você almoçou hoje?")
let janta = prompt ("Você jantou hoje?")
console.log ("Você tomou café da manhã hoje?", cafeDaManha)
console.log ("Você almoçou hoje?", almoço) 
console.log ("Você jantou hoje?", janta) 
    
// Questão 03
let a = 10
let b = 25

c=a
a=b
b=c

console.log ("O novo valor de a é", a)
console.log ("O novo valor de b é", b)
