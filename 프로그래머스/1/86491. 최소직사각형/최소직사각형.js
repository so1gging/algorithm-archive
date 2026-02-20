function solution(sizes) {
    var answer = 0;
    var maxW = 0
    var maxH = 0
    
    sizes.forEach((size) => {
        const [w,h] = size
        
        const width = Math.max(w,h)
        const height = Math.min(w,h)
        
        if(width > maxW) {
            maxW = width
        }
        if (height > maxH) {
            maxH = height
        }
    })

    
    return maxW * maxH;
}