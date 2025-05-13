//Day 957
//7 - Nice Array - https://www.codewars.com/kata/59b844528bcb7735560000a0/train/javascript
function isNice(arr){
  let nice = arr.length > 0 ? true : false;
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i]+1) || arr.includes(arr[i]-1)) {
      //
    } else {
      nice = false
    }
  }
  return nice
}