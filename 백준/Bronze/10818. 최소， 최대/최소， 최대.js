let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ')

let min = arr[0]
let max = arr[0]

arr.forEach(i => {
  const stand = Number(i)
if(min > stand) {
  min = stand
}
if(max < stand) {
  max = stand
}
})


console.log(min + ' ' + max)