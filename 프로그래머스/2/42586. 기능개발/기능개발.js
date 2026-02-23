function solution(progresses, speeds) {
    var answer = [];
    
    const days = []
    progresses.forEach((progress, index) => {
        const speed = speeds[index]
        const minSpeed = Math.ceil((100 - progress)/speed)
        days.push(minSpeed)
    
    })
    
    let currentDay = days[0] 
    let count = 1
    
        for (let i = 1; i < days.length; i++) {
        if (days[i] <= currentDay) {
            // 현재 배포에 포함
            count++
        } else {
            // 새로운 배포
            answer.push(count)
            currentDay = days[i]
            count = 1
        }
    }
    
    answer.push(count)  // 마지막 그룹
    
    
    return answer;
}