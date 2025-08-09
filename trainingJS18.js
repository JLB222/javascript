//Day 1047
//8 - Training JS 18 - https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript
function splitAndMerge(string, separator) {
  return string.split(" ").map(el => el.split("").join(separator)).join(" ")
}