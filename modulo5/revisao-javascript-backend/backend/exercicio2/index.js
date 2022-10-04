// Cadastro de cliente

let clientList = [
	{ id: 1, name: "Fulano" },
	{ id: 2, name: "Ciclano" },
	{ id: 3, name: "Beltrano" },
	{ id: 4, name: "Fulana "}
]

const insertNewClient = (id, name) => {

// INSERIR UM FOR PRA PERCORRER O ARRAY
    if (typeof id === "number" && typeof name ==="string") {
        if (id > clientList.length) {
            clientList.push({id: id, name: name})
            console.log (clientList)
        } else {
            console.log ("Erro, o id informado já existe")
        }
    }
}

insertNewClient (5, "Arissa")

// Geração de Tabuada

let createMultiplicationTable = (number) => {
    if (typeof number === "number") {
        if (number > 0 && number < 11) { 
            return [
                number*1,
                number*2,
                number*3,
                number*4,
                number*5,
                number*6,
                number*7,
                number*8,
                number*9,
                number*10
            ]
        } else {
            return ("O numero deve estar entre 1 e 10")
        }
    } else {
        return ("O parâmetro deve ser um número")
    }
}

console.log (createMultiplicationTable(9))