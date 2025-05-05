//Day 951
//7 - Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming? - https://www.codewars.com/kata/5827acd5f524dd029d0005a4/train/javascript

function isRubyComing(list) {
    return list.some(entry => entry.language === "Ruby")
}
