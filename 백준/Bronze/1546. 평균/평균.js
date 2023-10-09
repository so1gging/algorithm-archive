

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const count = Number(input[0])
const oldScore = input[1].split(' ')

let max = 0
oldScore.forEach(i => {if(max < Number(i)) {
  max = Number(i)
}})

const newScore = oldScore.map(i => Number(i)/max*100)

const sum = newScore.reduce((acc,cur) => acc+cur,0)
console.log(sum / count);
