let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


const [n, k] = input[0].split(' ').map(Number)
const coins = input.slice(1, n + 1).map(Number)

const sortedCoins = coins.sort((a, b) => b - a)

const result = sortedCoins.reduce((acc, coin) => {
  if (acc.k < coin) {
    return acc;
  }

const count = Math.floor(acc.k / coin)
const newK = acc.k % coin

return {  
  count: acc.count + count,
  k: newK
}

}, {
  count: 0,
  k: k
})

console.log(result.count)
