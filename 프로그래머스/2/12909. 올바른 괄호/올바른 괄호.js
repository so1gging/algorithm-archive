function solution(s){
    let count = 0
    
    for (const char of s) {
        if (char === '(') {
            count++
        } else {
            count--
            if (count < 0) return false  // ')' 가 먼저 나옴
        }
    }
    
    return count === 0  // 짝이 맞아야 함
    
}