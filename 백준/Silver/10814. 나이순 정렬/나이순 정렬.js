// /dev/stdin
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const length = Number(input[0])
const persons = input.slice(1,length+1).map(item => item.split(' '))


const sortedPersons = persons.sort((a,b) => {
  const aAge = Number(a[0])
  const bAge = Number(b[0])
  if(aAge === bAge) {
    return 0
  }
  return aAge - bAge
})

console.log(sortedPersons.map( item => item.join(' ')).join('\n'))
