let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0])

const times = input.slice(1, n + 1).map(time => time.split(' ').map(Number))

const sortedTimes = times.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0]
  return a[1] - b[1]
})

let count = 0
let lastEnd = 0
sortedTimes.forEach(([start, end]) => {
  if (start >= lastEnd) {
    count++
    lastEnd = end
  }
})

console.log(count)