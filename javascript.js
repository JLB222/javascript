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
// ??alculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

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
  return card.includes("???") ? "clubs" : card.includes("???") ? "diamonds" : card.includes("???") ? "hearts" : "spades"
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

//Day 43
//8 - check if an array of strings has a certain value within it
function checkTheBucket(bucket){
  return bucket.includes("gold")
}

//8 - create a method in santa's sleigh object that authenticates the driver and password
function Sleigh() {}
Sleigh.prototype.authenticate = function(name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!"
}

//Day 44
//8 - replace all the vowels in a string without using regex
function rep(str) {
  let vowels = ["a", "e", "i", "o","u"]
  let arr = str.split("")
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(arr[i].toLowerCase())) {
      arr[i] = "!"
    }
  }
  return arr.join("")
}

//8 - Exclamation series #4.  remove all "!", save for one at the very end.
function remove (string) {
  let arr = string.split("")
  for (let i = 0; i < string.length; i++) {
    if (arr[i] === "!") {
      arr[i] = ""
    }
  }
  return arr.join("") + "!"
}

//OR

function remove(string) {
  return string.split("!").join("") + "!"
}

//7 - Given an array, return an array that contains only the lowest and highest numbers within it
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
}

//6 - Take a 10 Minute Walk
/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function 
that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
*/

function isValidWalk(walk) {
  let x = 0
  let y = 0
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") {x += 1}
    if (walk[i] === "s") {x -= 1}
    if (walk[i] === "e") {y += 1}
    if (walk[i] === "w") {y -= 1}
  }
  return walk.length === 10 && x === 0 && y === 0
}



//Day 45
function headsCounter(number) {
  let heads = 0; 
  for (let i = 0; i < number; i++) {
    if (Math.random() > .5) {
      heads += 1
    }
  }
  return heads
}
/*
P - array of two numbers
R - sum of those numbers and all others between em
E - [2,7] should return 27;  so should [7,2]
P - 
determine the smaller number, or sort the array so the smaller number is first (or last)
create a loop starting at smaller number, not stopping til it reaches higher number
with each iteration, add i to a counter
return the counter's value at the end
*/

function sumArr(array) {
  array = array.sort()
  let counter = 0
  for (let i = array[0]; i <= array[1]; i++) {
    counter += i
  }
  return counter
}

//given an array, count the number of occurences of each element in the array
function instanceCounter(arr) {
  let counter = {}
  for (instance of arr) {
    counter[instance] = (counter[instance] || 0) + 1
  }
  return counter
}

//8 - given a month, input as a number 1-12, return the number of days in that month
function howManydays(month){
  var days;
  switch (month){
    case 4: 
    case 6: 
    case 9: 
    case 11: days = 30; break;
    case 2: days = 28; break;
    default: days = 31; break;
  }
  return days;
}

//7 - Testing 1-2-3: given an array of strings, return an array of strings with their line number prepended to them.
var number=function(array){
  let result = []
  for (let i = 0; i < array.length; i++) {
      result.push(`${i+1}: ${array[i]}`)
  } 
  return result
}

//or with .map():

function lineNumbering(array) {
  return array.map((element, index) => `${index+1}: ${element}`)
}

//6 - Persistent Bugger.
/*
P - number
R - number, represents the number of iterations necessary to turn the original number into a single digit
E - 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
P - 
  given a number, return a new number that is the original number's individual digits * each other
  loop the above until String(number).length === 1
*/

function persistence(num) {
  let counter = 0
  let result = num
  while (String(result).length > 1) {
    let holder = 1
    for (let i = 0; i < String(result).length; i++) {
      holder = holder * +String(result)[i]
    }
    result = holder
    counter++
  } 
  return counter
}

//A more concise way to do it:
function persistence2(num) {
  let counter = 0;
  num = String(num)

  while (num.length > 1) {
    counter++
    num = num.split("").map(Number).reduce((a,b) => a*b).toString()
  }
  return counter
}

//Given a number, multiply each digit of the number by the other numbers.  EX: 927 -> 9*2*7
function multiplyDigits(num) {
  return num.toString().split("").map(Number).reduce((a,b) => a*b).toString()
}

//Day 46 
//8 - given a string that is a sequence of numbers separated by commas, return the same sequence but with the first and last number removed and now separated by spaces.
//if removing the first and last numbers makes it an empty string, return null instead
function array(str){
  let result = str.split(",")
  if (result.length < 3) {
    return null
  } else {
  result.pop()
  result.shift()
  return result.join(" ")
  }
}

//OR
function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null
}


//7 - Find the stray number.  Given an array of integers, where all the integers are the same except 1, return the different number
function stray(numbers) {
  let counter = {}
  //this loop fills the counter object with all elements in the array and their count
  for (let key of numbers) {
    counter[key] = (counter[key] || 0) +1
  }
  //if an element has a count of 1, clearly that's the element we want
  for (thing in counter) {
    if(counter[thing] === 1) {
      return Number(thing)  //initially returns it as a string, so we need to change it back to a number
    }
  }
}

//or
function stray(numbers) {
  numbers = numbers.sort()
  if (numbers[0] === numbers[1]) {
    return numbers[numbers.length-1]
  } else {
    return numbers[0]
  }
}

//6 - Replace with alphabet position.  Given a string (sentence), return a new string that, instead of letters, are numbers that represent the location of that letter in the alphabet separated by spaces. non-letters are ignored
// ex:  "hello" returns "8 5 12 12 15"

let alphabet = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", 'z']
function alphabetPosition(text) {
  let result = []
  for (let i = 0; i < text.length; i++) {
    if (text[i].toUpperCase() != text[i].toLowerCase()) {  //this expression is only true in the case of letters
      result.push(alphabet.indexOf(text[i].toLowerCase()))
    }
  }
  return result.join(" ")
}

//Day 47
//8 - Gravity Flip.  Given an array of numbers, sort the numbers with the largest numbers on the left or right given another input, "L" or "R"
function flip(d, a){
  return d === "L" ? a.sort((a,b) => a-b).reverse() : a.sort((a,b) => a-b)
}

//Day 48
//8 - Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  sharkSpeed = dolphin ? sharkSpeed/2 : sharkSpeed
  let sharkTimeToBoat = sharkDistance / sharkSpeed
  let youTimeToBoat = pontoonDistance / youSpeed
  return youTimeToBoat < sharkTimeToBoat ? "Alive!" : "Shark Bait!"
}

//7 - Given an array of strings, sort the strings by their length
function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length)
}

//Day 49
//8 - 
function whoIsPaying(name){
  return name.length > 2 ? [name, name.substring(0,2)] : [name]
}

//7 - Find the middle element.  Given an array of 3 numbers, return the index of the middle VALUE.  Ex:  [1,10,5] should return the index of 5, which is 2.
function gimme(array1) {
  let array2 = [...array1]        //make a shallow copy of array1
  array2.sort((a,b) => a - b)     //sort the copy to easily find the middle value, which will now always be array2[1]
  return array1.indexOf(array2[1])//return the index position of the value found above
}

//Day 50
//8 - Grasshopper - Combine Strings
function combineNames(fName, lName) {
  return fName +" "+ lName
}

//7 - Round up to the next multiple of 5
function roundToNext5(n){
  return Math.ceil(n / 5) * 5
}

//6- Find the unique number:  given an array of integers where all numbers are equal save for 1 unique number, return the unique number
function findUniq(arr) {
  arr.sort((a,b) => a-b, 0)
  if (arr[0] !== arr[1]) {
    return arr[0]
  } else {
    return arr[arr.length-1]
  }
}

