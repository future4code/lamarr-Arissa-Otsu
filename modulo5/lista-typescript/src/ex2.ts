function retornarTipoDaVariavel (variavel: any):void {
    console.log (typeof(variavel))
}

retornarTipoDaVariavel(2)
retornarTipoDaVariavel("Azul")
retornarTipoDaVariavel(true)
retornarTipoDaVariavel([1,2,3,4])
retornarTipoDaVariavel(retornarTipoDaVariavel)