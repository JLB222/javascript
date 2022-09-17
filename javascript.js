//DAY 1
// 8 - produce an array of numbers in reverse order, starting with n
function reverseSeq(n) {
  let numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.unshift(i)
  }
  return numbers
}


// 8 - reverse all the words in a string.  ie, print a backwards sentence

function reverseWords(str){
  return str.split(" ").reverse().join(" ")
}

// 8 - calculate the downward rounded average of an array

function getAverage(marks){
  return Math.floor(marks.reduce((a,b) => a+b) / marks.length)
}

// 7 - given a string sentence, return the length of the shortest word in said sentence

function findShort(s){
  let words = s.split(" ")
  let shortest = words[0]
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < shortest.length) {
      shortest = words[i]
    }
  }
  return shortest.length
}

// 8 - Get the sum of two different array's elements

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a,b) => a+b)
}

//DAY 2
// 8 - fill an array with every number from 1 to n

function count(n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr
}

/*
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

function points(games) {
  let points = 0;   // set starting points
  for (let i = 0; i < games.length; i++) {  //loop through array
    if (games[i].split(":")[0] > games[i].split(":")[1]) {  //since array elements are all strings separated by a :, use : as the split
      points += 3
      console.log(games[i].split(":")[0])
    } else if (games[i].split(":")[0] === games[i].split(":")[1]) {  //each array created by split is [x,y].  so [0] and [1] will target them
      points += 1
    } else {
      points += 0
    }
  }
  return points
}  //alternatively, I could have used map() and used the [0] and [2] positions of the strings.  Ah, the joys of thinking too hard.

//DAY 3
// 8 - You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.  If it is a square, return its area. If it is a rectangle, return its perimeter.
const areaOrPerimeter = function(l , w) {
  if (l === w) {
    return l * w
  } else {
    return l * 2 + w * 2
  }
}

// 8 - Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

function greet (name, owner) {
  return name === owner ? "Hello boss" : "Hello guest"
}

// 8 - Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.  Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  let cost = 40
  if (d >= 7) {
    return d * cost - 50
  } else if (d >=3) {
    return d * cost - 20
  } else {
    return d * cost
  }
}

//Day 4
// 8 - Find the average and return the letter of the final grade
function getGrade (s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3
  let grade = ""
  if (avg <=100 && avg >=90) {
    grade = "A"
  } else if(avg <90 && avg >=80) {
    grade = "B"
  } else if(avg <80 && avg >=70) {
    grade = "C"
  } else if(avg <70 && avg >=60) {
    grade = "D"
  } else {
    grade = "F"
  }
  return grade
}
//Day 5
// 8 Return the sum of only positive numbers in an array
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i]
    }
  }
  return sum
}

// 8 - Square every number inside an array and return their sum
function squareSum(numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i]
  }
  return sum
}

//Day 6
// 8 - Remove all "!" from a string
function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

/* 8 - Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.  The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.*/
function setAlarm(employed, vacation){
  return employed === true && vacation === false
  //since the only time this function should return true is when you are employed and NOT on vacation, that's really the only thing you have to test for.
}
// 7 - Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
function sumTwoSmallestNumbers(numbers) {
  let arr = numbers.sort((a,b) => a-b)
  return arr[0] + arr[1]
}

// Day 7
// 8 - Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
function doubleChar(str) {
  let string = ""
  for (let i = 0; i < str.length; i++) {
    string += str[i].repeat(2)
  }
  return string
}
/* 8 - All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
*/
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]
}

// 8 - Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
function removeEveryOther(arr){
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      arr.splice(i, 1)
    }
  }
  return arr
}
// Apparently, mutating the array like I did above can have unpredictable results and shouldn't be relied on.  In the future I think I'll use a filter method instead for this kind of thing.

//Day 8
// 8 - You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.  Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

function updateLight(current) {
   switch (current) {
       case "green":
         return "yellow";
         break;
       case "yellow":
         return "red";
         break;
       case "red":
         return "green";
         break;
      default:
         return "Error. check your input"
         break;
   }
}  // if else probably would have been better since there's only 3 cases, but I'm tired of if statements, wanted to code something else.
// 8 - You are given two interior angles (in degrees) of a triangle.  Write a function to return the 3rd.
function otherAngle(a, b) {
  return 180-a-b;
}

