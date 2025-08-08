//Day 1046
//8 - Training JS 34 - https://www.codewars.com/kata/5733f948d780e27df6000e33/train/javascript
function isIntCube(n) {
  return Number.isInteger(Math.cbrt(n));
}

function cutCube(volume, n) {
  return isIntCube(n) && isIntCube(volume / n);
}