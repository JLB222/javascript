//Day 966 
//7 - Shift Left - https://www.codewars.com/kata/5bdc191306a8a678f6000187/train/javascript

// //P
// two strings, lowercase, no specChars
// //R 
// number - represents how many operations must be done to make the strings equal
// //E
// test, west -> 2 
// test, yes -> 7
// b, ab -> 1
// abc, wasdfetialkjsdabcalskdjfiajlkd -> 30
// were, here -> 2
// //P
// use a counter, starting at 0
// loop iterations = string lengths combined 
// check if strings are === 
// if so, return counter number
// if not, check if 1st string includes 2nd 
// if not, delete first letter of 2nd string 
// if so, delete first letter of first string


function shiftLeft(str1, str2){
  let counter = 0
  let maxIterations = str1.length + str2.length
  let first = str1
  let second = str2
  for (let i = 0; i < maxIterations; i++) {
    if (first === second) {return counter} 
    if (first.includes(second)) {
      first = first.slice(1)
      counter++
    } else {
      second = second.slice(1)
      counter++
    }
  }
  return counter
}