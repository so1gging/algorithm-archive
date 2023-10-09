let input = require('fs').readFileSync('/dev/stdin').toString().trim();
const number = parseInt(input)

const mok = Math.floor(number/2/2)
let str = ''

for(let i = 1 ; i <= mok; i++) {
  str += 'long '
}

str += 'int'

console.log(str);