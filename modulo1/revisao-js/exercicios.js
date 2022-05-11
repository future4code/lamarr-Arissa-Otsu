// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()

// Desafio
/*   function inverterOrdem (num,indice,array) {
    return array[array.length - indice -1]
  }
  return array.map(inverterOrdem) */
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort( (a,b) => {
    return a-b
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) { 

  function retornarPar (array) {
    if (array%2 === 0){
      return array
    }
  }
  return array.filter(retornarPar) 

// Desafio
/*     let arrayDePares = []
    for (i=0; i < array.length; i++) {
    if (array[i]%2 === 0) {
      arrayDePares.push(array[i])
    }
  }
  return arrayDePares  */

} 

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let novoArray = []
  let numeroElevado = 0
  for (i=0; i < array.length; i++) {
    if (array[i]%2 === 0) {
      numeroElevado = Math.pow(array[i],2)
      novoArray.push(numeroElevado)
    }
  }
  return novoArray
  
/*   function retornarPar (array) {
    if (array%2 === 0){
      return array
    }
  }

  function elevarADois (array) {
    return array*array
  }
  return array.filter(retornarPar).map(elevarADois) */
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNum = -Infinity
  for (i=0; i < array.length; i++) {
    if (array[i] > maiorNum) {
      maiorNum = array[i]
    }
  }
  return maiorNum
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  function encontrarMaiorNumero (num1, num2) {
    if (num1 > num2){
      return num1
    } else {
      return num2
    }
  }

  function encontrarMenorNumero (num1, num2) {
    if (num1 > num2){
      return num2
    } else {
      return num1
    }
  }
  
  function verificarDivisao () {
    let divisao = encontrarMaiorNumero(num1, num2)%encontrarMenorNumero(num1,num2)
    if (divisao === 0) {
      return true
    } else {
      return false
    }    
  }

  function retonarDiferenca (n1, n2) {
    if (n1 > n2) {
      return n1-n2
    } else {
      return n2-n1
    }
  }

  let propriedades = {
    maiorNumero: encontrarMaiorNumero(num1, num2),
    maiorDivisivelPorMenor: verificarDivisao(num1, num2),
    diferenca: retonarDiferenca(num1, num2)
  }
  
  return propriedades
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let arrayDeNumerosPares = []
  for (i=0; i<n; i++) {
    arrayDeNumerosPares.push(i*2)
  }
  return arrayDeNumerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA===ladoB && ladoA===ladoC && ladoB===ladoC) {
    return "Equilátero"
  } else if (ladoA!==ladoB && ladoA!==ladoC && ladoB!==ladoC) {
    return "Escaleno"
  } else {
    return "Isósceles"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let arrayDosDoisNumeros = []
  let arrayOrdenado = []
  
  arrayOrdenado = array.sort( (a,b) => {
    return a-b
  })

  return arrayDosDoisNumeros = [arrayOrdenado[arrayOrdenado.length - 2], arrayOrdenado[1] ]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const copiaDePessoa = {...pessoa, nome: "ANÔNIMO"}
  return copiaDePessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let arrayDePessoasAutorizadas = []
  function selecionarPessoas (pessoa) {
    return (pessoa.idade>14)&&(pessoa.idade<60)&&(pessoa.altura>=1.5)
  }
  return arrayDePessoasAutorizadas = pessoas.filter(selecionarPessoas)
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let arrayDePessoasNaoAutorizadas = []
  function selecionarPessoas (pessoa) {
    return (pessoa.idade<=14)||(pessoa.idade>60)||(pessoa.altura<1.5)
  }
  return arrayDePessoasNaoAutorizadas = pessoas.filter(selecionarPessoas)
}


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
}  


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  function compararNomes (a,b) {
    if (a.nome < b.nome)
    return -1;
    if (a.nome > b.nome)
    return 1;
    return 0;
  }
  return consultas.sort(compararNomes)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  
}