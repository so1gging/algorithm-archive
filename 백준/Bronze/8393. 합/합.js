let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let number = parseInt(input)
let total = 0;
for(let i = 1; i<=number;i++) {
  total += i;
}

console.log(total)

