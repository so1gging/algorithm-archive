// /dev/stdin
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const length = Number(input[0])
const points = input.slice(1,length+1).map(item => item.split(' ').map(Number))


points.sort((a,b) => {

  const aArea = a[0]*a[1]
  const bArea = b[0]*b[1]

if(a[1] === b[1]) {
  return a[0] - b[0]
}

  return a[1] - b[1]
})

console.log(points.map(item => item.join(' ')).join('\n'))