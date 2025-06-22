//Day 999
//6 - Equal Sides of an Array - https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
function findEvenIndex(arr){
  let left = 0;
  let right = arr.reduce((a,b) => a+b,0)
  
  for (let i = 0; i < arr.length; i++) {
    left += arr[i]
    if (i > 0) {
      right -= arr[i-1]
    }
    if (left === right) {
      return i
    }
  }
  return -1
}