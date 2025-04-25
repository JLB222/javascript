//Day 940
//Find Count of Most Frequent Item in an Array
function mostFrequentItemCount(arr) {
    if (arr.length === 0) return 0;
    let counter = {}
    for (let i = 0; i < arr.length; i++) {
      counter[arr[i]] = (counter[arr[i]] || 0) + 1
    }
    return Math.max(...Object.values(counter))
}