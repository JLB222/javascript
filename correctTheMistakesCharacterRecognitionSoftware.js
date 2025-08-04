//Day 1041
//8 - Correct the mistakes of the character recognition software - https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript
function correct(string) {
	let result = string.split("")
  for (let i = 0; i < result.length; i++) {
    if (result[i] == "5") {
      result[i] = "S"
    }
    if (result[i] == "0") {
      result[i] = "O"
    }
    if (result[i] == "1") {
      result[i] = "I"
    }
  }
  return result.join("")
}