//Day 971
//7 - Arithmetic List! - https://www.codewars.com/kata/541da001259d9ca85d000688/solutions/javascript

function seqlist(first, constant, length) {
  let result = []
  for (let i = 0; i < length; i++) {
    result.push(first + (i*constant))
  }
  return result
}