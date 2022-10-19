function mathOperations (n1:number, n2:number):string {
    const sum = n1 + n2
    const sub = n1 - n2
    const mult = n1 * n2

    if (n1>n2) {
        return `A soma dos números é ${sum}. A subtração dos números é ${sub}. A multiplicação dos números é ${mult}. O maior número é ${n1}.`
    } else {
        return `A soma dos números é ${sum}. A subtração dos números é ${sub}. A multiplicação dos números é ${mult}. O maior número é ${n2}.`
    }
}

console.log(mathOperations(4,8))