//Day 9
// 8 - Search a string for common recognition software mistakes, and correct them.  5s should be "S"; 0s should be "O"; 1s should be "I"
function correct(string){
  let newString = string.split("")
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === "5") {
      newString[i] = "S"
    } else if (newString[i] === "0") {
      newString[i] = "O"
    } else if (newString[i] === "1") {
      newString[i] = "I"
    }
  }
  return newString.join("")
  } //could also have used .replace() with an appropriate regular expression.

// 8 - Your function takes two arguments:  1) current father's age (years) 2) current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let doubleAge = (dadYearsOld - sonYearsOld) * 2  //find the age at which Dad is exactly twice as old as Son.  (age difference times two)
  return Math.abs(doubleAge - dadYearsOld)  //find how far from the doubled age they currently are. Can be negative, so use absolute value
}

//Day 10
// 8 - Given a number n, return the number of positive odd numbers below n, EASY!
//NOTE:  I spent entirely too long on this simple problem because I was overthinking it.  At first I pushed all the odd numbers, using %2===1, into an array and counted the array length.  Then I tried a counter that increments for every value that %2===1, then I realized I could just fucking divide by 2 and round down -_-
function oddCount(n){
  return Math.floor(n/2)
}

// 8 - Find the length of the longest word in a sentence (DEBUGGING)
function findLongest(str){
  var spl = str.split(" ")
  var longest = 0
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
  }
    return longest
}

//Day 11
// 8 - Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
function divisibleBy(numbers, divisor){
  return numbers.filter((num) => num % divisor === 0)
}

// 8 - When provided with a number between 0-9, return it in words.
function switchItUp(number){
  switch (number) {
      case 1:
      return "One"
      break;
      case 2:
      return "Two"
      break;
      case 3:
      return "Three"
      break;
      case 4:
      return "Four"
      break;
      case 5:
      return "Five"
      break;
      case 6:
      return "Six"
      break;
      case 7:
      return "Seven"
      break;
      case 8:
      return "Eight"
      break;
      case 9:
      return "Nine"
      break;
      case 0:
      return "Zero"
      break;
      default:
      return "Error.  Not a number between 0 and 9"
  }
}
//Day 12
// 8 - This function should test if the factor is a factor of base.  Return true if it is a factor or false if it is not.
function checkForFactor (base, factor) {
  return base % factor === 0
}

/* 8 - I have a cat and a dog.  I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]
NOTES:
humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */

var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = humanYears === 1 ? 15 : humanYears === 2 ? 24 : humanYears >= 3 ? 16 + 4*humanYears : null
  let dogYears = humanYears === 1 ? 15 : humanYears === 2 ? 24 : humanYears >= 3 ? 14 + 5*humanYears : null
  return [humanYears,catYears,dogYears];
}

//Day 13
// 8 - Write a method, that will get an integer array as parameter and will process every number from this array.  Return a new array with processing every number of the input-array like this:  If the number has an integer square root, take this, otherwise square the number.
function squareOrSquareRoot(array) {
  return array.map((num) => Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : num*num)
}
// 8 - Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
function howMuchILoveYou(nbPetals) {
    let phrase = {
      0 : "not at all",
      1 : "I love you",
      2 : "a little",
      3 : "a lot",
      4 : "passionately",
      5 : "madly",
    }
    return phrase[nbPetals % 6]
}

//Day 14
// 8 - You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value. The returned value must be a string, and have "***" between each of its letters. You should not remove or add elements from/to the array.
function twoSort(s) {
  return s.sort()[0].split("").join("***")
}

// 8 - In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
//For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

function findDifference(a, b) {
  return Math.abs(a[0]*a[1]*a[2] - b[0]*b[1]*b[2])
}

//Make a function to see if a string is a palindrome.  Arguments will be single words only.  (no sentences)
function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split("").reverse().join("")
}

//Day 15
// 8 - Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
function sumStr(a,b) {
  return String(Number(a) + Number(b))
}

// 8 -
// This function should return a number (final grade). There are four types of final grades:
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100
  } else if (exam > 75 && projects >=5) {
    return 90
  } else if (exam > 50 && projects >= 2) {
    return 75
  } else {
    return 0
  }
}
// 8 - Remove all elements from the input array that are contained in another array
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((bird) => !geese.includes(bird))  //without the !, it would return an array of just the elements that match geese
}

//Day 16
// 8 - Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.  If no occurrences can be found, a count of 0 should be returned.
function strCount(str, letter){
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      counter++
    }
  }
  return counter
}
// an interesting way to do the same problem using split()
function strCount(str, letter){
  return str.split(letter).length-1
}

