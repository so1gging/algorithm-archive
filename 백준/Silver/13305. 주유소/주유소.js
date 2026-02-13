let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0])
const lengths = input[1].split(' ').map(Number)
const prices = input[2].split(' ').map(Number)

let totalCost = 0
let currentFuel = 0  // 현재 남은 기름

// 마지막 도시는 주유할 필요 없음 (도착지이므로)
for (let i = 0; i < n - 1; i++) {
  // 다음 도시로 가기 위해 기름 소비
  currentFuel -= lengths[i]
  
  // 기름이 부족하면 주유해야 함
  if (currentFuel < 0) {
    // 현재 도시에서 얼마나 주유할지 계산
    let fuelToAdd = -currentFuel  // 일단 부족한 만큼은 필수
    
    // "더 싼 주유소"가 나올 때까지의 거리 계산
    for (let j = i + 1; j < n - 1; j++) {
      // 더 싼 주유소 발견!
      if (prices[j] < prices[i]) {
        break
      }
      // 더 비싸거나 같으면, 여기까지 주유
      fuelToAdd += lengths[j]
    }
    
    totalCost += prices[i] * fuelToAdd
    currentFuel += fuelToAdd
  }
}

console.log(totalCost)
