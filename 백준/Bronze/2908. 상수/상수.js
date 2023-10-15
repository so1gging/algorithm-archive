let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const number1 = input[0]
const number2 = input[1]


let reverseNumber1 = ''
let reverseNumber2 = ''

for(let i = number1.length-1;i>=0 ; i--) {
  reverseNumber1 += number1.charAt(i)
}

for(let i = number2.length-1;i>=0 ; i--) {
  reverseNumber2 += number2.charAt(i)
}

let max = Number(reverseNumber1)

if(max <Number(reverseNumber2)) {
  max = Number(reverseNumber2)
}

console.log(max)
