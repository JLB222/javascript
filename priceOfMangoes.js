//Day 1038
//8 - Price of Mangoes - https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript
function mango(quantity, price){
  return quantity * price - ((Math.floor(quantity/3)) * price)
}

//simplified further
function mango(quantity, price){
  return price * (quantity - Math.floor(quantity/3))
}