//Day 1016
//8 - Sort My Textbooks - https://www.codewars.com/kata/5a07e5b7ffe75fd049000051/train/javascript
function sorter(textbooks) {
  return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : 
                                  a.toLowerCase() < b.toLowerCase() ? -1  : 0)
}