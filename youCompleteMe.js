//Day 993
//7 - You Complete Me - https://www.codewars.com/kata/63967eb85e54bd00237d2201/solutions/javascript
function complete(str){
  for (let i = 1; i <= str.length; i++) {
    if (str.slice(i) == [...str.slice(i)].reverse().join(''))
    return str + [...str.slice(0,i)].reverse().join('')
  }
}