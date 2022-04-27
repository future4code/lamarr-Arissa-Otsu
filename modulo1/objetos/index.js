// Exercícios de interpretação de código

// Exercício 01
// a. Matheus Nachtergaele
//    Virginia Cavendish
//    canal: "Globo", horario: "14h"

// Exercício 02
// a. nome: "Juca", idade: 3, raca: "SRD"
//    nome: "Juba", idade: 3, raca: "SRD"
//    nome: "Jubo", idade: 3, raca: "SRD"
// b. Os três pontos realiza uma cópia do objeto.

// Exercício 03
// a. false
//    undefined
// b. O primeiro valor impresso é o retorno do valor existente para a chave "backender" do objeto.
//    O segundo valor impresso é retornado como undefined porque não existe uma chave chamada "altura" dentro do objeto.

// Exercícios de escrita de código

// Exercício 01
// a.
const pessoa = {
    nome: "Arissa",
    apelidos: ["Arissinha", "Lil A", "Yasmin"]
}

function formarFrase(nome){
   return `Eu sou ${nome.nome}, mas pode me chamar de: ${nome.apelidos[0]}, ${nome.apelidos[1]} ou ${nome.apelidos[2]}.`
}

console.log(formarFrase(pessoa))

// b.
const outroApelido = {
    ... pessoa,
    apelidos: ["Japa", "Otsusan", "Japinha"]
}
console.log(formarFrase(outroApelido))

// Exercício 02
// a.
const dadosPrimeiraPessoa = {
    nome: "Arissa",
    idade: 24,
    profissao: "Analista de Processos"
}

const dadosSegundaPessoa = {
    nome: "Bruno",
    idade: 24,
    profissao: "Chef de cozinha"
}

// b.
function formarArrayDosDados(dados) {
   return [dados.nome, dados.nome.length, dados.idade, dados.profissao, dados.profissao.length]
}

console.log(formarArrayDosDados(dadosPrimeiraPessoa))
console.log(formarArrayDosDados(dadosSegundaPessoa))

// Exercício 03
// a.
let carrinho = []

// b.
const fruta1 = {
    nome: "Morango",
    disponibilidade: true
}

const fruta2 = {
    nome: "Uva",
    disponibilidade: true
}

const fruta3 = {
    nome: "Caqui",
    disponibilidade: true
}

// c.
function colocarNoCarrinho(compras){
    compras.push(fruta1)
    compras.push(fruta2)
    compras.push(fruta3)
    return compras
}

// d.
console.log(colocarNoCarrinho(carrinho))

// Desafios

// Exercício 01
/*  function imprimirDados () {
    let nome = prompt("Qual é o seu nome?")
    let idade = prompt("Qual é a sua idade?")
    let profissao = prompt("Qual é a sua profissão?")
    let dados = {
        nome: nome,
        idade: idade,
        profissão: profissao
    }
    console.log(dados)
    console.log(typeof dados)
}

imprimirDados() 
 */

// Exercício 02
/* const filme1 = {
    nome: "Como eu era antes de você",
    lançamento: 2016
}

const filme2 = {
    nome: "Simplesmente acontece",
    lançamento: 2014
}

function comparacaoDosFilmes (filme1,filme2) {
    console.log ("O primeiro filme foi lançado antes do segundo?", (filme1.lançamento < filme2.lançamento))
    console.log ("O primeiro filme foi lançado no mesmo ano do segundo?", (filme1.lançamento === filme2.lançamento))
}

comparacaoDosFilmes(filme1,filme2)  */

// Exercício 03
/* // a.
let carrinho = []

// b.
const fruta1 = {
    nome: "Morango",
    disponibilidade: true
}

const fruta2 = {
    nome: "Uva",
    disponibilidade: true
}

const fruta3 = {
    nome: "Caqui",
    disponibilidade: true
}

// c.
function colocarNoCarrinho(compras){
    compras.push(fruta1)
    compras.push(fruta2)
    compras.push(fruta3)
    return compras
}

// d.
console.log(colocarNoCarrinho(carrinho))

// e.
function controlarEstoque(fruta){
    const disponibilidadeInvertida = {
        nome: fruta.nome,
        disponibilidade: !fruta.disponibilidade
    }
    return disponibilidadeInvertida
}

console.log(controlarEstoque(fruta1))
console.log(controlarEstoque(fruta2))
console.log(controlarEstoque(fruta3)) 
*/