// Cadastro de cliente

let clientList = [
	{ id: 1, name: "Fulano" },
	{ id: 2, name: "Ciclano" },
	{ id: 3, name: "Beltrano" },
	{ id: 4, name: "Fulana "}
]

const insertNewClient = (id, name) => {
    const isNameValid = /^[a-zA-Z\u00C0-\u00FF]+$/.test(name)
    if (typeof id === "number" && typeof name ==="string" && isNameValid) {
        const sameId = clientList.find(client => client.id === id) 
        if (sameId) {
            console.log ("O id inserido já existe")
        } else {
            clientList.push({id: id, name: name})
            console.log(clientList)
        }
    } else {
        console.log ("Insira parâmetros válidos")
    }
}

insertNewClient (1, "Arissa")

// Geração de Tabuada

let createMultiplicationTable = (number) => {
    let multiplicationTable = []
    if (typeof number === "number") {
        for (let i=0; i<11; i++) {
            if (number > 0 && number < 11) { 
                multiplicationTable.push(`${number} x ${i} = ${number*i}`)
            } else {
                return ("A entrada deve ser um número de 1 a 10")
            }
        }
    } else {
        return ("O parâmetro deve ser um número")
    }
    return multiplicationTable
}

console.log (createMultiplicationTable(2))