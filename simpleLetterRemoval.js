//Day 1052
//7 - Simple Letter Removal - https://www.codewars.com/kata/5b728f801db5cec7320000c7/train/javascript
function solve(str, num){
    let toBeRemoved = str.split("").sort("").slice(0,num)
    return toBeRemoved.reduce((prev, val) => prev.replace(val, ""), str)
}