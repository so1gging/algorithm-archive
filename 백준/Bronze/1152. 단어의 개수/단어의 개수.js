let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const filtered = input.filter(i => i !== '')

console.log(filtered.length)