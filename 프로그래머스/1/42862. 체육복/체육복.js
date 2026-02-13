function solution(n, lost, reserve) {
    const distinctReserve = reserve.filter(i => !lost.includes(i))
    const distinctLost = lost.filter(i => !reserve.includes(i))
    const sorted = distinctReserve.sort((a,b)=>a-b)
    

    
    const set = new Set(distinctLost)
    sorted.forEach((s, index) => {
        if (set.has(s-1)) {
            set.delete(s-1)
            return
        } 
        if(set.has(s+1)) {
            set.delete(s+1)
            return
        }
    
    })
    
    
    return n - set.size;
}