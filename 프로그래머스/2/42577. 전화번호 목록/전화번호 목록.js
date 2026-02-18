function solution(phone_book) {
  const set = new Set(phone_book)
    
  // O(n × m²) - n개 전화번호, 각각 m개 접두어 체크
  for (const phone of phone_book) {
      for (let i = 1; i < phone.length; i++) {
          if (set.has(phone.slice(0, i))) {
              return false
          }
      }
  }
  return true
}


