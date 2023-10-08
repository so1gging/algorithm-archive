let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const total = parseInt(input[0])
const count = parseInt(input[1])

let reTotal = 0

for(let i = 0 ; i < count; i++) {
  const price = input[2 + i].split(' ')[0]
  const cnt = input[2 + i].split(' ')[1]

  reTotal += price * cnt
}

if(reTotal == total) {
  console.log("Yes")
} else {
  console.log("No")
}


