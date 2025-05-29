//Day 973
//7 - Basic Math - https://www.codewars.com/kata/5809b62808ad92e31b000031/train/javascript
function calculate(str) {

  return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
}