// could also use the find() method on the array, comparing the indexOf to the lastIndexOf

//Day 51
//8 - Given an array of numbers, return an array of only the odd numbers
function odds(values){
  return values.filter(num => num % 2 !== 0);
}

//7 - Given a set of 3 numbers: beginning, end, step.  Return the sum of the numbers starting from beginning, counting by step, to the end.
//example:  given 1,10,2, you'd count from 1-10 by 2 and sum all the numbers between.  1+3+5+7+9   (Return 0 if the beginning number is greater than end)
const sequenceSum = (begin, end, step) => {
  let sum = 0
  for (let i = begin; i <= end; i+= step) {
    sum += i
  }
  return sum
}

//6 - Given a sentence string, return the word in the string that has the highest score.  The score is determined by the sum of each letter's place in the alphabet.  a=1, b=2, etc
function high(sentenceString){
  let sentenceArray = sentenceString.split(" ")
  let scoreArray = sentenceArray.map(scoreWord)
  let indexHighestNumber = scoreArray.indexOf(Math.max(...scoreArray))
  return sentenceArray[indexHighestNumber]
}

function scoreWord(word) {
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum += (word[i].charCodeAt() - 96)
  }
  return sum
}

//Day 52
//8 - given a date string with the format of: "Friday May 2, 7pm"   return a new string with the time removed
function shortenToDate(longDate) {
  return longDate.split(",")[0]
}

//7 - given an array of numbers, return a new sorted array of numbers.  if the array is empty or a null value, return an empty array
function solution(nums){
  return nums !== null ? nums.sort((a,b) => a-b, 0) : []
}

//6 - Consecutive strings by g964
/*
given an array of words and an integer n, find the longest string possible by combining n number of consecutive words in the array
if the given array is empty, or is shorter in length than n, or n is 0 or negative, return an empty string
example:
  strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"]
  n = 2
  combine 2 consecutive strings of strarr and find the longest
  "treefoling", "folingtrashy", "trashyblue", etc
*/

function longestConsec(strarr, k) {
  //make sure the input is valid
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return ""
  }
  //container for the longest word found by the for loop
  let longest = ""

  for (let i = 0; i < strarr.length - (k-1); i++) {               //the number of times the loop needs to run will dynamically change depending on the number of strings we're joining (k)
    if (strarr.slice(i, k+i).join("").length > longest.length) {  //we slice the original array into temporary pieces to join the pieces and compare lengths, storing the highest one each time
      longest = strarr.slice(i, k+i).join("")
    }
  }
  return longest
}

//Day 53
//8 - Back to basics, truthy and falsy
function trueOrFalse(val){
  if (val)    return "true";             
  else     return "false";
}

//7 - make a simple calculator.  given two integers, a and b, and an operator, such as "add" return the appropriate value
function arithmetic(a, b, operator){
  switch (operator) {
      case "add": return a+b; break;
      case "subtract": return a-b; break;
      case "multiply": return a*b; break;
      case "divide" : return a/b; break;
  }
}

//6 - Are they the "same"?
/*
P - two arrays, assure they're not empty.  are they of equal length?  must there be a value in a for each value in b?
R - true or false;  true if array b's elements are all perfect squares of a's elements; false if they're not or if either array is empty, null, etc
E - 
    a = [121, 144, 19, 161, 19, 144, 19, 11]  
    b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
    returns true because all the numbers in b are squares of one of the values in a

P - 
  conditional - if the arrays are not equal length, empty, or null, etc, return false
  sort both arrays
  loop, 
    conditional, comparing arrayA[i] to arrayB[i].  if any are false, return false
*/

function comp(array1, array2){
  if (!array1 || !array2) {
    return false
  }
  array1.sort((a,b) => a-b, 0)
  array2.sort((a,b) => a-b, 0)
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] * array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}

//Day 54
//8 - given an array of numbers, push odd numbers to one array, even numbers to another.  return an array containing both arrays [odd,even]
function pickIt(arr){
  let odd=[],even=[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i])
    } else {
      odd.push(arr[i])
    }
  } 
  return [odd,even];
}

//7 - given a URL, return the same URL minus anything that comes after the hash, if present.  ex: "www.codewars.com#about" --> "www.codewars.com"

function removeUrlAnchor(url){
  return url.split("#")[0]
}

//6
/*
P - number, greater than 0, integer
R - string, equation, sum of result
E - 567 -> 500 + 60 + 7
P - 
  String to find the length of the input number
  for loop, going reverse direction
  if number > 0, attach a number of zeroes appropriate to its position
  if number is 0, skip it
*/

function expandedForm(num) {
  let numString = String(num)
  let result = []
  for (let i = numString.length-1, j = 0; i >= 0; i--, j++) {
    if (numString[i] != 0) {
      result.unshift(numString[i] + "0".repeat(j))
    }
  }
  return result.join(" + ")
}

//written another way:
function expandedForm(num) {
  num.toString()
  .split("")
  .reverse()
  .map((a,i) => a * Math.pow(10, i))
  .filter(a => a > 0)
  .reverse()
  .join(" + ")
}

//Day 55
// Given a total volume and the length of one side, determine if the cuboid has equal sides
var cubeChecker = function(volume, side){
  return volume > 0 ? volume === side ** 3 : false  //validate input by making sure volume is greater than 0
}


//Day 56
//8 - Who ate the cookie?
function cookie(x){
  let whoDunIt
  if (typeof(x) === "string") {
    whoDunIt = "Zach"
  } else if (typeof(x) === "number") {
    whoDunIt = "Monica"
  } else {
    whoDunIt = "the dog"
  }
  return `Who ate the last cookie? It was ${whoDunIt}!`
}

//Day 57
function checkExam(array1, array2) {
  let result = 0
 for (let i = 0; i < array2.length; i++) {
   if (array2[i] === array1[i]) {
     result += 4
   } else if (array2[i] == "") {
     result = result
   } else {
     result -= 1
   }
 }
  return result < 0 ? 0 : result
}

//Day 58
//8 - Regex basics.  Determine if the first letter of a number is 1,2, or 3.  If so, return true; otherwise return false
function validateCode (code) {
  return /^[123]/.test(code)
}

//Day 59
//7 - given two numbers, greater than 0, a divisor and a boundary, return the highest number between the divisor and the boundary that is divisible by divisor.  Example: 2,7 should return 6
function maxMultiple(divisor, bound){
  return Math.floor(bound / divisor) * divisor
}

//Day 60
//8 - given an array of numbers, if any of the numbers are the character codes for lowercase aeiou, replace those numbers with the appropriate letter
function isVow(arr){
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
        case 97: arr[i] = "a"; break;
        case 101: arr[i] = "e"; break;
        case 105: arr[i] = "i"; break;
        case 111: arr[i] = "o"; break;
        case 117: arr[i] = "u"; break;
    }
  }
  return arr
}

//alternate method
function isVow(a){
  let vowels = {
    97: "a",
    101: "e",
    105: "i",
    111: "o",
    117: "u"
  }
  return a.map(num => vowels[num] || num)
}

//Day 61
//8 - Regexp - create a string method that returns true if the given object is a digit 0-9, otherwise return false
String.prototype.digit = function() {
  return /^\d$/.test(this)
}

//7 - given a string, return an array that consists of the indexes of any words in that string that are capital letters.  for example:  CodEWaRs  -->  [0,3,4,6]
var capitals = function (word) {
  let result = []
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(i)
    }
  }
  return result
}

