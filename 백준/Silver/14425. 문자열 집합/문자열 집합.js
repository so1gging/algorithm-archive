// /dev/stdin
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [nLength, mLength] = input[0].split(' ').map(Number)

const nGroups = input.slice(1, nLength + 1)
const mGroups = input.slice(nLength + 1, nLength + mLength + 1)

var count = 0

mGroups.forEach(group => {
  if(nGroups.includes(group)) {
    count++
  }
})

console.log(count)
