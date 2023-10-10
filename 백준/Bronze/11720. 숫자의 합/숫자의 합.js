let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const tastCase = Number(input[0])
let sum = 0
for(let i = 0;i<tastCase;i++) {
sum += Number(input[1].charAt(i))
}

console.log(sum)
