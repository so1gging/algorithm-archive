function solution(array, commands) {
    var answer = [];
    
    commands.forEach(command => {
        const [i,j,k] = command
        const slice = array.slice(i-1,j)
        slice.sort((a,b) => a-b)
        answer.push(slice[k-1])
    })
    return answer;
}