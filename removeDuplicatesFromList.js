//Day 941
//8 - https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
function distinct(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
      if (!result.includes(arr[i])) {
        result.push(arr[i])
      }
    }
    return result
}
  
//alternate 
  
function distinct(a) {
    let filter = new Set(a)
    return [...filter]
}