function solution(brown, yellow) {
    const total = brown + yellow
    
    for (let h = 3; h <= total; h++) {
        if (total % h !== 0) continue  // 나누어떨어지지 않으면 스킵
        
        const w = total / h
        
        if (w < h) break  // 가로 >= 세로
        
        // 핵심: yellow가 (w-2) × (h-2)와 같은지 확인!
        if ((w - 2) * (h - 2) === yellow) {
            return [w, h]
        }
    }
}