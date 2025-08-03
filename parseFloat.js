//Day 1040
//8 - Parse Float - https://www.codewars.com/kata/57a386117cb1f31890000039/train/javascript
function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}