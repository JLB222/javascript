//Day 998
//8 - Remove Exclamation Marks - https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
function removeExclamationMarks(str) {
  return str.replace(/[!]/g, "");
}
function removeExclamationMarksAlt(str) {
  return str.split("!").join("")
}