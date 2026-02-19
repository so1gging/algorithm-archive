// /dev/stdin
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const numbers = input.slice(1).map(Number)
console.log(numbers.sort((a,b) => a-b).join('\n'))