// /dev/stdin
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const length = input.length;


let max = -1000000000;
let point = '';
for (let i = 0 ; i < length ; i ++) {
  const numbers = input[i].split(' ').map(Number);
numbers.forEach((number, index) => {
  if (number > max) {
    max = number;
point = `${i+1} ${index+1}`;
  }
});

}

console.log(max);
console.log(point);