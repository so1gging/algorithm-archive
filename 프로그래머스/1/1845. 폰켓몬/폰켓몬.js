function solution(nums) {
    
  // 고를 수 있는 폰켓몬의 수
  var length = nums.length / 2
  // 중복제거
  const set = new Set(nums)

  return length - set.size > 0 ? set.size : length;
}