let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const a = parseInt(input[0])
const b = input[1]

const b_numbers = b.split('')

for(let i= 2;i>=0;i--) {
  console.log(a * b_numbers[i])
}

console.log(a * parseInt(b))