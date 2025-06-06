//Day 983
//7 - Coding Meetup 2 - https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript
function greetDevelopers(list) {
  list.forEach(entry => entry.greeting = `Hi ${entry.firstName}, what do you like the most about ${entry.language}?`)
  return list
}