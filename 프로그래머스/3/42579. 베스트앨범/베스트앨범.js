// 가장 많이 재생된 노래 두 개씩 
// 속한 노래가 많이 재생 / 장르 내에서 많이 재생 / 재생횟수 같으면 고유번호가 낮은 노래 먼저
function solution(genres, plays) {
    var answer = [];
    const obj = {}
    
    genres.forEach((gen,index) => {
        const curMap = obj[gen] || {
            total: 0,
            list: []
        }
        
        curMap.total += plays[index]
        curMap.list.push({index, list: plays[index]})
        
        obj[gen] = curMap
    })
    
    const sorted = Object.values(obj).sort((a, b) => b.total - a.total)
    
    sorted.forEach(s => {
        s.list.sort((a,b) => b.list-a.list)
        const maxLength = s.list.length - 2 > 0 ? 2 : s.list.length 
        for(let i = 0 ; i < maxLength ; i++) {
            answer.push(s.list[i].index)
        }
    })
    
    // const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1])
    
    
    
    
    return answer;
}