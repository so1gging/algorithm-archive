let input = require('fs').readFileSync('/dev/stdin').toString().trim();
const tastcase = Number(input)

for(let i = 1 ; i <= tastcase; i++) {
let star = ''
  for (let j = 1; j<=tastcase - i;j++) {
  star+=' '
  }
  for (let j = 1; j<=i;j++) {
    star+='*'
    }
  console.log(star)
}



