// Exercícios de interpretação de texto

/* Exercício 01
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
*/

/* Exercício 02
SUBI NUM ÔNIBUS EM MIRROCOS 27 
*/

// Exercícios de escrita de código

// Exercício 01
let nome = prompt("Digite o seu nome.")
let email = prompt("Digite o seu e-mail.")

console.log (`O seu e-mail ${email} foi cadastrado com sucesso. Seja bem vinda(o), ${nome}!`) 


// Exercício 02

// a.
let comidasPreferidas = ["Sashimi", "Pizza", "Batata frita", "Bolo de cenoura", "Brigadeiro"]
console.log (comidasPreferidas)

// b.
console.log ("Essas são minhas comidas preferidas:")
console.log (comidasPreferidas[0])
console.log (comidasPreferidas[1])
console.log (comidasPreferidas[2])
console.log (comidasPreferidas[3])
console.log (comidasPreferidas[4])

// c.
let comidaDoUsuario = prompt("Qual é a sua comida preferida?")
comidasPreferidas[1] = comidaDoUsuario
console.log(comidasPreferidas) 


// Exercício 03

//a.
let listaDeTarefas = []

//b.
let tarefa1 = prompt("Digite uma tarefa que você deve fazer no seu dia.")
let tarefa2 = prompt("Digite uma segunda tarefa que você deve fazer no seu dia.")
let tarefa3 = prompt("Digite uma terceira tarefa que você deve fazer no seu dia.")

//c.
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)

//d.
let indice = Number(prompt ("Digite o índice (0, 1 ou 2) da tarefa que já realizou. Lembrando que: 0 - primeira tarefa, 1 - segunda tarefa e 2 - terceira tarefa."))

//e.
listaDeTarefas.splice(indice,1)

//f.
console.log(listaDeTarefas) 
