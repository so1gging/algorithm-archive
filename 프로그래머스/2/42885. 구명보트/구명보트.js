function solution(people, limit) {
    people.sort((a, b) => a - b);
    
    let left = 0;
    let right = people.length - 1;
    let answer = 0;
    
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;  // 가벼운 사람도 탐
        }
        right--;  // 무거운 사람은 무조건 탐
        answer++;
    }
    
    return answer;
}