//Day 937
//7 - Barista Problem - https://www.codewars.com/kata/6167e70fc9bd9b00565ffa4e/train/javascript

function barista(coffees){
    coffees.sort((a,b) => a-b, 0)
    let individualWaitTimes = [coffees[0]]
    for (let i = 1; i < coffees.length; i++) {
      individualWaitTimes.push(coffees[i] + 2 + individualWaitTimes[i-1])
    }
    return individualWaitTimes.reduce((a,b) => a+b, 0) || 0
}