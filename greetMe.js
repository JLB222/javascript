//Day 945
//7 - Greet Me - https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript
function greet(nameStr) {
    let formattedName = nameStr[0].toUpperCase() + nameStr.slice(1).toLowerCase()
    return `Hello ${formattedName}!`
  };