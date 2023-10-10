let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const tastCase = Number(input[0])

for(let i = 1;i<=tastCase;i++) {
  console.log(input[i].charAt(0)+input[i].charAt(input[i].length - 1))
}