//Day 17
// 8 - In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
function well(x){
  const counts = {};
  for (let num of x) {
    counts[num] = (counts[num] || 0) +1
  }
  return counts["good"] > 2 ? "I smell a series!" : counts ["good"] > 0 ? "Publish!" : "Fail!"
}

// 8 - Turn a string into a series of 1s and 0s depending on the length of said string.
function stringy(str) {
  let arr = []
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      arr.push("1")
    } else {
      arr.push("0")
    }
  }
  return arr.join("")
}  // for some reason the codewars Kata "Stringy Strings" says my code is wrong, even though it works; tested in the console.

//Day 18
// 8 - test whether a given input is even or not.  return true or false
function testEven(n) {
    return n % 2 === 0
}

// 8 - Make a function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
function between(a, b) {
  let numbers = []
  for (let i = a; i <= b; i++) {
    numbers.push(i)
  }
  return numbers
}

// 7 - Categorize new member:  An array of two-element arrays will be passed into a function that determines membership based on the two elements.
/*
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
Output
Output will consist of a list of string values stating whether the respective member is to be placed in the senior or open category.
*/
function openOrSenior(data){
  let membership = []
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      membership.push("Senior")
    } else {
      membership.push("Open")
    }
  }
  return membership
}
// an array map with destructuring would have also worked:
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

//Day 19
//power outage, no code this day

//Day 20
// 8 - return the total from 3 different sources
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}
// 8 - In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.  Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
function move (position, roll) {
  return position + roll*2
}
// 8 - return a custom greeting based on Input
function sayHello(name) {
  return `Hello, ${name}`
}
// 8 - Europeans don't like how Americans number their floors in a building.  What would they do?
function getRealFloor(n) {
  if (n > 0 && n <= 13) {
    return n - 1
  } else if (n > 13) {
    return n - 2
  } else {
    return n
  }
}
//Day 21
//8 - Figure out how much the customer has to pay, depending on how many hot dogs they buy.
function saleHotdogs(n){
  return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90
}
//8 - square an argument
function square(n) {
  return n * n
}
//8 - Return an error if the argument is a string, otherwise multiply by 50 and add 6
function problem(x){
  return typeof(x) === "string" ? "Error" : x * 50 + 6
}

//day 22
//8 - Write a function that returns a string in which firstname is swapped with last name.
function nameShuffler(str){
  return str.split(" ").reverse().join(" ")
}

//8 - Given an array of a sequence of numbers, return an array that fills in any numbers that are missing from the original sequence
function pipeFix(numbers){
  let start = numbers[0]
  let end = numbers[numbers.length-1]
  let output = []
  for (let i = start; i <= end; i++) {
    output.push(i)
  }
  return output
}

//8 - create a function that takes an array as an argument; reverse that array's elements
function reverseList(list) {
  return list.reverse()
}

//8 - determine what you should be drinking, depending on your age, by some idiot on the internet

function peopleWithAgeDrink(age) {
  return age < 14 ? "drink toddy" : age < 18 ? "drink coke" : age < 21 ? "drink beer" : "drink whisky"
}
//Day 23
//8 - return a response for the number of puppies your friend bought
function howManyDalmatians(number) {
  let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"]
  let respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number === 101 ? dogs[3] : dogs[2]
  return respond
}
//8 - combat game: take the player's current health and damage taken, and return the new health value.  health cannot go below 0
function combat(health, damage) {
  if (health >= damage) {
    health = health - damage
    } else {
      return 0
    }
  return health
}
//8 - Remove a "!" from the end of a string.
function remove (string) {
  return string[string.length-1] === "!" ? string.slice(0, string.length-1) : string
}

//Day 23
//8 - A wolf in sheep's clothing.
function warnTheSheep(queue) {
  let wolf = queue.reverse().indexOf("wolf")
  if (wolf === 0) {
    return 'Pls go away and stop eating my sheep'
  } else {
    return `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`
  }
}

//8 - Hello, Name or World!
function hello(name) {
  name = name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"
  return `Hello, ${name}!`;
}

//Day 24
//8 - Create a function that operates as an exclusive or operator (XOR)
function xor(a, b) {
  if (a === true && b === false || b === true && a === false) {
    return true
  } else {
    return false
  }
}

//8 - Wide-Mouthed Frog
function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide"
}

