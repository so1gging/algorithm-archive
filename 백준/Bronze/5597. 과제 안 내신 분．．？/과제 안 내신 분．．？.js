let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const persons = new Array(30).fill(false)

for(let a = 0; a < 30 ; a++) {
  const number = Number(input[a]) - 1
  persons[number] = true
}

persons.forEach((element, index) => {
  if(!element) {
console.log(index + 1)
  }
});



