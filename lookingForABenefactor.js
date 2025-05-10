//Day 955
//7 - Looking for a Benefactor - https://www.codewars.com/kata/569b5cec755dd3534d00000f/train/javascript
function newAvg(arr, newavg) {
    let result = (newavg * (arr.length+1)) - (arr.reduce((a,b) => a+b,0))
    if (result <= 0) {
      throw new Error('Expected New Average is too low')
    } else {
      return Math.ceil(result)
    }
}