//Day 965
//the old switcheroo 2 - https://www.codewars.com/kata/55d6a0e4ededb894be000005/solutions/javascript
function encode(str) {
  //lowercase entire string
  let result = str.toLowerCase().split("")
  //loop through every element of array
  //convert letter to its character code, subtract 96
  result = result.map(el => el.toUpperCase() !== el.toLowerCase() ? el.charCodeAt(0) -96 : el)
  return result.join("")
}