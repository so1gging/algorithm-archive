let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const standard = Number(input[0].split(' ')[1])
const arr = input[1].split(' ')

let result = ''

arr.forEach(i => {
if(Number(i) < standard) {
  result += i + ' '
}
})


console.log(result)


