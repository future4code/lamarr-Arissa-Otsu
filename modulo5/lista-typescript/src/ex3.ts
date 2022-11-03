enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome:string,
    anoDeLancamento:number,
    genero: GENERO,
    pontuacao?: number
}

function retornarDadosDoFilme (nome:string, anoDeLancamento:number, genero: GENERO, pontuacao?:number): Filme {
    if (typeof pontuacao !== "undefined") {
        return ({nome: nome, anoDeLancamento: anoDeLancamento, genero: genero, pontuacao: pontuacao})
    } else {
        return ({nome: nome, anoDeLancamento: anoDeLancamento, genero: genero})
    }
}

console.log (retornarDadosDoFilme("Titanic", 1997, GENERO.ROMANCE, 52))
console.log (retornarDadosDoFilme("De repente 30", 2004, GENERO.COMEDIA))