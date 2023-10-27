let input = require('fs').readFileSync('/dev/stdin').toString().trim();
const arr = input.split(' ')
const numArr = arr.map(i => Number(i))

const 체스 = {
  0: 1,
  1: 1,
  2: 2,
  3: 2,
  4:2,
  5: 8
}


let result = []
numArr.forEach((item,index)=> {
  const diff = 체스[index] - item
    result.push(diff)

})

console.log(result.join(' '))