let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0].split(' ')[0])
const m = Number(input[0].split(' ')[1])
const arr = new Array(n).fill(0).map((i, index) => index + 1)

for(let a = 0; a < m ; a++) {
  const i = Number(input[a + 1].split(' ')[0]) - 1
  const j = Number(input[a + 1].split(' ')[1]) -1
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

console.log(arr.join(' '))


