let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ')
const findNumber = Number(input[2])

console.log(arr.filter(i => Number(i) == findNumber).length)



