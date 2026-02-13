
let input = require('fs').readFileSync('/dev/stdin').toString().trim();
const numbers = input.split('-')

let result = 0

numbers.forEach((number, index) => {
  const hapSum = number.split('+').map(Number).reduce((acc, curr) => acc + curr, 0)
  if(index===0) {
    result += hapSum
    return
  }
result -= hapSum


})

console.log(result)