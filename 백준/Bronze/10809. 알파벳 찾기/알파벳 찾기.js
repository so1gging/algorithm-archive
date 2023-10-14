let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let result = ''
for(let i = 97;i<=122;i++) {
  const chartA = String.fromCharCode(i)
  result += input.indexOf(chartA) + ' '
}

console.log(result)