//8 - Convert binary to decimal
function binToDec(bin){
  return parseInt(bin, 2)
}

//day 24
//8 - Reverse words in a string
function reverse(string){
  return string.split(" ").reverse().join(" ")
}

//day 25
//8 - We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
function plural(n) {
  return n === 1 ? false : true
}

//8 - Your goal is to return multiplication table for number that is always an integer from 1 to 10.
//Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.
function multiTable(number) {
  let result = `${1} * ${number} = ${1 * number}`;
  for(let i = 2; i <= 10; i++) {
    result += `\n${[i]} * ${number} = ${[i] * number}`
  }
  return result
}
// alternate that's a little more clean and takes advantage of the conditional operator
function multiTable(number) {
  let result = ""
  for (let i = 1; i <=10; i++) {
    result += `${[i]} * ${number} = ${[i] * number}${i < 10 ? '\n' : ''}`  //tacks on the escaped newline only up to iteration 9
  }
  return result
}

//day 26
//8 - given an array and a number, return the first n elements of said array
function take(arr, n) {
  return arr.splice(0, n)
}
//8 given the pre-defined functions and variables, make every function return 100 using the correct variables
var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1;
  var b=v1;
  return a+b;
}
function equal2(){
  var a=v3;
  var b=v1;
  return a-b;
}
function equal3(){
  var a=v1;
  var b=v5;
  return a*b;
}
function equal4(){
  var a=v4;
  var b=v5;
  return a/b;
}
function equal5(){
  var a=v6;
  var b=v3;
  return a%b;
}

//day 27
//8 - return an array with numbers from 1 to n
function preFizz(n) {
  let result = []
  for (let i = 1; i <= n; i++) {
    result.push(i)
  }
  return result
}

//8 - Holiday VIII - work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
function dutyFree(normPrice, discount, hol){
  return Math.floor(hol/(discount/100 * normPrice))
}

//8 - Convert a decimal to its binary value
function toBinary(n){
  return Number(n.toString(2))
}

//7 - Binary Addition - given two arguments, return their sum in Binary, as a string
function addBinary(a,b) {
  return (a+b).toString(2)
}

//day 28
//8 - 
function getLength(arr){
  return arr.length
}
function getFirst(arr){
  return arr[0]
}
function getLast(arr){
  return arr[arr.length-1]
}
function pushElement(arr){
  var el = 1;
  arr.push(el)
  return arr
}
function popElement(arr){
  arr.pop()
  return arr
}

//8 - Take the Derivative
function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`
}

//7 - You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.  Your task is to return number of people who are still in the bus after the last bus station.
var number = function(busStops){
  let peopleLeft = 0;
  for (let i = 0; i < busStops.length; i++) {
    peopleLeft += (busStops[i][0] - busStops[i][1])
  }
  return peopleLeft
}

//day 29
//8 - Make sure your plants get enough water!
function rainAmount(mm){
  if (mm < 40) {
       return `You need to give your plant ${40 - mm}mm of water`
  } else {
       return "Your plant has had more than enough water for today!"
  };
}

//8 - Answer the inquisitive child's questions about age.
function  calculateAge(birth, future) {
  if (birth === future) {
    return "You were born this very year!"
  } else if (birth +1 === future) {
    return `You are 1 year old.`
  } else if (birth -1 === future) {
    return `You will be born in 1 year.`
  } else if (birth < future) {
    return `You are ${future - birth} years old.`
  } else if (birth > future) {
    return `You will be born in ${birth - future} years.`
  }
}

//Day 30 - Replace all of *something* in a string with something else.
function vowelReplacer(str) {
  vowels = ["a", "e", "i","o","u"]
  splitStr = str.split("")
  for (let i = 0; i < splitStr.length; i++) {
    if (vowels.includes(splitStr[i])) {
      splitStr[i] = "!"
    }
  }
  return splitStr.join("")
}

//8 - debugging syntax practice
function main(verb, noun) {
  return verb + noun
}

//8 - given an array of integers, return a new array of only the numbers that are multiples of their own index
function multipleOfIndex(array) {
  return array.filter((num, ind) => num % ind === 0)
}

//8 - define a function that removes duplicates from an array of numbers and returns it as a result
function distinct(a) {
  let filter = new Set(a)
  return [...filter]
}

//Day 31
//How hot is the pastry?
function apple(x){
  return x*x > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}

//Get people a drink according to their profession.
function getDrinkByProfession(param){
  switch (param.toLowerCase()) {
      case "jabroni":
      return "Patron Tequila"
      break;
      case "school counselor":
      return "Anything with Alcohol"
      break;
      case "programmer":
      return "Hipster Craft Beer"
      break;
      case "bike gang member":
      return "Moonshine"
      break;
      case "politician":
      return "Your tax dollars"
      break;
      case "rapper":
      return "Cristal"
      break;
      default:
      return "Beer"
  }
}

//Palindrome checker for letters or numbers
function isPalindrome(line) {
  return String(line) === String(line).split("").reverse().join("")
}

//Day 32
//8 - using Regex, remove all numbers from a string, but leave special characters intact
function stringClean(s){
  return s.replace(/[0-9]/g, "")
}

//8 - given two integers, find the remainder of the larger one divided by the smaller one
function remainder(n, m){
  return Math.max(n,m) % Math.min(n,m)
}

//8 - Are you having a son or daughter?
function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${sperm === "XY" ? "son" : "daughter"}.`
}

