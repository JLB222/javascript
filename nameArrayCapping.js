//Day 972
//7 - Name Array Capping - https://www.codewars.com/kata/5356ad2cbb858025d800111d/solutions/javascript
function capMe(names) {
  return names.map(el => el[0].toUpperCase() + el.slice(1).toLowerCase())
}