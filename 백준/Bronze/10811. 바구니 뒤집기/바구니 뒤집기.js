let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0].split(' ')[0])
const m = Number(input[0].split(' ')[1])

const bucket = new Array(n).fill(0).map((i, index) => index + 1)

for(let i =0;i<m;i++) {
  const a = Number(input[i+1].split(' ')[0])
  const b = Number(input[i+1].split(' ')[1])  
  
  for(let c= 0; c<Math.ceil((b - a)/2);c++) {
    const temp =  bucket[a+c-1]
    bucket[a+c-1] = bucket[b-c-1]
    bucket[b-c-1] = temp
  }

}

console.log(bucket.join(' '))



