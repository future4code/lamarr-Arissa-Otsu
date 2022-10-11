// Exercício 03

const toDoList = ["Limpar Casa", "Comprar maçã", "Ir ao banco"]

const newTask = process.argv[2]

let addNewTaskToList = (task) => {
    toDoList.push(task)
    return toDoList
}

console.log (addNewTaskToList(newTask))

