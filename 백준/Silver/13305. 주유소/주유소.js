let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const city = input[0]
const lengths = input[1].split(' ').map(Number)
const cityPoints = input[2].split(' ').map(Number)


let cost = cityPoints[0] * lengths[0]

cost += cityPoints[1] * (lengths.slice(1).reduce((acc,cur) => acc+cur,0))

console.log(cost)

