//Day 1027
//8 - Count by X - https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}