let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const tastcase = Number(input[0])
let anwer = ''
for(let i = 1 ; i <= tastcase; i++) {
  const sum = Number(input[i].split(' ')[0]) + Number(input[i].split(' ')[1])
  console.log('Case #'+i+': '+ Number(input[i].split(' ')[0]) + ' + ' + Number(input[i].split(' ')[1]) +' = '+ sum)
}



