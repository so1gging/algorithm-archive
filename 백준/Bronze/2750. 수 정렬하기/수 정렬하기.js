// /dev/stdin
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const array = input.slice(1, Number(input[0])+1).map(Number)

array.sort((a,b) => a-b)

console.log(array.join('\n'))