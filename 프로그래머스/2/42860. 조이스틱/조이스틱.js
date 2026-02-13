function solution(name) {
   let answer = 0;
    let move = name.length - 1; // 기본: 오른쪽으로 쭉 가는 경우
    
    for (let i = 0; i < name.length; i++) {
        // 1. 상하 이동 (알파벳 변경)
        const char = name[i];
        const upMove = char.charCodeAt(0) - 'A'.charCodeAt(0); // A에서 위로
        const downMove = 'Z'.charCodeAt(0) - char.charCodeAt(0) + 1; // A에서 아래로
        answer += Math.min(upMove, downMove);
        
        // 2. 좌우 이동 최적화
        // 현재 위치 다음부터 연속된 A 찾기
        let nextIndex = i + 1;
        while (nextIndex < name.length && name[nextIndex] === 'A') {
            nextIndex++;
        }
        
        // 경우의 수 비교:
        // - 순차 이동: name.length - 1
        // - 오른쪽 갔다가 왼쪽: i * 2 + (name.length - nextIndex)
        // - 왼쪽 갔다가 오른쪽: i + (name.length - nextIndex) * 2
        move = Math.min(
            move, 
            i * 2 + (name.length - nextIndex), // 오른쪽 갔다 왼쪽
            i + (name.length - nextIndex) * 2  // 왼쪽 먼저
        );
    }
    
    answer += move;
    return answer;
}