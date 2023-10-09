let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let max = -1
let maxIndex = -1

input.forEach((i, index) => {
  const stand = Number(i)
  if(max <= stand) {
    max = stand
    maxIndex = index
  }

})


console.log(max)
console.log(maxIndex + 1)


