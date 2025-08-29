//Day 1068
//8 - Smallest unused ID
function nextIdA(ids){
  ids.sort((a,b) => a-b,0)
  for (let i = 0; i < ids.length; i++) {
   if (!ids.includes(i)) {
     return i
   }
  }
  return Math.max(...ids)+1
}

//OR

function nextIdB(ids){
  ids.sort((a,b) => a-b,0)
  for (let i = 0; i <= ids.length; i++) {
   if (!ids.includes(i)) {
     return i
   }
  }
}