//Day 1026
//8 - Exclamation Series 11 - https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript
function replace(s){
  let str = s;
    str = str.replaceAll("a", "!")
    str = str.replaceAll("e", "!")
    str = str.replaceAll("i", "!")
    str = str.replaceAll("o", "!")
    str = str.replaceAll("u", "!")
    str = str.replaceAll("A", "!")
    str = str.replaceAll("E", "!")
    str = str.replaceAll("I", "!")
    str = str.replaceAll("O", "!")
    str = str.replaceAll("U", "!")
  return str
}

//alternate 
function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}