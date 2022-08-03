// 8 - produce an array of numbers in reverse order, starting with n
function reverseSeq(n) {
  let numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.unshift(i)
  }
  return numbers
}


// 8 - reverse all the words in a string.  ie, print a backwards sentence

function reverseWords(str){
  return str.split(" ").reverse().join(" ")
}

// 8 - calculate the downward rounded average of an array

function getAverage(marks){
  return Math.floor(marks.reduce((a,b) => a+b) / marks.length)
}

// 7 - given a string sentence, return the length of the shortest word in said sentence

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
