//Day 977
//7 - Quadrants 2 - https://www.codewars.com/kata/643ea1adef815316e5389d17/solutions/javascript

function quadrantSegment(A, B) {
  function whichQuadrant(coordinate) {
    if (coordinate.x > 0 && coordinate.y > 0) {
      return 1
    } 
    if (coordinate.x < 0 && coordinate.y > 0) {
      return 2
    } 
    if (coordinate.x < 0 && coordinate.y < 0) {
      return 3
    } 
    if (coordinate.x > 0 && coordinate.y < 0) {
      return 4
    } 
  }
  return whichQuadrant(A) !== whichQuadrant(B)
}