//6 - 
// P - string
// R - true or false; true if every letter of the alphabet is used at least once in the string, false otherwise;  ignore numbers and punctuation
// E - The quick brown fox jumps over the lazy dog  ---> true
// P 
/*
function isPangram(string) {
  lowercase the string so we only have to test once
  loop, checking to see if the string contains 1 letter of the alphabet at a time
  iterate starting from charCode 97, ending at charCode 122
  conditional; if the string includes 97, continue to 98, otherwise return false
}
*/
function isPangram(string){
  let lowerCaseString = string.toLowerCase()
  for (let i = 97; i <= 122; i++) {
    if (lowerCaseString.includes(String.fromCharCode(i))) {
      continue
    } else {
      return false
    }
  }
  return true
}

//alternate solution

function isPangram(string){
  string = string.toLowerCase()
  return "abcdefghijklmnopqrstuvwxyz".split("").every(letter => string.includes(letter))
}

//Day 62
//8 - Who won?
function uefaEuro2016(teams, scores){
  if (scores[0] === scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  }
  return `At match ${teams[0]} - ${teams[1]}, ${scores[0] > scores[1] ? teams[0] : teams[1]} won!`
}

//Day 63
//8 - Pillars;  given a number of pillars of given width and given distance apart, determine the distance from the first to last pillar
function pillars(numPill, dist, width) {
  let result = ((numPill -1) * dist * 100) + ((numPill -2) * width)
  return result > 0 ? result : 0
}

//Day 64
//8 - for a given string and optional price, find the total cost of printing said string on a billboard if it costs 30 per character by default and x per character if passed as an argument.  
//Caveat: you're not allowed to use the * operator
function billboard(name, price = 30){
  let total = 0;
  for (let i = 0; i < name.length; i++) {
    total += price 
  }
  return total
} 

//7 - Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
function sumDigits(number) {
  return Math.abs(number)
   .toString()
   .split("")
   .map(Number)
   .reduce((a,b) => a+b, 0)
}

//Day 65
function counter(arr) {
  let counts = {}
  for (let elem of arr) {
    counts[elem] = (counts[elem] || 0) + 1
  }
}

function vowelReplacer(str) {
  let vowels = "aeiou".split("")
  let newStr = str.split("")
  for (let i = 0; i < newStr.length; i++) {
    if (vowels.includes(str[i])) {
      newStr[i] = "!"
    }
  }
  return newStr.join("")
}

function inPlaceTest(arr) {
  let thing = arr
  console.log(thing)
  let thang = thing.sort()
  console.log(thing)
  console.log(thang)
}

//7 - Simple Fun #176 - given a string, reverse it and omit all non-alphabetic characters.
function reverseLetter(str) {
  let arr = str.split("")
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toUpperCase() != arr[i].toLowerCase()) {
      result.push(arr[i])
    }
  }
  return result.reverse().join("")
}

//Day 66
//7 - fix string case
/* 
P - string of letters, mixed uppercase and lowercase
R - string of all upper or lowercase, depending on which would take the least number of changes.  NOTE:  if the number of upper and lower is equal, change it to lowercase
E - "coDe" ->> "code" because it changes only one letter
P - 
  determine the total number of letters
  determine how many are capital; loop
  is that the majority? if so capitalize the string, otherwise lowercase it
*/
function solve(s){
  let capitalCounter = 0
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >=65 && s.charCodeAt(i) <= 90) {
      capitalCounter += 1
    }
  }
  let majorityCapital = capitalCounter > s.length / 2
  return majorityCapital ? s.toUpperCase() : s.toLowerCase()
}

//Day 67
//6 - 
//array of 3 nums, target num
//array of length target, starting with the numbers from the given array
//[1,2,3] 6 => [1,2,3,6,11,20]
//[4,5,6] 8 => [4,5,6,15,26,47,88,161]

//let result = []
//if target < 3, loop, result.push(i)
//if target > 3, loop, signature.push(signature[i] + signature[i+1] + signature[i+2])
function tribonacci(signature,n){
  let baseArray = signature
  let result = []
  if (n <= 3) {
    for (let i = 0; i < n; i++) {
      result.push(baseArray[i])
    }
  } else {
    for (let i = 0; i < n - 3; i++) {
     baseArray.push(baseArray[i] + baseArray[i+1] + baseArray[i+2])
    }
  }
  return n <=3 ? result : baseArray
}


//num, always > 1, no floats, 
//console.log every integer from 1 to that num; if divisible by 3: "Fizz"; if divisible by 5: "Buzz"; if divisible by 3&5: "Fizz Buzz"
//6 -> 1,2,Fizz,4,Buzz, Fizz
//15 -> 1,2,Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13,14, Fizz Buzz

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log("Fizz Buzz")
    } else if( i % 5 === 0) {
      console.log("Buzz")
    } else if(i % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(6)   //1, 2, Fizz, 4, Buzz, Fizz
fizzBuzz(15)  //1,2,Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13,14, Fizz Buzz
fizzBuzz(100) 

//Day 68

function characterMaker(name, race, element, ult) {
  this.name = name
  this.race = race
  this.element = element
  this.ult = function() {
    console.log(`Using ${ult}`)
  }
}

//6 - Unique in Order
/*
string or array of numbers or letters
array, each number or letter from given, no duplicates next to each other
"abbcccddddeeeeea" -> ["a","b","c","d","e","a"]

loop
push 1st letter into result array; assign that letter to a variable
check to see if 2nd letter is === said variable
  if not, push it and change variable to new letter

*/
var uniqueInOrder=function(iterable){
  let result = []
  let placeholder = ""
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== placeholder) {
      placeholder = iterable[i]
      result.push(iterable[i])
    }
  }
  return result
}

//alternate - spread operator, filter
var uniqueInOrder=function(iterable){
  return [...iterable].filter((a, i) => a !== iterable[i-1])
}

//Day 69
//6 - Equal Sides of an Array:  Given an array of integers, positive and negative, return the index of the array where all numbers to the left of said index and all numbers to the right of it are equal
function findEvenIndex(arr){
  let left = 0;
  let right = arr.reduce((a,b) => a+b,0)
  
  for (let i = 0; i < arr.length; i++) {
    left += arr[i]
    if (i > 0) {
      right -= arr[i-1]
    }
    if (left === right) {
      return i
    }
  }
  return -1
}

//Day 70
//6 - Build Pyramid
/*
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
3 floors:
    [
      "  *  ",
      " *** ", 
      "*****"
    ]
6 floors:
    [
      "     *     ", 
      "    ***    ", 
      "   *****   ", 
      "  *******  ", 
      " ********* ", 
      "***********"
    ]
*/
function towerBuilder(nFloors) {
  let result = []
  for (let i = nFloors, j = 0; i > 0; i--, j++) {
    result.unshift(" ".repeat(j) + "*".repeat(i * 2 - 1) + " ".repeat(j))
  }
  return result
}

//Day 71
class CharacterMaker{ 
  constructor(name,race,element, skill1Name) {
    this.name = name,
    this.race = race,
    this.element = element
    this.skill1 = skill1Name
  }
  useSkill1() {
    console.log(`Using ${this.skill1}`)
  }
}

//7 - Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
//For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
//If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.
function breakChocolate(n,m) {
  if (n > 0 && m > 0) {
      return n*m-1;
  }
  return 0
}

//alternate
var breakChocolate = function(n, m) {
  return Math.max(0, n*m - 1);
}

