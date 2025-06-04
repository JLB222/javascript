//Day 980
//7 - Coding Meetup 1 - https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript
function countDevelopers(list) {
  return list.filter(x => x.continent === "Europe" && x.language === "JavaScript").length
}