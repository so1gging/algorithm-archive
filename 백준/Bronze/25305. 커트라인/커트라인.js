// /dev/stdin
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number)
const array = input[1].split(' ').map(Number)

 array.sort((a,b) => b-a)

 console.log(array[k-1])
