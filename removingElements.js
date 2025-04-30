//Day 946
//8 - https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
function removeEveryOther(arr){
    let result = []
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        result.push(arr[i])
      }
    }
    return result
}
