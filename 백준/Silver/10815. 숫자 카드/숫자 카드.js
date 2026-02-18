// /dev/stdin
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const sang = input[1].split(' ').map(Number)

const me = input[3].split(' ').map(Number)


const set = new Set(sang)

const answer = []
me.forEach(num => {

answer.push(set.has(num) ? 1 : 0)
})

console.log(answer.join(' '))
