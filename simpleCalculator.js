//Day 943
//8 - Simple Calculator - https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript
function calculator(a,b,sign){
    if (typeof a === "number" && typeof b === "number") {
      switch (sign) {
          case "+": return a + b;
          break;
          case "-": return a - b;
          break;
          case "*": return a * b;
          break;
          case "/": return a / b;
          break;
          default: return "unknown value";
      }
    } else {
      return "unknown value"
    }
  }