//Day 71
//Using regex, replace all the vowels in a string with a "!"
function switchVowel(str) {
  return str.replace(/[aeiou]/gi, "!")
}

//given a single camelCase word, return those words separated by a space
function solution(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      return string.slice(0,i) + " " + string.slice(i)
    }
  }
  return null
}

//Day 72

//8 - check to see if two input strings are both uppercase or both lowercase.  if they match case, return 1; if they don't, return 0;  if either one aren't letters, return -1
function sameCase(a, b){
  if (a.toUpperCase() === a.toLowerCase() || b.toUpperCase() === b.toLowerCase()) {
    return -1
  }
  let checkA = 65 <= a.charCodeAt(0) && a.charCodeAt(0) <= 90
  let checkB = 65 <= b.charCodeAt(0) && b.charCodeAt(0) <= 90
  return checkA === checkB ? 1 : 0
}

//Day 73
//Declaring new set objects
let a = "abcdefg"
let b = "hijklmn"
let thing = new Set(a+b) 
//creates an object with 14 entries, a-n, as single letters
let thang = new Set()
thang.add(a+b) 
//creaats an object with 1 entry that's a combination of a and b into one concatenated string

//Create a heading in react
function Heading(props) {
  <h1>{props.message}</h1>
}

//6 - The Supermarket Queue
/*
an array of numbers, representing time per person; a num representing number of tills open
a single number, representing total time necessary
[5,3,4], 1 --> 12
[6,4,8,2,4,9,1], 4 --> 13

array of people (numbers)
array of numbers, representing ppl at tills
slice in n numbers from people array*
counter variable; counts iterations
use a loop; each iteration represents 1 second
  this means counter can only increment when i has gone through all the tills; so when i = n-1, reset i to 0 
for each iteration, reduce the values inside the tills array by 1
if any values in the tills array are 0, remove them and add a new number from the people array (removing them from the people array entirely)
loop is only done when tills array.length is 0 (and therefore people array.length is also 0)

I couldn't get this working.  I think there's something under the hood, with arrays, that are throwing me off.
I recall reading that mutating arrays can cause hard-to=debug problems... and I think I've found one.  Or I'm just dumb.

function queueTime(customers, n) {
  let people = customers
  let tills = people.slice(0,n)
  let counter = 0
  for (let i = 0; tills.length > 0; i++) {
    tills[i] -= 1
    if (tills[i] <= 0) {
      tills[i] = people.shift() ? people.shift() : "empty"
    }
    if (tills[i] === "empty") {
      tills.splice(i,1)
    }
    if (i === n-1) {   //problem code
      counter++
      i = 0
    }
  }
  return counter
}

Problem:  At least one problem I can see is how I have it set to only increment the counter when i === n-1.  For the very last element pushed from people to tills, it won't increment because i will always be 0 when it's the very last element to get rid of.
*/



function queueTime(customers, n) {
  let tills = new Array(n).fill(0)  //create a new array called tills, fill it with zeroes
  for (let customerTime of customers) {     //loop through customers array, referring to each instance as "time"
    let index = tills.indexOf(Math.min(...tills)) //let index = the index of the tills array's currently smallest number (specifically, the first occurrence of that number)
    tills[index] += customerTime  //set the tills array's currently smallest number to itself + the customer's time
  }
  return Math.max(...w)
}

//ex:  [5,6,7,8], 2
//[0,0] --> [5,0] --> [5,6] --> [12,6] --> [12,14]

//Day 74 
//function declaration vs function expression vs fat arrow
function doTheThing(params) {
  console.log("Do the thing")
}

function doTheThang(params) {
  console.log("Do the thang");
}

const doTheTheng = params => console.log("Do the theng")

//6 - Run it back: Supermarket Queue
function queueTime(customers, n) {
  let tills = new Array(n).fill(0)  //create a new array of n length, fill it with zeroes
  for (let customer of customers) {  //loop through the customers array one at a time
    let index = tills.indexOf(Math.min(...tills))  //find the index of the smallest number in the tills array
    tills[index] += customer  //add the current customer's time to the smallest number of the tills array
  }
  return Math.max(...tills)  //return the highest number in the tills array
}

//Day 75
function commaToSpace(str) {
  return str.split(",").slice(0,-1).join(" ") || null
}

function replaceVowels(str) {
  let vowels = "aeiou".split("")
  let newStr = str.split("")
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(newStr[i])) {
      newStr[i] = "!"
    }
  }
  return newStr.join("")
}

//8 - Contamination #1 - given a long string and a single-letter string, return a new string of the first's length that consists solely of the letter in the second
function contamination(text, char){
  return char.repeat(text.length)
}

//Day 76
//8 - Thinkful - Number Drills: Blue and Red Marbles
//you have a bag of marbles, some blue some red.  given the number of blue and red that start in the bag and the number of each pulled out so far, calculate the probability of pulling a blue one on the next pull
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let totalMarbles = blueStart + redStart - bluePulled - redPulled
  let blueLeft = blueStart - bluePulled
  
  return blueLeft / totalMarbles
}

//Day 77
//8 - 
function leo(oscar){
  if (oscar === 88) {
    return "Leo finally won the oscar! Leo is happy"
  } else if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!"
  } else if (oscar > 88) {
    return "Leo got one already!"
  } else {
    return "When will you give Leo an Oscar?"
  }
}


//Day 78
//Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
function countLetterInWord(str1, str2) {
  return str1.split(str2).length -1
}

//given a string that is a sequence of numbers separated by commas, return the same sequence but with the first and last number removed and now separated by spaces.  if removing the first and last numbers makes it an empty string, return null instead
function trimNumberString(str) {
  return str.split(",").slice(1,-1).join(" ") || null
}

//Count the number of occurrences of each element in an array.
let arr2189 = [1,2,3,3,3,4,4,4,4,4,1,5,5,2,3]
function countElements(arr) {
  let counter = {}
  for (let element of arr) {
    counter[element] = (counter[element] || 0) +1
  }
  return counter
}

//3 ways to create javascript function
//function declaration
function functionName1() {
  //do the thing
}

//function expression
const functionName2 = function() {
  //do the thing
}

//fat arrow syntax
const functionName3 = (param1, param2) => {}//do the thing; curly brackets if there's more than one statement

//8 - Duck Duck Goose
function duckDuckGoose(players, goose) {
  return players[(goose-1) % players.length].name
}

//Day 79
//7 - Given an array of digits, return the smallest possible number you can make by only using each number in the array once
function minValue(values){
  values.sort((a,b) => a-b, 0)
  let lowest = []
  for (let number of values) {
    if (lowest.includes(number.toString())) {
      continue
    } else {
      lowest.push(number.toString())
    }
  }
  return Number(lowest.join(""))
}

//alternate way:

function minValue(values) {
  let arr = Array.from(new Set(values))
  return Number(arr.sort().join(""))
}

//Day 80
//constructor function
function CharMaker(name, race, element, ult) {
    this.name = name,
    this.race = race,
    this.element = element
    this.ult = function() {
      console.log(`Using ${ult}`)
    }
}

//8 - Spit out the right quote depending on which dumbass won the fight:
function quote(fighter) {
  return fighter.toLowerCase() === "george saint pierre" ? "I am not impressed by your performance." : "I'd like to take this chance to apologize.. To absolutely NOBODY!"
}

