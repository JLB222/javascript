//Day 1020
//8 - First non-consecutive number - https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/javascript
function firstNonConsecutive (arr) {
 if (arr.length === 1 || arr === []) {
  return null
 }
 for (let i = 0; i < arr.length -1; i++) {
    if (arr[i] === (arr[i+1]-1)) {
       // carry on
    } else {
      return arr[i+1]
    }
 }
  return null
}