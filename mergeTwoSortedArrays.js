//Day 1030
//8 - Merge two sorted arrays into one - https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript
function mergeArrays(arr1, arr2) {
  let combo = arr1.concat(arr2)
  combo = [...new Set(combo)]
  return combo.sort((a,b) => a-b)
}