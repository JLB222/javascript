//Day 942
//8 - How good are you really? - https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
function betterThanAverage(classPoints, yourPoints) {
    return (classPoints.reduce((a,b) => a+b,0) / classPoints.length) < yourPoints
  }