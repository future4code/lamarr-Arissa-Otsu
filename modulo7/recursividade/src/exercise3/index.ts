export const sumNumber = (num: number) => {
  let sum = 0
  for (let i=0; i<=num; i++) {
    sum += i
  }
  console.log(sum) 
}
sumNumber(5)
sumNumber(10)
