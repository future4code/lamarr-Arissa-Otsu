const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]

let unifyLists = () => {
    const newList = []

    for (i=0; i<primeiraLista.length; i++) {
        newList.push({nome: primeiraLista[i].nome})
    }

    for (y=0; y<segundaLista.length;y++) {
        newList.push({nome: segundaLista[y].nome})
    }

    newList.filter((elem, index, self) => index === self.indexOf(elem))
    const newList2 = [... new Set(newList)]
    return newList2
}

console.log(unifyLists())