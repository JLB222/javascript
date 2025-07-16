//Day 1023
//8 - Geometry Basics: Distance between 2 points - https://www.codewars.com/kata/58dced7b702b805b200000be/train/javascript
function distanceBetweenPoints(a, b) { 
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2)
}