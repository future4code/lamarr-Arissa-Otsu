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
let textoDoComputador = ""

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

   while ((cartasDoUsuario[0].valor === 11 && cartasDoUsuario[1].valor === 11) || (cartasDoComputador[0].valor === 11 && cartasDoComputador[1].valor === 11)) {
      cartasDoUsuario = []
      cartasDoComputador = []
      adicionarCarta(cartasDoUsuario)
      adicionarCarta(cartasDoUsuario)
      adicionarCarta(cartasDoComputador)
      adicionarCarta(cartasDoComputador)
   } 
   
   textoDoUsuario = cartasDoUsuario[0].texto + cartasDoUsuario[1].texto
   pontuacaoDoUsuario = cartasDoUsuario[0].valor + cartasDoUsuario[1].valor
   textoDoComputador = cartasDoComputador[0].texto + cartasDoComputador[1].texto
   pontuacaoDoComputador = cartasDoComputador[0].valor + cartasDoComputador[1].valor

   while ((pontuacaoDoUsuario < 21) && (confirm(`Suas cartas são ${textoDoUsuario}. A carta revelada do computador é ${cartasDoComputador[0].texto}` + "\n" +"Deseja comprar mais uma carta?")) ) {
      adicionarCarta(cartasDoUsuario)
      textoDoUsuario = ""
      pontuacaoDoUsuario = 0
      textoDoComputador = ""
      pontuacaoDoComputador = 0  
      for (i=0; i<cartasDoUsuario.length; i++) {
         pontuacaoDoUsuario += cartasDoUsuario[i].valor
         textoDoUsuario += cartasDoUsuario[i].texto
         pontuacaoDoComputador = cartasDoComputador[0].valor + cartasDoComputador[1].valor
         textoDoComputador = cartasDoComputador[0].texto + cartasDoComputador[1].texto
      } 
   } 
   
   if (pontuacaoDoUsuario <= 21){
      while ((pontuacaoDoComputador < pontuacaoDoUsuario) && (pontuacaoDoComputador <=21)) { 
         adicionarCarta(cartasDoComputador)
         textoDoComputador = ""
         pontuacaoDoComputador = 0  
         for(i=0; i<cartasDoComputador.length; i++){
            pontuacaoDoComputador += cartasDoComputador[i].valor
            textoDoComputador += cartasDoComputador[i].texto    
         }
      }
   }

   if (pontuacaoDoUsuario > pontuacaoDoComputador && pontuacaoDoUsuario <=21) {
      alert (`Usuario - Cartas: ${textoDoUsuario} - Pontuação: ${pontuacaoDoUsuario}` + 
            "\n" + 
            `Computador - Cartas: ${textoDoComputador} - Pontuação: ${pontuacaoDoComputador}` + 
            "\n" + 
            "O usuário ganhou!")
   } else if (pontuacaoDoComputador > pontuacaoDoUsuario && pontuacaoDoComputador <=21) {
      alert (`Usuario - Cartas: ${textoDoUsuario} - Pontuação: ${pontuacaoDoUsuario}` + 
            "\n" + 
            `Computador - Cartas: ${textoDoComputador} - Pontuação: ${pontuacaoDoComputador}` + 
            "\n" + 
            "O computador ganhou!")
   } else if (pontuacaoDoComputador > 21 && pontuacaoDoUsuario <= 21) {
      alert (`Usuario - Cartas: ${textoDoUsuario} - Pontuação: ${pontuacaoDoUsuario}` + 
            "\n" + 
            `Computador - Cartas: ${textoDoComputador} - Pontuação: ${pontuacaoDoComputador}` + 
            "\n" + 
            "O usuário ganhou!")
   } else if (pontuacaoDoUsuario > 21 && pontuacaoDoComputador <= 21){
      alert (`Usuario - Cartas: ${textoDoUsuario} - Pontuação: ${pontuacaoDoUsuario}` + 
            "\n" + 
            `Computador - Cartas: ${textoDoComputador} - Pontuação: ${pontuacaoDoComputador}` + 
            "\n" + 
            "O computador ganhou!")
   } else {
      alert (`Usuario - Cartas: ${textoDoUsuario} - Pontuação: ${pontuacaoDoUsuario}` + 
            "\n" + 
            `Computador - Cartas: ${textoDoComputador} - Pontuação: ${pontuacaoDoComputador}` + 
            "\n" + 
            "Empate!")
   }

} else {
   alert ("O jogo acabou.")
}