//Day 81
//6 - Playing with digits
//horrible math problem horribly explained
function digPow(num, power){
  let sum = num.toString().split("").map(Number).map((n, i) => n**(power+i)).reduce((a,b) => a+b, 0)
  return sum % num === 0 ? sum/num : -1
}

//Day 82
//convert a letter to its ASCII value
function getASCII(c){
  return c.charCodeAt(0)
}

//Day 83
//Create a function that converts its input into a number.  If this is not possible, return null.  Expect all input types, not just numbers.
function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

//Day 84
//7 - Alternate Caps
//given a lowercase string w/ no spaces, return an array of two strings.  the first string should capitalize even-index numbers, and the second should capitalize odd-index numbers
function capitalize(s){
  let evens = ""
  let odds = ""
  
  for (let i = 0; i < s.length; i++) {
    if ([i] % 2 === 0) {
      evens += s[i].toUpperCase()
      odds += s[i]
    } else {
      evens += s[i]
      odds += s[i].toUpperCase()
    }
  }
  return [evens, odds];
}

//Day 85
class CharMaker {
  constructor(name, race, element, ult) {
    this.name = name,
    this.race = race,
    this.element = element
    this.ult = ult
  }
  ult() {
    console.log(`Using ${this.ult}!`)
  }
}

//8 - type of sum: Return the type of the sum of the two arguments
function typeOfSum(a, b) {
  return typeof (a+b)
}

//Day 86
//8 - Return the first n elements of a given array
function first(arr, n = 1) {
  return arr.slice(0, n)
}

//8 - template literals
function templateStrings(obj, feature) {
  return `${obj} are ${feature}`
}

//8 - Compare with margin
function closeCompare(a, b, margin = 0){
  if (margin >= Math.abs(a-b)) {
    return 0
  } else if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  }
}

//Day 87
//8 - NBA full 48 min average.  Given a player's avg points per game and minutes played per game, extrapolate how many points they WOULD have scored if they had played the entire 48-minute game. If 0, return 0.
function pointsPer48(ppg, mpg) {
  let ratio = ppg/mpg
  return Math.round(ratio*48*10) / 10 || 0
}

//8 - Object Oriented Piracy - Given a ship's total draft and crew, determine if there's enough loot (more than 20 draft worth) for the ship to be worth looting. 1 crew = 1.5 draft
function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;
   
  this.isWorthIt = function() {
    return (this.draft - (this.crew * 1.5)) > 20
  }
 }

 //Perhaps it's better practice to add the isWorthIt method to a prototype so it's not duplicated every time a ship is made
 function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;
 }
 
 Ship.prototype.isWorthIt = function() {
   return (this.draft - (this.crew * 1.5)) > 20
 }

 //Day 88

 //Debug the function to make it return 32
 function orderOperations () {
  return 2 + 2 * 2 + 2 * 2
}
function orderOperations () {
  return (2 + 2) * (2 + 2) * 2
}

//given a number, multiply that number by 5 raised to a power equal to the number of digits in that number & return the result
function multiply(number){
  let power = Math.abs(number).toString().length
  return number * (5**power)
}

//Day 89
//8 - Joining strings; combine two strings with a space separating them.  You're not allowed to use:  + , .concat() , or .join()
function joinStrings(string1, string2){
  return `${string1} ${string2}`
}

//8 - True or False? ; Return false without ever actually saying "false"
function ifChuckSaysSo(){
  return !true
}

//8 - Training JS#9: while loops;  given a string and a number, use a while loop to alternate between adding a * to the front of the given string and to the back of it.
function padIt(str,n){
  let arr = str.split("")
  let i = 0
  while (i < n) {
    if (i % 2) {
      arr.push("*")
    } else {
      arr.unshift("*")
    }
    i++
  }
  return arr.join("")
}

//Day 90 - 
//8 - ASCII Total:  Given a string, return the sum of all characters as an integer.
function uniTotal (string) {
  let total = 0
  let strArr = string.split("")
  for (let i = 0; i < string.length; i++) {
    total += strArr[i].charCodeAt(0)
  }
  return total
}

//alternate:
function uniTotal (str) {
  return str.split("").map(letter => letter.charCodeAt()).reduce((a,b) => a+b,0)
}

//8 - The "if" function:  given a boolean and two functions as arguments, execute the first function if the if function returns true, or the 2nd function if its false
function _if(bool, func1, func2) {
  return bool ? func1() : func2()
}

//Day 91
//8 - Classy Classes
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  get info() {
    return `${this.name}s age is ${this.age}`
  }
}

//Day 92 - 
//8 - Loop, Break, Continue
function grabDoll(dolls){
  var bag=[];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      if (bag.length >= 3) {
        break;
      } else {
        bag.push(dolls[i])
        }
    } else {continue}
  }
  return bag;
}

//8 - Evil or Odious;  convert a number to its binary format;  if there is an even number of 1s in this format, it's evil.  Otherwise it's odious.
function evil(n) {
  let number = n.toString(2).split("")
  let counter = 0
  for (let i = 0; i < number.length; i++) {
    if (number[i] === "1") {
      counter++
    }
  }
    return counter % 2 ? "It's Odious!" : "It's Evil!"
}

//Day 93
//count the number of occurences of each value in an object
let nArr = [1,1,1,2,2,3,3,3,3,4,5,5,6,7,7,7,8,8,9]
function objCounter(arr) {
  let result = {}
  for (let number of arr) {
    result[number] = (result[number] || 0) + 1
  }
  return result
}

//using regex, replace all the vowels in a string with a !
function repVow(str) {
  return str.replace(/[aeiou]/gi, "!")
}


//Day 94
//Create a function that takes two strings; find the number of occurrences of the 2nd string in the first string.

function occurrenceCounter(str1, str2) {
  return str1.split(str2).length -1
}

//8 - Fuel Calculator
//For every two litres of fuel you buy, you get a 5 cent discount, up to a max of 25 cents off if you buy 10 or more litres.  Given the number of litres purchased and the current fuel price, calculate the total cost
function fuelPrice(litres, pricePerLitre) {
  let discount = Math.min(Math.floor(litres/2), 5) * 0.05
  return Number((litres * (pricePerLitre - discount)).toFixed(2))
}


//Day 95
//factory function
function charMake(name, race, ult) {
  return {
    name: name,
    race: race,
    ult: function() {
      return ult
    }
  }
}
//constructor function
function CharMake2(name, race, ult) {
  this.name = name,
  this.race = race
  this.ult = function() {
    return ult
  }
}
//class constructor
class CharMake3 {
  constructor(name,race,ult) {
    this.name = name
    this.race = race
    this.ult = ult
  }
  ult() {
    return this.ult
  }
}

//convert an array of stringed numbers into an array of numbers
function stringToNum(arr) {
  return arr.map(Number)
}

//Day 96
function inAscOrder(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      return false; 
    }
  }
  return true;
}

//Day 97
//Type coercion:  given two inputs, return true if they are the same character, false otherwise.  You're not allowed to use explicit type conversion like Number() or String()
function add(a, b){
	return a==b
}

//Day 98
//8 - Barking Mad:  using objects, teach Snoopy & Scooby how to bark
function Dog (breed) {
  this.breed = breed;
  this.bark = function() {  //adding this to a Dog prototype might be better, to prevent this line from being created for every Dog object ever made.
    return "Woof"
  }
}
var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");

//Day 99
// Create a function that takes a number as an argument and returns a grade based on that number.
function grader(score) {
  if (score > 1) {
    return "F"
  }
  if (score >= 0.9) {
    return "A"
  }
  if (score >= 0.8) {
    return "B"
  }
  if (score >= 0.7) {
    return "C"
  }
  if (score >= 0.6) {
    return "D"
  } else {
    return "F"
  }
}

