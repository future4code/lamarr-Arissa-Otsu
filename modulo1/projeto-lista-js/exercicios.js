// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Digite a altura do retângulo."))
  let largura = Number(prompt("Digite a largura do retângulo."))

console.log((altura*largura))
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual."))
  let anoNascimento = Number(prompt("Digite o ano do seu nascimento."))
  
  console.log((anoAtual-anoNascimento))
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Digite o seu nome.")
  let idade = prompt("Digite a sua idade.")
  let email = prompt("Digite o seu e-mail.")  
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let primeiraCor = prompt("Digite uma cor.")
  let segundaaCor = prompt("Digite uma segunda cor.")
  let terceiraCor = prompt("Digite uma terceira cor.")

  let cores = [primeiraCor, segundaaCor, terceiraCor]
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let a = array[0]  
  let b = array[array.length-1]

  array.splice(0,1,b)
  array.splice(array.length-1,1,a)
    
  return array
}
 
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual."))
  let anoDeNascimento = Number(prompt("Digite o seu ano de nascimento."))
  let anoDaCarteira = Number(prompt("Digite o ano de emissão da sua carteira de identidade."))

  idade = anoAtual - anoDeNascimento
  renovacao = anoAtual - anoDaCarteira
  
  let condicao1 = (idade <= 20 && renovacao >=5)
  let condicao2 = (idade > 20 && idade <= 50 && renovacao >= 10)
  let condicao3 = (idade > 50 && renovacao > 15)

  console.log (condicao1||condicao2||condicao3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
   let primeiraCondicao = ano%400
   let segundaCondicao = ano%4
   let terceiraCondicao = ano%100
   
   let comparacao = ((segundaCondicao===0)&&(terceiraCondicao!==0))||(primeiraCondicao===0)
   return comparacao
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("Você tem mais de 18 anos? (sim ou não)")
  let escolaridade = prompt("Você tem ensino médio completo? (sim ou não)")
  let disponibilidade = prompt("Você tem disponibilidade exclusiva durante os horários do curso? (sim ou não)")

  let validade = (idade==="sim")&&(escolaridade==="sim")&&(disponibilidade==="sim")
  console.log(validade)
}

