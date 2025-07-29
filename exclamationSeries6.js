//Day 1035
//8 - Exclamation Mark Series #6 - https://www.codewars.com/kata/57faf7275c991027af000679/train/javascript
function remove(str,num){
  let arr = str.split("")
  for (let i = 0, counter = 0; i < str.length && counter < num; i++) {
    if (arr[i] == "!") {
      arr[i] = ""
      counter++
    }
  }
  return arr.join("")
}