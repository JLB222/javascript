//Day 1028
//8 - Sum Mixed Array - https://www.codewars.com/kata/57eaeb9578748ff92a000009/solutions/javascript
function sumMix(x){
  return x.reduce((a,b) => a + +b, 0)
}