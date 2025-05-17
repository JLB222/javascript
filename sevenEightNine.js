//Day 963
//7 - SevenAte9 - https://www.codewars.com/kata/559f44187fa851efad000087/train/javascript
function sevenAte9(str) {
  let numbers = str.split("")
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 9 && numbers[i-1] == 7 && numbers[i+1] == 7) {
      numbers[i] = ""
    }
  }
  return numbers.join("")
}