//Day 100
//3 Ways to create a function in JS
//function declaration
function functionName(params) {
  console.log("code here")
}
//function expression
let functionName = function(params) {
  console.log("code here")
}
//fat arrow syntax
let functionName = ((param1,param2) => console.log("code here"))  //use curly brackets if there's more than one line of code; parentheses around the params are only necessary if there's more than one parameter

//FIZZBUZZ - 3,5,15

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
  return "Job done"
}

//Day 101
//7 - Even numbers in an array
//Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
function evenNumbers(array, number) {
  let evens = []
  for (let i = 0; i < array.length; i++) {  //potential alternative: (let i = array.length-1; evens.length === number; i--)
    if (array[i] % 2 === 0) {
      evens.push(array[i])
    }
  }
  let result = []
  for (let i = 0; i < number; i ++) {
    result.unshift(evens.pop())
  }
  return result
}

//optimization: if the array is large, you waste a lot of time finding all the evens.  My original idea was a little better: loop starting from the end of the array until you find number of even numbers


//Day 102
//6 - Count characters in a string
function count (string) {  
  let result = {}
  let arr = string.split("")
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = (result[arr[i]] || 0) + 1
  }
  return result
}

//alternative
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

//Day 103
class GBFMaker {
  constructor(name, race, element, ult) {
    this.name = name
    this.race = race
    this.element = element
    this.ult = ult
  }
  ult() {
    console.log(this.ult)
  }
}

//Day 104
//given a string, ensure that it ends with a question mark.  if it already does, leave it alone
function ensureQuestion(s) {
  return s[s.length-1] === "?" ? s : s + "?"
}

//Day 105
//7 - Sum of Minimums
//Given an array of arrays, each inner array filled with numbers, find the sum of each inner array's smallest number
function sumOfMinimums(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += Math.min(...arr[i])
  }
  return sum
}
//alternatively, could also use the reduce method

//Day 106
//8 - Slope:  Given an array of 4 numbers (a,b) & (c,d), return the slope as a string.  If it's 0, return "undefined"
function slope(points){
  let x = points[2]-points[0]
  let y = points[3]-points[1]
  return x ? (y/x).toString() : "undefined"
}

//Day 107
//replace vowels with a "!"
function repVow(str) {
  let vowels = "aeiou".split("")
  let word = str.split("")
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      word[i] = "!"
    }
  }
  return word.join("")
}

//for-in loop;  given an object, return (inside an array) all keys and values that have a length of 5
function giveMeFive(obj){
  let result = []
  for (let key in obj) {
    if (key.length === 5) {
      result.push(key)
    }
    if (obj[key].length === 5) {
      result.push(obj[key])
    }
  }
  return result
}

//Day 108
//refactor the following code using the ternary operator and less than 137 characters:
function describeAge(age) {
    if (age <= 12) {
      return "You're a kid";
    } else if (age >= 13 && age <= 17) {
      return "You're a teenager";
    } else if (age >= 18 && age <= 64) {
      return "You're an adult";
    } else {
      return "You're an elder";
    }
}

//solution:
function describeAge(age) {
  return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
}

//Day 109  -  Happy Thanksgiving!
//8 arrow function practice;  for a given array of numbers, convert said numbers into words based on their character codes
var arrowFunc = function(arr) {
  return arr.map(num => String.fromCharCode(num)).join('');
}

//Day 110
//6 - Two Sum
//given an array of numbers and a target number, return an array containing the two indices of two numbers in the array that add up to the target number
function twoSum(numbers, target) {
  let first = 0;
  let second = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (target - numbers[i] === numbers[j]) {
        first = i
        second = j
        break;
      }
    }
  }
  return [first, second]
}

//NOT an optimal solution.  Nested for loops are icky

//Day 111
//Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
function check(str1,str2) {
  return str1.split(str2).length -1
}

//extend a class
class Animal {
  constructor(name) {
    this.name = name
  }
}
class Dog extends animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

//Day 112
//7 - Minimize Sum of Array
//Given an even-length array of positive numbers (including 0), calculate the lowest possible sum when you are muliplying pairs of these numbers
function minSum(arr) {
  let arr2 = arr 
  arr2.sort((a,b) => a-b,0)  //sort the input array 
  let arr1 = arr2.splice(0, arr2.length/2).reverse()  //cut the array in half, and reverse the order of one of the halves
  
  let result = 0  //the goal is to multiply the lowest number in the array by the highest, the 2nd lowest with the 2nd highest, etc (that's why we reversed one of the array halves)
  for (let i = 0; i < arr1.length; i++) {
    result += arr1[i] * arr2[i]
  }
  return result
}

//Day 113
//Count the number of occurrences of each element in an array.  You don't know how many elements there are, and you need to count them all.
function countThings(arr) {
  let counter = {}
  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] = (counter[arr[i]] || 0) + 1
  }
  return counter
}

//or 

function countThings(arr) {
  let counter = {}
  for (let num of arr) {
    counter[num] = (counter[num] || 0) + 1
  }
  return counter
}

//constructor
function gbfMake(name, race) {
  this.name = name
  this.race = race
}
let ilsa01 = new gbfMake("Ilsa", "Erune")

//Day 114
//debug: make sure the main function fires the game's functions in the correct order
var health = 100
var position = 0
var coins = 0

function main () {
  rollDice()  
  move()
  combat()  
  getCoins()
  buyHealth()
  printStatus()
}

//given an integer, test to see if this integer is too large to be used by javascript
function SafeInteger(n) {
  return n < 2**53  //BigInt can use numbers up to (2^53 -1)
}

//apparently there's also a method for this:  Number.isSafeInteger(n)

//Day 115
//7 - Maximum Length Difference
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1
  }
  
  let resultX = a1.map(str => str.length)
  let resultY = a2.map(str => str.length)  
  
  let maxX = Math.max(...resultX)
  let maxY = Math.max(...resultY)
  
  let minX = Math.min(...resultX)
  let minY = Math.min(...resultY)
  
  return Math.max(maxX - minY, maxY - minX)

}

//Day 116
//6 - PascalCase:  Create a method that returns a string in PascalCase
String.prototype.PascalCase=function(){
  return this.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("")
}

//Day 117
//7 Love VS Friendship - Given a=1, b=2, etc.  Calculate the sum of a word when you convert its letters to numbers

function wordsToMarks(string){
  let arr = string.toLowerCase().split("")
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    result += (arr[i].charCodeAt(0) -96)
  }
  return result
}

//or

function wordsToMarks2(string){
  return [...string].reduce((result, current) => result += current.charCodeAt(0) -96, 0)
}

//Day 118
// 7 - Sorted?  How?
// given an array, determine if the array is sorted; and if so, is it in ascending or descending order?
function isSortedAndHow(array) {
  let sortedArrAsc = [...array].sort((a,b) => a-b, 0)
  let sortedArrDesc = [...array].sort((a,b) => b-a, 0)
  if (array.every((val,index) => val === sortedArrAsc[index])) {
    return "yes, ascending"
  } else if (array.every((val,index) => val === sortedArrDesc[index])) {
    return "yes, descending"
  } else {
    return "no"
  }
}

//alternate

function isSortedAndHow(arr) {
  return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':  //tests to see if every item in the array, in index order, is greater than or equal to the thing that came before it
         arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'  //same but greater
}

