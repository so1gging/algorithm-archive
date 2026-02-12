let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const person = input[0]

const times = input[1].split(' ').map(Number)


const sortedTimes = times.sort((a, b) => a - b)
let t = 0
let totalTime = 0

sortedTimes.forEach((time, index) => {
  t += time
  totalTime += t
})

console.log(totalTime)