/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

/* console.log ("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
	// o que fazer se o usuário clicar "ok"
   const primeiraCartaDoUsuario = comprarCarta()
   const segundaCartaDoUsuario = comprarCarta()
   const primeiraCartaDoComputador = comprarCarta()
   const segundaCartaDoComputador = comprarCarta()
   let pontuacaoDoUsuario = primeiraCartaDoUsuario.valor + segundaCartaDoUsuario.valor
   let pontuacaoDoComputador = primeiraCartaDoComputador.valor + segundaCartaDoComputador.valor

   console.log (`Usuário - cartas: ${primeiraCartaDoUsuario.texto} ${segundaCartaDoUsuario.texto} - pontuação ${pontuacaoDoUsuario}`)
   console.log (`Computador - cartas: ${primeiraCartaDoComputador.texto} ${segundaCartaDoComputador.texto} - pontuação ${pontuacaoDoComputador}`)

   if (pontuacaoDoUsuario === pontuacaoDoComputador) {
      console.log ("Empate!")
   } else if (pontuacaoDoUsuario > pontuacaoDoComputador) {
      console.log("O usuário ganhou!")
   } else {
      console.log ("O computador ganhou!")
   }

}else {
	console.log("O jogo acabou.")
} */