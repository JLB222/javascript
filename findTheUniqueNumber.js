//Day 958
//Find the unique number - https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
function findUniq(arr) {
  arr.sort((a,b) => a-b, 0)
  if (arr[0] !== arr[1]) {
    return arr[0]
  } else {
    return arr[arr.length-1]
  }
}