//Day 33
//8 - write a function that gets you the total surface area and volume of a box
function getSize(width, height, depth) {
  return [((width * depth * 2) + (height * depth * 2) + (width * height * 2)), width * height * depth]
}

//8 - create a function that detects whether a given array contains a given element
function include(arr, item){
  return arr.includes(item)
}

//8 -  write a function that takes a String and returns an Array/list with the length of each word added to each element.  "write code" --> ["write 5", "code 4"]
function addLength(str) {
  let result = str.split(" ")
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i] + " " + result[i].length
  }
  return result
}

//Day 34
//8 - pull properties out of an object to make a dynamic string
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

//8 - Find the average of an array of numbers
var findAverage = function (nums) {
  return nums.reduce((a,b) => a + b) / nums.length
}

//8 - Create a greeting message for  name, city, state.  The name is inside an array and has no set number of names.
function sayHello( name, city, state ) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}

//8 - Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.  If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
var Ball = function(ballType = "regular") {
  this.ballType = ballType
}
// OR
class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType
  }
}

//Day 35
//8 - Remove all exclamation marks from the end of sentence.  Not anywhere else in the sentence, though.
function remove (string) {  
  let str = string.split("").reverse()
  for(let i = 0; i < string.length; i++) {
    if (str[0] === "!") {
      str.shift()
    }
  }
  return str.reverse().join("")
}

//8 - lightsabers
function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0
}

//8 - How many stairs will Suzuki climb in 20 years?  Given an array of arrays.  Each sub-array has the numbers of steps walked for each given day for a full year (each monday, each tuesday, etc)
function stairsIn20(bigArr){
  let total = 0;
  for (let i = 0; i < bigArr.length; i++) {
    total += bigArr[i].reduce((a,b) => a + b)
  }
  return total * 20
}

//8 - Find out if a string contains a particular word.  Case does not matter.
function spEng(sentence){
  return sentence.toLowerCase().includes("english")
}

//8 - Check an array for a value
function check(arr, val){
  return arr.includes(val)
}

//Day 36
//8 - Convert USD to Chinese Yuan.  The output must be a string with exactly two decimal places.
function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}

//Day 37 
//? - count the number of occurences of each element in an array
function count(array) {  //[1,1,2,2,3,3,3,4,4,4,4,5]
  let counter = {}
  for (let key of array) {
    counter[key] = (counter[key] || 0) +1
  }
  return counter
}

//8 - Sum of differences in array
function sumOfDifferences(arr) {
  let array = arr.sort((a,b) => a-b).reverse()
  let sum = 0
  for (let i = 0; i < arr.length-1; i++) {
    sum += (array[i] - array[i+1])
  }
  return sum
}

//8 - Fundamentals: Return
function add(a,b){
  return a+b
}

function divide(a,b){
  return a/b
}

function multiply(a,b){
  return a*b
}

function mod(a,b){
  return a%b
}
 
function exponent(a,b){
  return a**b
}
  
function subt(a,b){
  return a-b
}

//Day 38
//8 - given an input of an array of strings, return a single string with comma delimited elements of the array in the same order
function printArray(array){
  return array.join()
}

//8 - Simple calculator.  If the variables aren't numbers or the sign doesn't belong, return unknown value.
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

