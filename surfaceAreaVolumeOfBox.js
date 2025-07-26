//Day 1033
//8 - Surface Area and Volume of Box - https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript
function getSize(width, height, depth) {
  return [((width * depth * 2) + (height * depth * 2) + (width * height * 2)), width * height * depth]
}