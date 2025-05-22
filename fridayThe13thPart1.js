//Day 968
//7 - Friday The 13th Pt1 - https://www.codewars.com/kata/5925acf31a9825d616000e74/solutions/javascript
function killcount(counselors, jason){
  return counselors.filter((el) => el[1] < jason).map(el => el[0])
}