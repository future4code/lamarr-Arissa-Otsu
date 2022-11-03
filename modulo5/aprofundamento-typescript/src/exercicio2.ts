//Exercício 2

//a) A entrada é um array de números e a saída é um objeto.

function obterEstatisticas(numeros:number[]): {maior:number, menor:number, media:number} {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([10,20,15,48,5,74]))

//b) A variável soma é do tipo number

//c)

type AmostraDeDados = {
    numeros:number[],
    obterEstatisticas: (numeros:number[]) => {
        maior: number;
        menor: number;
        media: number;
    }
}