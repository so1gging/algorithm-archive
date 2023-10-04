let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let hour = parseInt(input[0].split(' ')[0])
let minute = parseInt(input[0].split(' ')[1])
let plus = parseInt(input[1])

let outputHour = hour
let plusMinute = minute + plus


if (plusMinute / 60 > 0) {
  const mok = Math.floor(plusMinute / 60)
  outputHour += mok
  plusMinute -= mok * 60
}

if (outputHour >= 24) {
  outputHour -= 24
}

console.log(outputHour + ' ' +plusMinute)


