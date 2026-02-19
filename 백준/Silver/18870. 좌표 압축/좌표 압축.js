// /dev/stdin
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const length = Number(input[0])
const numbers = input[1].split(' ').map(Number)
// 1. 중복 제거 & 정렬
const sorted = [...new Set(numbers)].sort((a, b) => a - b)

// 2. 값 → 인덱스 매핑 (O(m))
const map = new Map()
sorted.forEach((value, index) => {
    map.set(value, index)
})

// 3. 변환 (O(n))
const results = numbers.map(number => map.get(number))

console.log(results.join(' '))