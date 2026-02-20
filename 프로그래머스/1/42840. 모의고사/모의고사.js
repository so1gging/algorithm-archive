function solution(answers) {
    const person1 = [1,2,3,4,5]
    const person2 = [2,1,2,3,2,4,2,5]
    const person3 = [3,3,1,1,2,2,4,4,5,5]
    
    var answer1 = 0
    var answer2 = 0
    var answer3 = 0
    
    var cnt = 0
    while(cnt < answers.length) {
        const a = answers[cnt % answers.length]
        const a1 = person1[cnt % person1.length]
        const a2 = person2[cnt % person2.length]
        const a3 = person3[cnt % person3.length]
        
        if(a === a1) {
            answer1++
        }
 
                if(a === a2) {
            answer2++
        }
                if(a === a3) {
            answer3++
        }

        cnt ++;
    }

    const maxScore = Math.max(answer1, answer2, answer3)
    const winners = []
    
if (answer1 === maxScore) winners.push(1)
if (answer2 === maxScore) winners.push(2)
if (answer3 === maxScore) winners.push(3)
    
    
    return winners;
}