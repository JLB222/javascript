//Day 1025 
//8 - find multiples of a number - https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
function findMultiples(integer, limit) {
  let result = []
  for (let i = 1; i <= limit/integer; i++) {
    result.push(integer * i)
  }
  return result
}