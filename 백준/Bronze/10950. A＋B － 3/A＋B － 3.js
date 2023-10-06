let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let length = parseInt(input[0])

for(let i = 0; i<length;i++) {
  const a = parseInt(input[i + 1].split(' ')[0])
  const b = parseInt(input[i + 1].split(' ')[1])
  console.log(a+b)
}

