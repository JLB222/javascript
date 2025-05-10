//Day 956
//7 - Summing a number's digits - https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript
function sumDigits(number) {
  return Math.abs(number)
   .toString()
   .split("")
   .map(Number)
   .reduce((a,b) => a+b, 0)
}