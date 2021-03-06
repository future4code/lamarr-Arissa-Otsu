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
    
  let somaDasCompras = 0
  for (let conta of contas) {
    for (i=0;i<conta.compras.length;i++) {
        somaDasCompras += conta.compras[i]  
    }
    conta.cliente = conta.cliente
    conta.saldoTotal = conta.saldoTotal - somaDasCompras,
    conta.compras = []
    somaDasCompras = 0
  }
  return contas
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
  let novaData = 0
  let dataTransformada = ""
  
  function mudarData (consultas) {
    for (i=0; i < consultas.length; i++) {
      novaData = Number(consultas[i].dataDaConsulta.split("/").reverse().join(""))
      consultas[i].dataDaConsulta = novaData
    }
    return consultas
  }

  function ordenarData (array) {
    return array.sort( (a,b) => {
      return a-b
    })
  }

  function transformarData (array) {
    for (i=0; i < array.length; i++) {
      dataTransformada = String(array[i].dataDaConsulta)
      array[i].dataDaConsulta = dataTransformada
    }
    return array
  }

  return (transformarData(ordenarData(mudarData(consultas))))
}



// Rascunho para auxílio na resolução do Exercício 14
/* let contas = 
[
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

let somaDasCompras = 0
for (let conta of contas) {
  for (i=0;i<conta.compras.length;i++) {
      somaDasCompras += conta.compras[i]  
      
  }
  
  conta.cliente = conta.cliente
  console.log(conta.cliente)
  conta.saldoTotal = conta.saldoTotal - somaDasCompras,
  console.log(conta.saldoTotal)
  conta.compras = []
  somaDasCompras = 0
}
console.log(contas) */

// Rascunho para auxílio na resolução do exercício 15B

let consultas = [ 
  { nome: "Márcia", dataDaConsulta: "04/05/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "João",  dataDaConsulta: "01/10/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" } 
 ]

function retornaArrayOrdenadoPorData(consultas) {
  let novaData = 0
  let dataTransformada 
  function mudarData (consultas) {
    for (i=0; i < consultas.length; i++) {
      novaData = Number(consultas[i].dataDaConsulta.split("/").reverse().join(""))
      consultas[i].dataDaConsulta = novaData
    }
    return consultas
  }

  function ordenarData (array) {
    return array.sort( (a,b) => {
      return a-b
    })
  }

  function transformarData (array) {
    for (i=0; i < array.length; i++) {
      dataTransformada = String(array[i].dataDaConsulta)
      array[i].dataDaConsulta = dataTransformada
    }
    return array
  }

  console.log (transformarData(ordenarData(mudarData(consultas))))

}
console.log (retornaArrayOrdenadoPorData(consultas))