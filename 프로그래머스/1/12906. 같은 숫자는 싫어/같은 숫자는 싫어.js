function solution(arr)
{
    var answer = [];
    
    arr.forEach((number, index) => {
        if(answer.length > 0 && answer[answer.length - 1] === number) {
            return
        }
        
        answer.push(number)
    })
    
    return answer;
}