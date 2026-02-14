let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const length = Number(input[0])
const numbers = input[1].split(' ')

numbers.sort((a, b) => {
  const orderA = a+b
  const orderB = b+a

  if(orderA > orderB) {
    return -1
  }
  if(orderA < orderB) {
    return 1
  }
  return 0
})

console.log(numbers[0] === '0' ? '0' : numbers.join(''))