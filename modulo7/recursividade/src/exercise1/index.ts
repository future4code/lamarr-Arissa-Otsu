// a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente

export const printNumbersInAscendingOrder = (num: number) => {
   if (num>=0) {
      printNumbersInAscendingOrder(num - 1)
      console.log(num)
   }
}

printNumbersInAscendingOrder(5)

// b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente

export const printNumbersInDescendingOrder = (num: number) => {
   if (num>=0) {
      console.log(num)
      printNumbersInDescendingOrder(num - 1)
   }
}

printNumbersInDescendingOrder(5)