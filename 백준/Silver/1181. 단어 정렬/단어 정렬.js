// /dev/stdin
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const length = Number(input[0])
const words = input.slice(1,length+1)


words.sort((a,b) => {
  if(a.length === b.length) {
    return a.localeCompare(b)
  }
  return a.length - b.length
})
console.log(Array.from(new Set(words)).join('\n'))
