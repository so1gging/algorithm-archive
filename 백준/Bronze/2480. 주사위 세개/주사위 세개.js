let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let a = parseInt(input[0])
let b = parseInt(input[1])
let c = parseInt(input[2])

const sameThree = a == b && b == c
const sameTwo = a == b || a == c || b == c

if (sameThree) {
  console.log(10000 + a * 1000)
} else if (sameTwo) {
    if (a == b || a == c) {
      console.log(1000 + a * 100)
    } else if (b==c) {
      console.log(1000 + b * 100)
    }
   } else {

    let max = a
    const array = [a,b,c]
    for (let i=1;i<3;i++) {
      if (max < array[i]) {
        max=array[i]
      }
    }

    console.log(max * 100)

}