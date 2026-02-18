// /dev/stdin
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const sang = input[1].split(' ').map(Number)

const me = input[3].split(' ').map(Number)


const sangMap = sang.reduce((acc, cur) => {
if(acc.has(cur)) {
  acc.set(cur, acc.get(cur) + 1)
} else {
  acc.set(cur, 1)
}
return acc
}, new Map())

const answer = []

me.forEach(num => {
answer.push(sangMap.get(num) ? sangMap.get(num) : 0)
})

console.log(answer.join(' '))


