export const sumNumbers = (num:number ): number => {
  if (num===0) {
    return 0
  } 
  return sumNumbers(num-1) + num
}

console.log(sumNumbers(5))