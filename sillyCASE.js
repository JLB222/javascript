//Day 1011
//7 - SillyCASE - https://www.codewars.com/kata/552ab0a4db0236ff1a00017a/train/javascript
function sillycase(str) {
  let mid = Math.round(str.length / 2);
  return str.substr(0, mid).toLowerCase() + str.substr(mid).toUpperCase();
}