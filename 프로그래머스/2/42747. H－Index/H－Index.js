function solution(citations) {
    var answer = 0;
    var cnt = 0
    citations.sort((a,b)=>a-b)
    while(cnt <= citations.length) {
        const count = citations.filter(c => c >= cnt)
    
        if (cnt <= count.length) {
            answer =  Math.max(answer, cnt)
        }
        cnt++;
    }
    return answer;
}