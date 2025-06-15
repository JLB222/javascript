//Day 992
//Coding Meetup 5 - https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript
function countLanguages(list) {
  let counter = {}
  for (let i = 0; i < list.length; i++) {
    counter[list[i].language] = (counter[list[i].language] || 0) +1
  }
  return counter
}