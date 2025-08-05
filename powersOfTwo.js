//Day 1042
//8 - Powers of 2 - https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript
function powersOfTwo(n){
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}