//Day 1036
//8 - Return two highest values in list - https://www.codewars.com/kata/57ab3c09bb994429df000a4a/solutions/javascript
function twoHighest(arr) {
  return Array.from(new Set(arr)).sort((a,b) => b-a,0).slice(0,2)
}