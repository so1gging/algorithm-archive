let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const tastcase = input.length

for(let i = 0 ; i < tastcase; i++) {
let a = Number(input[i].split(' ')[0])
let b = Number(input[i].split(' ')[1])

  console.log(a + b)
}



