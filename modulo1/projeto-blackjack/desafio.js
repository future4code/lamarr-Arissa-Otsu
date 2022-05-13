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

let cartasDoUsuario = []
let cartasDoComputador = []
let pontuacaoDoUsuario = 0
let pontuacaoDoComputador = 0
let textoDoUsuario = ""
function adicionarCarta (carta) {
   let cartaSorteada = comprarCarta()
   carta.push(cartaSorteada)
}

if(confirm("Boas vindas ao jogo de Blackjack!" + "\n" +"Quer iniciar uma nova rodada?")) {
	// o que fazer se o usuário clicar "ok"
   adicionarCarta(cartasDoUsuario)
   adicionarCarta(cartasDoUsuario)
   adicionarCarta(cartasDoComputador)
   adicionarCarta(cartasDoComputador)

   console.log(cartasDoUsuario)
   if (cartasDoUsuario[0].valor === 11 && cartasDoUsuario[1].valor === 11){
      cartasDoUsuario = []
   } else if (cartasDoComputador[0].valor === 11 && cartasDoComputador[1].valor === 11){
      cartasDoComputador = []
   } else {
/*       for (i=0; i<cartasDoUsuario.length;i++) {
         pontuacaoDoUsuario += cartasDoUsuario[i].valor
         textoDoUsuario += cartasDoUsuario[i].texto
      console.log(pontuacaoDoUsuario) */
         if(confirm(`Suas cartas são ${cartasDoUsuario[0].texto} e ${cartasDoUsuario[1].texto}. A carta revelelada do computador é ${cartasDoComputador[0].texto}` + "\n" +"Deseja comprar mais uma carta?")) {
            adicionarCarta(cartasDoUsuario)
         }
      }
}




