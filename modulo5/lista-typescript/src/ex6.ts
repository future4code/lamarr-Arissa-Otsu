type Conta = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

let arrayContasNegativas:Conta[] = []

function retornarSaldoNegativo (array: Conta[]): Conta[] {
    array.map((conta) => {
        for (let i=0; i<conta.debitos.length; i++) {
            conta.saldoTotal = conta.saldoTotal - conta.debitos[i]
        }
        conta.debitos.splice(0,conta.debitos.length)
    })

    array.map ((conta) => {
        if (conta.saldoTotal<0) {
            arrayContasNegativas.push(conta)
        }
    })

    return arrayContasNegativas
}

let arrayDeContas = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

console.log(retornarSaldoNegativo(arrayDeContas))