//8 - Sum of Multiples.  Find the sum of all multiples of n below m.  Keep in mind: n and m are positive integers; m is excluded from the multiples
function sumMul(n,m){
  if (n > 0 && m > 0) {
      let sum = 0;
      let arr = [];
      for (let i = 0; i < Math.floor(m/n); i++) {
       sum += n
       arr.push(sum)
      }
      return arr.reduce((a,b) => a+b, 0) - (m % n === 0 ? m : null)  //subtracts m only if n goes into it evenly, since we're not supposed to include m
  } else {
    return "INVALID"
  }
}

// I probably overcomplicated the above.  I probably could have just done the loop with i = n, and then i+=n each time.

//Day 39 
//8 - Replace all vowels in a string with a "!" without using Regex
function repVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"]
  let string = str.split("")
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      string[i] = "!"
    }
  }
  return string.join("")
}
//8 - Take an array of elements and smash them together.
function smash(arr) {
  return arr.join("")
}

//8 - Sort an array of numbers
function sortNums(arr) {
  return arr.sort((a,b) => a-b, 0)
}

//
function makeChar(name,race,gender,skillName) {
  this.name = name
  this.race = race
  this.gender = gender
  this.skillName = skillName
  this.skill = function() {
    console.log(`Executing ${this.skillName}`)
  }
}

//
class makeCharacter {
  constructor(name, race, gender, skillName) {
    this.name = name
    this.race = race
    this.gender = gender
    this.skillName = skillName
  }
  skill(skillName = this.skillName) {  //can accept a skill name at runtime, but otherwise defaults to the original name passed to it
    console.log(`Executing ${skillName}`)
  }
}

//Day 40
//8 - Round a given input to two decimal places.
function twoDecimalPlaces(n) {
  return Math.round(n*100) / 100
}
//or
function twoDecimalPlaces(n) {
  return Number(n.toFixed(2))
}

//7 - Given an array of 0s and 1s, return what said numbers would be if converted from binary to decimal
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2)
}

//6 - Given a like system, return appropriate text depending on how many people have liked something.
function likes(names) {
  if (names.length === 0) {
    return "no one likes this"
  } else if (names.length === 1) {
    return `${names[0]} likes this`
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${names.length -2} others like this`
  }
}


//Day 41
//8 - given a card, return its suit
function defineSuit(card) {
  return card.includes("♣") ? "clubs" : card.includes("♦") ? "diamonds" : card.includes("♥") ? "hearts" : "spades"
}

//7 - make a function that has two input strings;  check to see if the first string ends with the 2nd string
function solution(str, ending){
  let counter = 0
  for (let i = 0; i < ending.length; i++) {
    if (ending[ending.length-1-i] === str[str.length-1-i]) {
      counter++
    } 
  }
  return counter === ending.length
}

//turns out there's a convenient method for this....

function solution(str, ending){
  return str.endsWith(ending);
}

//6 - Duplicate Encoder - take a string as an argument.  for each character in said string, return either "(" or ")" if there is 1 or more occurences of that character, respectively
function duplicateEncode(word){
  let stringBuilder = []
  let letters = {}
  word = word.toLowerCase()
  // this loop creates the entries for the letters object, and counts the number of occurences of each lowercase letter
  for (let i = 0; i < word.length; i++) {
    letters[word[i]] = (letters[word[i]] || 0) +1
  }
  //this loop checks the now-complete letters object, and for each letter that has a count of 1, returns "(".  For a count of anything else (which will only be two or more, zero won't happen), it will return ")"
  for (let i = 0; i < word.length; i++) {
    if (letters[word[i]] === 1) {
      stringBuilder.push(`(`)
    } else {
      stringBuilder.push(`)`)
    }
  }
  return stringBuilder.join("")
}

//Day 42
//7 - Remove the Minimum - Given an array of numbers, remove the lowest number.  If there's a tie, remove only the first instance.  DO NOT MUTATE the array.
function removeSmallest(numbers) {
  let arr = [...numbers]  
  let remove = arr[0]
  for (number of arr) {  
    if (number < remove) {
      remove = number
    }
  }
  arr.splice(arr.indexOf(remove), 1)
  return arr
}

//alternate
function removeSmallest(numbers) {
  let copy = [...numbers]  //creates a new array rather than copying old one
  let minIndex = copy.indexOf(Math.min(...copy))  //finds the Index of the smallest number in the copy array
  copy.splice(minIndex, 1) //removes the number found above
  return copy  //returns what's left
}
