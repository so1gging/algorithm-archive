let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let hour = parseInt(input[0])
let minute = parseInt(input[1])

const minus = 45 > minute

let earlyMinute =  minute - 45
let earlyHour =  hour

if(minus) {
  earlyHour -= 1
  earlyMinute = 60 - earlyMinute * (-1)
  if(earlyHour < 0) {
    earlyHour = 23
  }
}


console.log(earlyHour + ' '+ earlyMinute)