//Day 119
//Pythagorean Triple - Given an array of unsorted integers, determine if it's possible for them to create a triple:  a^2 + b^2 = c^2
function isPythagoreanTriple(integers) {
  let sum1 = integers[0]**2 + integers[1]**2
  let sum2 = integers[1]**2 + integers[2]**2
  let sum3 = integers[0]**2 + integers[2]**2
  
  let check1 = integers[2]**2
  let check2 = integers[0]**2
  let check3 = integers[1]**2
  
  return sum1 === check1 || sum2 === check2 || sum3 === check3
}

//remembering that, logically, this will only be possible if the smaller two numbers are on the left side of the equation (and therefore the array), we can simplify it down to:

function isPythagoreanTriple(integers) {
  integers.sort((a,b) => a-b,0)
  return integers[0]**2 + integers[1]**2 === integers[2]**2
}

//Day 120
//6 - Title Case;  Given two strings: a title and a list of exception words, return the title string in Title Case
function titleCase(title, minorWords ) {
  let newTitle = title.toLowerCase().split(" ")
  
  for (let i = 0; i < newTitle.length; i++) {
    newTitle[i] = newTitle[i].charAt(0).toUpperCase() + newTitle[i].slice(1)
  }
  
  if (minorWords) {
    let exceptions = minorWords.toLowerCase().split(" ")
    for (let i = 1; i < newTitle.length; i++) {
      if (exceptions.includes(newTitle[i].toLowerCase())) {
        newTitle[i] = newTitle[i].charAt(0).toLowerCase() + newTitle[i].slice(1)
      }
    }
  }
  return newTitle.join(" ")
}

//optimization:  consider the above but using a Set object for the list of exception words

//Day 121
//7 - Switcheroo - 
function switcheroo(str){
  let arr = str.split("")
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") {
      arr[i] = "b"
    } else if (arr[i] === "b") {
      arr[i] = "a"
    } else {
      continue
    }
  }
  return arr.join("")
}

//alternative
function switcherooo(str) {
  return [...str].map(letter => letter === "a" ? letter = "b" : letter === "b" ? letter = "a" : letter).join((""))
}

//Day 122 - 
//7 - Row Weights - Given an array of numbers, sum all of the even index and all of the odd index numbers, representing the weights of the members of two different teams
function rowWeights(array){
  let team1 = array.map((el, i) => i % 2 === 0 ? el : 0).reduce((a,b) => a+b,0)
  let team2 = array.map((el, i) => i % 2 !== 0 ? el : 0).reduce((a,b) => a+b,0)
  
  return [team1,team2]
}

//Day 123
//Filter method
function getEvenNumbers(numbersArray){
  return numbersArray.filter(num => num % 2 === 0)
}

//Day 124
//Sum of Cubes - given an integer, return the sum of all cubed integers from 1 to that number
function sumCubes(n){
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i**3
  }
  return total
}

//Day 125
// 8 - Potenciation : raise a given number to the given power, without using Math.pow()
function power(x,y){
  return x**y
}

//Day 126
function repVowels(str) {
  return str.replace(/[aeiou]/gi, "!")
}

function isInteger(num) {
  return num % 1 ? false : true
}

function filterVowels(str) {
  let vowels = [..."aeiou"]
  let string = str.split("")
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      string[i] = "!"
    }
  }
  return string.join("")
}

//Day 127
//6 - Mexican Wave - given a string, return an array that contains that string multiple times, with each one having a different letter capitalized, creating a wave
function wave(str){
  let result = []
  let entry = str.split("")
  for (let i = 0; i < entry.length; i++) {
    if (entry[i] === " ") {
      continue
    } else {
      entry[i] = entry[i].toUpperCase()
      result.push(entry.join(""))
      entry[i] = entry[i].toLowerCase()
    }
  }
  return result
}

//alt

function wave(str){
  let result = []
  for (let i = 0; i < str.length; i++) {
    let entry = str.split("")   // I'm not sure if re-declaring this variable with each iteration is the best practice; Doing it this way allows me to not lowerCase() every time I upperCase()
    if (entry[i] !== " ") {
      entry[i] = entry[i].toUpperCase()
      result.push(entry.join(""))
    }
  }
  return result
}

//Day 128
function stringChange(str) {
  return str.split("").slice(1,-1).join(" ") || null
}

//6 - Meeting:  poorly explained bullshit
function meeting(s) {
  let string = s.toUpperCase().split(';')
                .map(x => x.split(':').reverse().join(', '))
                .sort()
                .join(')(')
  return '(' + string + ')'
}

