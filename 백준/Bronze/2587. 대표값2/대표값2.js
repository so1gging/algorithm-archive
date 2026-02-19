// /dev/stdin
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const array = input.map(Number)
const length = array.length
const evarageIndex = Math.floor(length / 2)
const evarage = array.reduce((acc, cur) => acc + cur, 0) / length

console.log(evarage)
console.log(array.sort((a,b) => a-b)[evarageIndex])

