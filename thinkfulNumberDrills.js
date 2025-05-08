
//8 - Thinkful - Number Drills: Blue and red marbles - https://www.codewars.com/kata/5862f663b4e9d6f12b00003b/train/javascript
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let totalMarbles = blueStart + redStart - bluePulled - redPulled
  let blueLeft = blueStart - bluePulled
  
  return blueLeft / totalMarbles
}