//Day 129
//8 - Classy Extensions
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`
  }
}

//Day 130
//Replace all the vowels in a string with something else, using regex
function repAllVows(str) {
  return str.replace(/[aeiou]/gi, "!")
}

//Day 131
//6 - If you can read this - Given an input string, return a string of every letter in the original string replaced by the appropriate word in the NATO Phonetic Alphabet
//EX:  never = November Echo Victor Echo Romeo

let NATO = {
  'A': 'Alfa',
  'B': 'Bravo',
  'C': 'Charlie',
  'D': 'Delta',
  'E': 'Echo',
  'F': 'Foxtrot',
  'G': 'Golf',
  'H': 'Hotel',
  'I': 'India',
  'J': 'Juliett',
  'K': 'Kilo',
  'L': 'Lima',
  'M': 'Mike',
  'N': 'November',
  'O': 'Oscar',
  'P': 'Papa',
  'Q': 'Quebec',
  'R': 'Romeo',
  'S': 'Sierra',
  'T': 'Tango',
  'U': 'Uniform',
  'V': 'Victor',
  'W': 'Whiskey',
  'X': 'Xray',
  'Y': 'Yankee',
  'Z': 'Zulu',
}

function to_nato(words) {
  return words.split('').filter(char => char !== ' ').map(char => table[char.toUpperCase()] || char).join(' ');
}

//Day 132

function gbfMaker2(name, race, element) {
    this.name = name
    this.race = race
    this.element = element
}

// let ilsa = new gbfMaker2("Ilsa", "Erune", "Earth")

//Day 133
//7 - Bumps in the Road
function bump(str){
  return str.split("").filter(char => char === "n").length <= 15 ? "Woohoo!" : "Car Dead"
}

//Day 134
function remove(str, str2) {
  return str.split(str2).join("")
}

//Day 135
// 8 - Remove all "!" from a string
function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

//Day 136
"string".replace(/[aeiou]/gi, "!")

function rep(str) {
  return str.replace(/[aeiou]/gi, "!")
}

//Day 137
//Given an array of [1,2,3,4,5], how would you replace the number 3 with the string "three" ?
let numbers = [1,2,3,4,5]
numbers.splice(2, 1, "three")

//Day 138
function counter(arr) {
  let results = {}
  for (let element of arr) {
    if (arr.includes(element)) {
      results[element] = (results[element] || 0) + 1
    }
  }
  return results
}

//Day 139
//8 - Object syntax debug
var rooms = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
    }
  },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water'
    }
  }
}

//Day 140
let arr = [..."abcdefghijklmnopqrstuvwxyz"]

//Day 141
function typeValidation(variable, type) {
  return typeof variable === type
}

//Day 142
//count the divisors - given an integer, n, determine how many divisors that number has.  EX:  given 4, should return 3 (1,2, and 4)
function getDivisorsCnt(n){
  let counter = 0
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      counter++
    }
  }
  return counter
}

//Day 143
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "!")
}

arrayName.forEach(el,i,arr) {
  //syntax of forEach loop
}
//object destructuring: renaming
let obj = {
  firstProp: "one",
  secondProp: "two",
  thirdProp: "three"
}
let {firstProp: alpha, secondProp: beta, thirdProp: gamma} = obj


//Day 144
//6 - Multiplication Table - create an array of arrays that represent the multiplication table of a given size (integer)
function multiplicationTable(size) {
  let result = []
  let temp = []
  for (let j = 1; j <= size; j++) {
    for (let i = 1; i <= size; i++) {
      temp.push(i * j)
      if (temp.length === size) {
        result.push(temp)
        temp = []
      }
    }
  }
  return result
}

//Day 145
//6 Data Reverse
//given an array of numbers (num is divisible by 8), reverse the array in 8-digit segments.
//ex: 11111111  00000000  00001111  10101010  --> 10101010  00001111  00000000  11111111
function dataReverse(data) {
  let result = []
  for (let i = 0; i < data.length/8; i++) {
    result[i] = data.slice(i*8, i*8+8)
  }
  return result.reverse().flat()
}

//Day 146
//6 - new cashier
function getOrder (input) {
  const menu = [
    'burger',
    'fries',
    'chicken',
    'pizza',
    'sandwich',
    'onionrings',
    'milkshake',
    'coke'
  ];

  let order = [];

  while (input !== '') {  //this combined with the line that replaces each word with '' will ensure that the function keeps running until all items are done
    for (let i = 0; i < menu.length; i++) {  //loops through all menu items
      while (input.indexOf(menu[i]) !== -1) {  //searches input string for each menu item; -1 means the string is not present; this will keep running in the case of duplicate items, replacing each entry with '' until all entries are gone
        if (input.indexOf(menu[i]) >= 0) {  //this if statement is not actually necessary as far as I can tell; remove?
          order.push(menu[i][0].toUpperCase() + menu[i].slice(1));  //capitalize the current menu item and push it to the order array
          input = input.replace(menu[i], '');  //replace the current menu item with empty quotes; the while loop will continue until this has turned all of a given entry into ''
        }
      }
    }
  }
  return order.join(' ');
};

//Day 147
//8 - 99 bottles
function HQ9(code) {
  switch (code) {
    case 'H': return 'Hello World!';
    case 'Q': return code;
    case '9': return beer(99);
    default: return undefined;
  }
}

function beer(count) {
  if (count === 2) {
    return '2 bottles of beer on the wall, 2 bottles of beer.\n' +
        'Take one down and pass it around, 1 bottle of beer on the wall.\n' +
        '1 bottle of beer on the wall, 1 bottle of beer.\n' +
        'Take one down and pass it around, no more bottles of beer on the wall.\n' +
        'No more bottles of beer on the wall, no more bottles of beer.\n' +
        'Go to the store and buy some more, 99 bottles of beer on the wall.';
  } else {
    return `${count} bottles of beer on the wall, ${count} bottles of beer.\n` +
        `Take one down and pass it around, ${count - 1} bottles of beer on the wall.\n` +
        beer(count - 1);
  }
}


//Day 148
//8 - Crash Override
//Given two string inputs, return a single string output of two words.  The output words are determined by the first letter of each of the two input strings.  The output words are pulled from two objects; each letter of the alphabet has a corresponding word
function aliasGen(first, last){
  if (first[0].toUpperCase() == first[0].toLowerCase() || last[0].toUpperCase() == last[0].toLowerCase()) {
    return "Your name must start with a letter from A - Z."
  }
  return firstName[first[0].toUpperCase()] + " " + surname[last[0].toUpperCase()]  //firstName and surname are objects with code names paired to each letter of the alphabet
}

//Day 149
class Dog extends Animal{
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

//8 - TRUE FOR NONE.  create a function that accepts an array and a callback.  every element of the array is passed through the callback.  return true if the callback function returns true for NONE of the elements of the array.
function none(arr, fun){
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i]) === true) {
      result = false
    }
  }
  return true
}

//turns out there's a method that makes this easier:  .some()

function none(arr, fun){
  return !arr.some(fun);
}

//Day 150
//8 - toString and padStart
//given 3 input numbers, convert these numbers to hexadecimal and return them as a 6-digit color code (string)
function colorOf(r,g,b){
  return "#" + [r.toString(16).padStart(2, '0'), g.toString(16).padStart(2, '0'), b.toString(16).padStart(2, '0')].join("")
}

//Day 151
//disemvowel
function disemvowel(str) {
  let result = [...str]
  let vowels = [..."aeiou"]
  for (let i = 0; i < result.length; i++) {
    if (vowels.includes(result[i].toLowerCase())) {
      result[i] = "!"
    }
  }
  return result.join("")
}

//8 - given two parameters, an array of floats and a standalone float, determine how many of the floats inside the array, when rounded down to 2 decimal places, are less than the standalone float
function howManySmaller(arr,n){
  return arr.map(num => num.toFixed(2)).filter(num => num < n).length
}

//honestly you don't even have to map it, you can jump straight to the filter
function howManySmaller(arr,n){
  return arr.filter(num => num.toFixed(2) < n).length
}

//Day 152
class GBFMake2 {
  constructor(name, race, element, ultimate) {
    this.name = name
    this.race = race
    this.element = element
    this.ultimate = ultimate
  }
  ult() {
    return `Using ${this.ult}!`
  }
}

//8 - JS 16, slice()
//given an array of strings, reduce all of the strings in the array to be the same length as the shortest one
function cutIt(arr){
  let shortest = arr.reduce((a,b) => a.length <= b.length ? a : b).length
  let result = arr.map(str => str.slice(0,shortest))
  return result
}

//Day 153
function returnWord(num) {
  return ["Zero", "One", "Two", "Three", "Four", "Five"][num]
}

//Day 154
function GbfCharMaker(name, race, element, ult) {
    this.name = name
    this.race = race
    this.element = element
    this.ult = function() {
      return `Using ${ult}`
    }
}

//Day 155
function countStr(str1,str2) {
  return str1.split(str2).length -1
}

//6 - Your order, please
function order(words){
  let arr = words.split(" ")
  let result = []
  for (let j = 1; j <= arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(j)) {
        result.push(arr[i])
        break;
      }
    }
  }
  return words.length < 1 ? "" : result.join(" ")
}

//the above is not ideal due to nested loops.  the larger the original sentence, the slower it becomes.

//Day 156
//8 - Calculate Price Excluding VAT;  Given a number that represents the price of an item, find out the original price by removing VAT (VAT = 15%)
//if price is null, return -1
function excludingVatPrice(price){
  return price === null ? -1 : Math.round((price / 1.15) * 100) / 100
}

//a slightly more robust version of the above, where you can enter the vat at runtime
function excludingVatPrice(price, vat){  //enter the vat as the percentage, not the decimal.  ex: 15% = 15, 12.5% = 12.5
  return price === null ? -1 : Math.round((price / (1 + vat/100)) * 100) / 100
}  
//problem with this is that if you want it to return a price in usual format (2.00, 2.15, etc) you have to add toFixed(2) any time that your tax rate returns a flat integer
//for example, 2.30 with a 15% vat would return 2, instead of 2.00, unless you use toFixed(2).  However, toFixed() makes it a string

//Day 157
//8 - Finish Guess the Number Game
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (this.lives < 1) {
      throw new Error('No guesses left.')
    } else {
      if (n === this.number) {
        return true
      } else {
        this.lives--
        return false
      }
    }
  }
}