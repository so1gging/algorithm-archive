let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const searchIndex = Number(input[1])

console.log(input[0].charAt(searchIndex - 1))
