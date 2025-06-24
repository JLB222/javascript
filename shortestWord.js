//Day 1001
//7 - Shortest Word - https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
function findShort(s){
  let words = s.split(" ")
  let shortest = words[0]
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < shortest.length) {
      shortest = words[i]
    } 
  }
  return shortest.length
}