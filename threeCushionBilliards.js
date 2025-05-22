//Day 967
//7 - three cushion billiards - https://www.codewars.com/kata/65a024af6063fb0ac8c0f0b5/train/javascript
function hasScored(str) {
  let cushionsHit = 0
  let ballsHit = new Set()
  for (let char of str) {
    if ("news".includes(char)) {cushionsHit++}
    else {ballsHit.add(char)}
    if (ballsHit.size == 2 && ballsHit.has("R")) {return cushionsHit >= 3}
  }
  return false
}