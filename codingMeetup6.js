//Day 994
//7 - Coding Meetup 6 - https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript
function isSameLanguage(list) {
  return list.every((el,i) => el.language === list[0].language)
}