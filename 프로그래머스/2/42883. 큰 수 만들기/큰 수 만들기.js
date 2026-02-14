function solution(number, k) {
  const numbers = number.split('').map(Number)
  var answer = '';
  
  let arr = []
  let count = k
  
  numbers.forEach((number,index)=> {
      // const newArr = [...arr]
      // console.log('arr.reverse()', arr.reverse())

      while(arr.length > 0 && count > 0 && arr[arr.length - 1] < number) {
        arr.pop()
        count--;
      }

      // arr.forEach((a, index) => {
      //     const i = arr.length - index - 1
      //     if(count === 0) {
      //         return;
      //     }
      //     if (arr[i] < number) {
      //       // console.log('splice', newArr, arr[i])
      //         newArr.splice(i, 1)
      //         count--;
      //     }
      // })

      arr.push(number)
  })
      
  while (count > 0) {
    arr.pop()  // 뒤에서 제거
    count--
}
  
  return arr.join('');
}