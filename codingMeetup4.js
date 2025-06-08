//Day 984
//7 - Coding Meetup 4 - https://www.codewars.com/kata/5827bc50f524dd029d0005f2/train/javascript
function getFirstPython(list) {
  let result = "There will be no Python developers"
  for (let entry of list) {
    if (entry.language === "Python") {
      result = `${entry.firstName}, ${entry.country}`
      break
    }
  }
  return result
}