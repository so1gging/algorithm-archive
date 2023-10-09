let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = []

input.forEach((element, index) => {
  arr[index] = Number(element) % 42
});

const duplicate = arr.reduce((acc, cur) => {
if(acc.findIndex(d => d == cur) > -1) {
  return acc
}
return acc.concat(cur)

}, [])

console.log(duplicate.length)



