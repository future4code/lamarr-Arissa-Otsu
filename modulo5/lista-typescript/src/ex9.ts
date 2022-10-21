function verificarCPF (cpf:string):boolean {
    let cpfSomenteNumeros:string = cpf.replace(/[^\d]+/g,'')
    let arrayCpf:string[] = cpfSomenteNumeros.split("")
    let somaDosNovePrimeiros:number = 0
    let somaDosDezPrimeiros:number = 0

    if([...new Set(arrayCpf)].length===1) {
        return false
    } else {
        for (let i=0; i<9; i++) {
            somaDosNovePrimeiros = somaDosNovePrimeiros + Number(arrayCpf[i])*(10-i)
        }
    
        let primeiroDigitoVerificador = 11 - (somaDosNovePrimeiros%11)
    
        if (primeiroDigitoVerificador >= 10) {
            primeiroDigitoVerificador = 0
        } else {
            primeiroDigitoVerificador = primeiroDigitoVerificador
        }
    
        if (primeiroDigitoVerificador===Number(arrayCpf[9])) {
            for (let i=0; i<10; i++) {
                somaDosDezPrimeiros = somaDosDezPrimeiros + Number(arrayCpf[i])*(11-i)
            }
    
            let segundoDigitoVerificador = 11 - (somaDosDezPrimeiros%11)
    
            if (segundoDigitoVerificador >= 10) {
                segundoDigitoVerificador = 0
            } else {
                segundoDigitoVerificador = segundoDigitoVerificador
            }
    
            if(segundoDigitoVerificador===Number(arrayCpf[10])) {
                return true
            } else {
                return false
            }
    
        } else {
            return false
        }
    
    }
}
    
console.log(verificarCPF("145.382.206-20"))
console.log(verificarCPF("145.382.206-21"))
console.log(verificarCPF("222.222.222-22"))