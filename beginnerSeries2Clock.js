//Day 1007
//8 - Beginner Series 2: Clock - https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s){
  return ((h*3600) + (m * 60) + s) * 1000
}