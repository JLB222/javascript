//Day 997
//7 - https://www.codewars.com/kata/629e4d5f24b98110a83b2d0d/train/javascript
function robberEncode() {
  sentence
    .replace(/[bcdfghjklmnpqrstvwxyz]/g, '$&o$&')
    .replace(/[BCDFGHJKLMNPQRSTVWXYZ]/g, '$&O$&')
}