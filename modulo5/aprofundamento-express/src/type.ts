// Exercício 02
export type Tarefa = {
    userId: number
    id: number
    title: string
    completed: boolean
}

export type TarefaFiltrada = {
    todos:{
        selectedUser: Tarefa[],
        others: Tarefa[]
    }
}
