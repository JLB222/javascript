//Day 1014
//8 - Expressions Matter - https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/javascript
function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
  );
}