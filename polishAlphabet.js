//Day 1037
//8 - Polish Alphabet - https://www.codewars.com/kata/57ab2d6072292dbf7c000039/solutions/javascript
function correctPolishLetters (string) {
  let result = string.split("")
  let polishLetters = "ąćęłńóśźż"
  let englishLetters = "acelnoszz"
  for (let i = 0; i < result.length; i++){
    if (polishLetters.includes(result[i])) {
      result[i] = englishLetters[polishLetters.indexOf(result[i])]
    }
  }
  return result.join("")
}