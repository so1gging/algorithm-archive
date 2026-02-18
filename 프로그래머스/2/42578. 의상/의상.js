function solution(clothes) {
  var answer = 0;
  const map = new Map()

  clothes.forEach(clothe => {
  const [name, type] = clothe
  map.set(type, map.get(type) + 1 || 1)
  })

    // (각 종류 개수 + 1) 곱하기 - 1
    return Array.from(map.values()).reduce((acc, n) => acc * (n + 1), 1) - 1
}