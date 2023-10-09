let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0].split(' ')[0])
const m = Number(input[0].split(' ')[1])
const arr = new Array(n).fill(0)

for(let a = 0; a < m ; a++) {
  const i = Number(input[a + 1].split(' ')[0])
  const j = Number(input[a + 1].split(' ')[1])
  const k = Number(input[a + 1].split(' ')[2])
  
  for (let b = i ; b<=j ; b++) {
    arr[b-1] = k
  }
}

console.log(arr.join(' '))


