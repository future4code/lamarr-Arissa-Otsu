// Exercício 1

//a) Ao tentar inserir um número, a seguinte informação aparece: Type 'number' is 
//   not assignable to type 'string', ouseja, o Typescript não permite realizar a 
//   atribuição entre tipos diferentes de variáveis.

const minhaString:string = "string"

//b)  Pode-se utilizar o Union Type.

const meuNumero:number|string = "string"

//c)
type Pessoa = {
    nome:string,
    idade:number,
    corFavorita:string
}

const pessoa1: Pessoa = {
    nome: "Arissa",
    idade: 24,
    corFavorita: "Lilás"
}

const pessoa2: Pessoa = {
    nome: "Luna",
    idade: 3,
    corFavorita: "Azul"
}

const pessoa3: Pessoa = {
    nome: "Bruno",
    idade: 24,
    corFavorita: "Preto"
}

const pessoa4: Pessoa = {
    nome: "Paulo",
    idade: 52,
    corFavorita: "Branco"
}

//d) 
enum CoresDoArcoIris {
    Vermelho = "Vermelho",
    Laranja = "Laranja",
    Amarelo = "Amarelo",
    Verde = "Verde",
    Azul = "Azul",
    Anil = "Anil",
    Violeta = "Violeta"
}

const pessoa5: Pessoa = {
    nome: "Arissa",
    idade: 24,
    corFavorita: CoresDoArcoIris.Violeta
}

const pessoa6: Pessoa = {
    nome: "Luna",
    idade: 3,
    corFavorita: CoresDoArcoIris.Azul
}

const pessoa7: Pessoa = {
    nome: "Bruno",
    idade: 24,
    corFavorita: CoresDoArcoIris.Verde
}

const pessoa8: Pessoa = {
    nome: "Paulo",
    idade: 52,
    corFavorita: CoresDoArcoIris.Anil
}