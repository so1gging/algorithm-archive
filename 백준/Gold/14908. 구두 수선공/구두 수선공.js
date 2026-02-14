let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const length = Number(input[0])
const arr = input.slice(1).map((a, index) => {
  const [time, money] = a.split(' ').map(Number)
  return {
    index: index + 1,  // 작업 번호 (1부터 시작)
    time,
    money
  }
})
arr.sort((a,b) => {
  const {time: aTime, money: aMoney} = a
  const {time: bTime, money: bMoney} = b

  const oneTimeA = aTime*bMoney
  const oneTimeB = bTime*aMoney

  if (oneTimeA > oneTimeB) {
    return 1
  }
  if (oneTimeA < oneTimeB) {
    return -1
  }

  return a.index - b.index

})


console.log(arr.map(job => job.index).join(' '))