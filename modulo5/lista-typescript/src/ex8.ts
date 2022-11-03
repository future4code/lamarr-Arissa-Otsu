function retornarNumeroDeAnagramas (palavra:string):number {
    let numero:number = 1
    if (palavra.length === 0) {
        return 1
    } else if (palavra.length === 1) {
        return 1
    } else {
        for (let a=1; a<palavra.length + 1;a++) {
            numero = numero*a
        }
        return numero
    }
}

console.log(retornarNumeroDeAnagramas("porta"))