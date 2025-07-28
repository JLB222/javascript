//Day 1034
//8 - Logical Calculator - https://www.codewars.com/kata/57096af70dad013aa200007b/train/javascript
function logicalCalc(array, op){
  if (op === "AND") { return array.every(v => v); }
  if (op === "OR")  { return array.some(v => v); }
  if (op === "XOR") { return Boolean(array.reduce((p, c) => p ^ c)); }
}