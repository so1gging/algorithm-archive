let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const length = input.length - 1;
let cnt = 0;
const  arr = Array.from(new Array(a), () => new Array(b).fill(0));

while(cnt < length) {
const arrValue = input[cnt+1].split(' ').map(Number);
arrValue.forEach((value, index) => {
  arr[cnt%a][index] += value;
});
cnt ++;
}

arr.forEach(value => {
  console.log(value.join(' '));
});