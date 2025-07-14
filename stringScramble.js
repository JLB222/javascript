//Day 1021
//7 - String Scramble - https://www.codewars.com/kata/5822d89270ca28c85c0000f3/train/javascript
function scramble(str, arr) {
  //variable to hold arr result
  let result = []
  //loop through given array
  for (let i = 0; i < arr.length; i++) {
    //put string element in result array at its specific new place
    result[arr[i]] = str[i]
  }
  //return the result array as a string
  return result.join("")
};