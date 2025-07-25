//Ctrl-F "revisit" to find the ones you wanna do again or weren't satisfied with

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
let a73 = "abcdefg"
let b73 = "hijklmn"
let thing = new Set(a+b) 
//creates an object with 14 entries, a-n, as single letters
let thang = new Set()
thang.add(a73+b73) 
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
class Dog extends Animal {
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

arrayName.forEach((el,i,arr) => 'do the thing') 

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
//8 - Finish "Guess the Number" Game
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

//Day 158
//8 - Debug the code
function yourFutureCareer(){
	let random = Math.random()
	if (random <= 0.32) {
		return "FrontEnd Developer"
  } else if (random <= 0.65) {
    return "BackEnd Developer"
  } else {
		return 'Full-Stack Developer'
	}
}

//Day 159
function thingamabob(str) {
  return str.split(",").slice(1,-1).join(" ") || null
}

//7 - Reverse a number
function reverseNumber(n) {
  let number = +Math.abs(n).toString().split("").reverse().join("")
  return n < 0 ? -number : number
}

//Day 160
//sArCaSmCaSe
function sarcasm(sentence) {
  let text = sentence.toLowerCase()
  let wordArr = text.split(" ")
  let letterArr = []
  for (let i = 0; i < wordArr.length; i++) {
    letterArr.push(wordArr[i].split(""))
  }
  let result = []
  for (let i = 0; i < letterArr.length; i++) {
    for (let j = 0; j < letterArr[i].length; j++) {
      if (j % 2 !== 0) {
        letterArr[i][j] = letterArr[i][j].toUpperCase()
      }
    }
    result.push(letterArr[i].join(""))
  }

  return result.join(" ")
}

//Day 161
class Solution{
  static main() {
    console.log("Hello World!");
  }  
}

class Animal {
  static planet = "earth"
  constructor(genus, species) {
    this.genus = genus
    this.species = species
  }
}

//Day 162
//react review

function Card(props) {
  return <div><img src={props.imgURL}></img></div>
}

<Card imgURL = "fileLocationHere"/>

function gcdCard(props) {
  return <div>
    <h2>{props.Name}</h2>
    <h3>{props.Element}</h3>
    <h3>{props.Rarity}</h3>
    <h4>{props.Specialty1}</h4>
    <h4>{props.Specialty2}</h4>
  </div>
}

//Day 163
//6 - Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

function sumDigPow(a, b) { 
  let result = []
  for (let i = a; i <= b; i++) {
    let sum = 0
    for (let j = 1; j <= i.toString().length; j++) {
        sum += i.toString().split("").map(Number)[j-1] ** j
    }
    if (sum === i) {
      result.push(sum)
    }
  } 
  return result
}

//Day 164
//Count the number of occurrences of each element in an array.  You don't know how many elements there are, and you need to count them all.

function counter(arr) {
  let container = {}
  for (let el of arr) {
    container[el] = (container[el] || 0) +1
  }
  return container
}

const counter = function(arr) {
  let container = {}
  for (let el of arr) {
    container[el] = (container[el] || 0) +1
  }
  return container
}

const counter = arr => {
  let container = {}
  for (let el of arr) {
    container[el] = (container[el] || 0) +1
  }
  return container
}

//8 Blood-alcohol content
function bloodAlcoholContent(drinks, weight, sex, time){
  let bac = (drinks.ounces * drinks.abv * (5.14 / weight) * (sex === "male" ? 0.73 : 0.66)) - 0.015 * time
  return +bac.toFixed(4)
}

//Day 165
//7 - Anagram Detection
function isAnagram(test, original) {
  let firstWordArr = test.toLowerCase().split("").sort()
  let secondWordArr = original.toLowerCase().split("").sort()
  let firstWordContainer = {}
  let secondWordContainer = {}
  for (let el of firstWordArr) {
    firstWordContainer[el] = (firstWordContainer[el] || 0) + 1
  }
    for (let el of secondWordArr) {
    secondWordContainer[el] = (secondWordContainer[el] || 0) + 1
  }
  return Object.entries(firstWordContainer).toString() === Object.entries(secondWordContainer).toString()
}

//OH HEY LOOK ANOTHER GREAT EXAMPLE OF ME THINKING TOO HARD.  Here's a better way to do it:

function isAnagram(test, original) {
  let firstWordArr = test.toLowerCase().split("").sort().join("")
  let secondWordArr = original.toLowerCase().split("").sort().join("")
  return firstWordArr === secondWordArr
}

//Day 166
//6 - Sums of Parts - Revisit
function partsSums(ls) {
  const reps = ls.length
  let arr = ls
  let result = []
  for (let i = 0; i < reps; i++) {
    result.push(arr.reduce((a,b) => a+b,0))
    arr.shift()
  }
    if (arr.length === 0) {
      result.push(0)
    }
  return result
}

//My solution above does not pass the Kata's performance needs.  I need a more optimized solution.
//start from the end of the original array and use shift()?  basically an accumulator; could probably be written better
function partsSums(ls) {
  const reps = ls.length
  let arr = ls
  let result = [0]
  let holder = 0
  for (let i = arr.length-1; i >= 0; i--) {
    result.unshift(holder + arr[i])
    holder += arr[i]
  }
  return result
}

//Day 167
//8 Logical calculator.  Terribly worded and seems pointless.
function logicalCalc(array, op)
{ 
  var result = array[0];
  for(var i = 1; i < array.length; i++)
  {
    if(op == "AND")
    {
      result = result && array[i];
    }
    if(op == "OR")
    {
      result = result || array[i];
    }
    if(op == "XOR")
    {
      result = result != array[i];
    }
  }
  return result;
}

//Day 168
//Have you ever written code that works and then stared at it for 15 minutes trying to figure out WHY it works because you stumbled on to the answer?  I HAVE!
function yearDays(year){
  let fourHundred = year/400 % 1
  let oneHundred = year/100 % 1
  let four = year/4 % 1
  
  let standard = four || (fourHundred && !oneHundred)
  
  return `${year} has ${standard?365:366} days`
}

//Day 169
//8 - Any arrows left?
function anyArrows(arrows){
  return arrows.some(el => el.damaged != true);
}

//Day 170
//7 - Predict your age
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1,age2,age3,age4,age5,age6,age7,age8].reduce((a,b) => a + (b ** 2), 0)
  return Math.floor(Math.sqrt(arr)/2)
}

//Day 171
//8 - Reagent Formula
function isValid(formula){
  if (formula.includes(1) && formula.includes(2)) {
    return false
  }
  if (formula.includes(3) && formula.includes(4)) {
    return false
  }
  if (formula.includes(5) && formula.includes(6) === false) {
    return false
  }
  if (formula.includes(6) && formula.includes(5) === false) {
    return false
  }
  if (!formula.includes(7) && !formula.includes(8)) {
    return false
  }
  return true
}

//Day 172
//6 - Given a string of letters and hashes, output the string that would result if every hash (#) were treated like a typed backspace, deleting whatever letter comes before it.  
//ex: "abc#d##c" ==> "ac"
function cleanString(s) {
  let arr = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      arr.push(s[i])
    } else {
      arr.pop()
    }
  }
  return arr.join("")
}

//Day 173
//8 - Collatz Conjecture (3n+1)
var hotpo = function(n){
  let num = n
  let counter  = 0
  while (num > 1) {
    if (num % 2 === 0) {
      num = num/2
    } else {
      num = num * 3 + 1
    }
    counter++
  }
  return counter
}

//Day 174
//8 - Find the Integral
function integrate(coefficient, exponent) {
  return [coefficient / (exponent + 1), (exponent + 1)].join("x^")
}

//175 
//8 - Locate the Barycenter of a Triangle
function barTriang(p1, p2, p3){
  let x = (p1[0]+p2[0]+p3[0])/3
  let y = (p1[1]+p2[1]+p3[1])/3
  return [Math.round(x * 10000) / 10000, Math.round(y * 10000) / 10000]
}

//can also use toFixed(4) to get the result to 4 decimal places; keep in mind that toFixed() converts it to a string.

//Day 176
//8 - Grasshopper - Create the rooms
var rooms = {
  room1: {
  name: "Entrance",
  description: "Entrance Hall description",
  completed: false
},
  room2: {
  name: "Entrance",
  description: "Entrance Hall description",
  completed: false
  },
  room3: {
  name: "Entrance",
  description: "Entrance Hall description",
  completed: false
  }
}

//Day 177
//8 Age range compatibility equation
function datingRange(age){
  if (age > 14) {
    var min = Math.floor(age/2 + 7)
    var max = Math.ceil((age-7) * 2)
  } else {
    var min = Math.floor(age * .9)
    var max = Math.floor(age * 1.1)
  }
  return `${min}-${max}`
}

//Day 178
//8 Training JS 17
function firstToLast(str,c) {
  if (str.indexOf(c) === -1) {
    return -1
  } else {
      return str.lastIndexOf(c) - str.indexOf(c)
  }
}

//Day 179
function febtwo(str) {
  return str.split(",").slice(1,-1).join(" ") || null
}
function Febtwogbf(name, race, element, ult) {
  this.name = name
  this.race = race
  this.element = element
  this.ult = ult
  this.ultimate = function() {
    console.log(`Using ${this.ult}!`)
  }
}

//Day 180
//8 - Training JS 29.  concat() and join()
function bigToSmall(arr){
  return [].concat(...arr).sort((a,b) => b-a,0).join(">")
}

//Day 181
//8 late period?
function periodIsLate(last, today, cycleLength){
  return ( ( today.getTime() - last.getTime() ) / 86400000) > cycleLength
}

//Day 182
//8 Enumerable Magic 2
function any(arr, fun){
  return arr.some(fun)
}

//Day 183
//Geometry Basics: circle area in 2d
function circleArea(circle){
  return (Math.PI * circle.radius **2)
}

//Day 184
//8 Training JS 13 - Number Objects
function whatNumberIsIt(n){
  switch(!isNaN(n) && n) {
      case Number.POSITIVE_INFINITY: return `Input number is Number.POSITIVE_INFINITY`
      case Number.NEGATIVE_INFINITY: return `Input number is Number.NEGATIVE_INFINITY`
      case Number.MAX_VALUE: return `Input number is Number.MAX_VALUE`
      case Number.MIN_VALUE: return `Input number is Number.MIN_VALUE`
      case false: return `Input number is Number.NaN`
      case n: return `Input number is ${n}`
  }
}

//Day 185
function disemvowel(str) {
  let result = [...str]
  let vowels = [..."aieou"]
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(result[i])) {
      result[i] = "!"
    }
  }
  return result.join("")
}

//Day 186
class GBFMake3 {
  constructor(name, race, element, ultName) {
    this.name = name,
    this.race = race, 
    this.element = element, 
    this.ultName = ultName
  }
  Ultimate() {
    console.log(`Using ${this.ultName}!`)
  }
}

//Day 187
//8 - Training JS 21
function fiveLine(str){
  return `${str.trim()}\n` + 
         `${str.trim()}${str.trim()}\n` +
         `${str.trim()}${str.trim()}${str.trim()}\n` + 
         `${str.trim()}${str.trim()}${str.trim()}${str.trim()}\n` + 
         `${str.trim()}${str.trim()}${str.trim()}${str.trim()}${str.trim()}`
}

//Day 188
function zeroToNine(n) {
  return "Zero One Two Three Four Five Six Seven Eight Nine".split(" ")[n]
}

//Day 189
//8 - Improving Math.round(x)
Math.roundTo = function (number, precision) {
  return +number.toFixed(precision)
}

//Day 190
class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.gender = gender
  }
  sayFullName() {
    return `${this.firstName} ${this.lastName}`
  }
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`
  }
}

//Day 191
//8 - "this" is a problem
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name =  this.firstName + ' ' + this.lastName
}

//Day 192
//8 - Training JS 32
function roundIt(n){
  let arr = String(n).split(".")
  if (arr[0].length < arr[1].length) {
    return Math.ceil(n)
  }
  if (arr[0].length > arr[1].length) {
    return Math.floor(n)
  }
  if (arr[0].length == arr[1].length) {
    return Math.round(n)
  }
}

//alternate version
function roundIt(n){
  var [a, b] = n.toString().split('.')  //array destructuring puts the two array values into a and b
  return a.length > b.length ? Math.floor(n) : a.length < b.length ? Math.ceil(n) : Math.floor(n);
}

//Day 193
//8 - count words*
function countWords(str) {
  console.log(str)
  return str.split(" ").filter((el,i) => el.toUpperCase() != el.toLowerCase()).length
}
//currently doesn't account for words that are side by side like "helloWorld"

//Day 194
function sumSquares(array) {
  return array.map(x => x**2).reduce((a,b) => a+b,0)
}

//Day 195
function nextItem(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return arr[i+1]
    }
  }
  return undefined
 }

 //Day 196
 //8 - Terminal Game Turn Function
 function doTurn() {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}

//Day 197
//p: two parameters, representing two integers
//r: return an array with two integer values, rounded up
//e: 
//p: declare function with two parameters; determine final ratio; return an array what contains: x value of y * ratio, y value of original y, since that doesn't change
function aspectRatio(x,y){
  let ratio = 16/9
  return [Math.ceil(y * ratio), y]
}

//Day 198
//P - two integers
//R - true or false
//E - 
//P
function cutCube(volume,n){
  return !(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1);
}

function occurences(arr) {
  let results = {}
  arr.forEach(el => results[el] = (results[el] || 0) + 1)
  return results
}

//Day 199
class Cube {
  constructor(side = 0) {
    this.side = Math.abs(side)
  }
  getSide() {
    return this.side; 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}

//Day 200
//8 - terribly written problem
function addExtra(listOfNumbers){
  return [...listOfNumbers, 4]
}

//Day 201
//7 - Two fighters, one winner
function declareWinner(fighter1, fighter2, firstAttacker) {
  for (let i = 0; fighter1.health > 0 && fighter2.health > 0; i++) {
    if (fighter1.name === firstAttacker) {
      fighter2.health = fighter2.health - fighter1.damagerPerAttack
      if (fighter2.health <=0) {break}
      fighter1.health = fighter1.health - fighter2.damagerPerAttack
      if (fighter1.health <=0) {break}
    }
    else {
      fighter1.health = fighter1.health - fighter2.damagerPerAttack
      if (fighter1.health <=0) {break}
      fighter2.health = fighter2.health - fighter1.damagerPerAttack
      if (fighter2.health <=0) {break}
    }
  }
  return fighter1.health > 0 ? fighter1.name : fighter2.name
}

//this fails.  somehow the health value of the fighters is becoming NaN.

//Day 202
//7 The Coupon Code:  FAIL
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode) {
    return false
  }
  let months = "January February March April May June July August September October November December".split(" ")
  
  let currentYear = +currentDate.replace(",", "").split(" ")[2]
  let expirationYear = +expirationDate.replace(",", "").split(" ")[2]
  
  let currentMonth = currentDate.replace(",", "").split(" ")[0]
  let expirationMonth = expirationDate.replace(",", "").split(" ")[0]
  
  let currentDay = +currentDate.replace(",", "").split(" ")[1]
  let expirationDay = +expirationDate.replace(",", "").split(" ")[1]
  
  if (expirationDay < currentDay) {
    if (months.indexOf(expirationMonth) < months.indexOf(currentMonth)) {
      if (expirationYear < currentYear) {
      return false
      }
    }
  }
  return true
}

//this code works correctly in my browser's console, but codewars claims it returns true when it should be false.  the very first statement seems to be the core of the problem.  the codes don't match but codewars claims my function returns true.  it doesn't.

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)
}

//I did not try Date.parse() because according to the docs it only explicitly supports one very specific format, which this problem wasn't in.
//Lesson learned, try it anyway to see if it works... -_-
//also could have converted it with a new Date() operation to compare them.


//Day 203
//7 Flatten and sort an array
function flattenAndSort(array) {
  return array.flat().sort((a,b) => a-b,0);
}

//Day 204
//Factorial
function factorial(n){
  let result = 1
  for(let i = 0; i < n; i++) {
    result *= (n-i)
  }
  return result
}

//Day 205
//7 - Coding Meetup #1
function countDevelopers(list) {
  return list.filter(x => x.continent === "Europe" && x.language === "JavaScript").length
}

//Day 206
function rep(str) {
  return str.split(",").splice(1,-1).join(" ") || null
}

//Day 207
//7 - Sum of Angles
function angle(n) {
  return 180*(n-2)
}

//Day 208
//7 - Largest sum in array
function largestPairSum (numbers) {
  return numbers.sort((a,b) => a-b,0).splice(-2).reduce((a,b)=>a+b,0)
}

//Day 209
if (internetIsOut) {
  return "well shit..."
}
//Day 210
function isTheInternetDown(answer) {
  return answer === "yes" ? "feck..." : "yay!"
}

//Day 211
let arrayAlphabet = "abcdefghijklmnopqrstuvwxyz".split("")
//Deodorant Evaporator  -  another terribly worded mathwars problem by a jackass
function evaporator(content, evapPerDayInteger, threshold){ 
  let capacity = content
  let evapRate = evapPerDayInteger / 100
  let cutoff = (threshold/100) * capacity
  let days = 0
  for (let i = 0; capacity > cutoff; i++) {
    capacity -= capacity * evapRate
    days++
  }
  return days
}

//Day 212
function reviewConstructors(name, race, element, ultName) {
  this.name = name
  this.race = race
  this.element = element
  this.test = function() {
    console.log(ultName)
  }
}

//Day 213
//7 - Alphabet War
function alphabetWar(fight){
  let combatants = fight.split("")
  let warTally = 0
  let leftSide = {
    w: 4,
    p: 3,
    b: 2,
    s: 1
  }
  let rightSide = {
    m: 4,
    q: 3,
    d: 2,
    z: 1
  }
  for (let i = 0; i < combatants.length; i++) {
    if (leftSide.hasOwnProperty(combatants[i])) {
      warTally -= leftSide[combatants[i]]
    }
    if (rightSide.hasOwnProperty(combatants[i])) {
      warTally += rightSide[combatants[i]]
    }
  }
   return warTally > 0 ? "Right side wins!" : warTally < 0 ? "Left side wins!" : "Let's fight again!"
}

//A more concise but harder to read approach:
function alphabetWar(fight) {
  let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
  let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
  return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}

//Day 214
//7 No oddities here
function noOdds( values ){
  return values.filter(x => x % 2 ===0)
}

//Day 215
//7 - Maximum Product
function adjacentElementsProduct(array) {
  let result = array[0] * array[1]
  for (let i = 1; i < array.length; i++) { //change the starting i to 1 since array[0] * array[1] has already been done
    if (array[i] * array[i+1] > result) {
      result = array[i] * array[i+1]
    }
  }
  return result
}

//Day 216
//7 - FizzBuzz array
function fizzbuzz(n){
  let result = []
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz")
    } else if(i % 5 === 0) {
      result.push("Buzz")
    } else if(i % 3 === 0) {
      result.push("Fizz")
    } else {
      result.push(i)
    }
  }
  return result
}
//slightly condensed version
function fizzbuzz(n){
  let result = []
  for (let i = 1; i <= n; i++) {
    result.push(i%15===0?"FizzBuzz":i%5===0?"Buzz":i%3===0?"Fizz":i)
  }
  return result
}

//Day 217
//7 Find the vowels.  given a string, return an array with the index positions of the vowels
function vowelIndices(word){
  let vowels = "aeiouy".split("")
  let result = []
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word.toLowerCase()[i])) {
      result.push(i+1)
    }
  }
  return result
}

//Day 218
//7 Most digits
function findLongest(array){
  //determine the longest number in the array
  let digits = Math.max(...array).toString().length 
  //convert the number array into an array of strings
  let strings = array.map(el => el.toString())
  //loop through the stringed array, and as soon as you find the first number with the length found above, return that as the result
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length === digits) {
      return +strings[i]
    }
  }
}

//Day 219
//7 Greet me
function greet(str) {
  return `Hello ${str[0].toUpperCase() + str.toLowerCase().slice(1)}!`
}

//Day 220
//7
function digits(n) {
  return n.toString().length
}

//Day 221
//7 - Power of two
function isPowerOfTwo(v){  //Thank stack overflow for this one
  if (v === 0) {
    return false
  }
  return v && !(v & (v - 1));
}

//alternate
function isPowerOfTwo(n){
  return Number.isInteger(Math.log2(n))
}

//Day 222
class CharMake {
  constructor(name, race, element, ult) {
    this.name = name
    this.race = race
    this.element = element
    this.ult = ult
  }
  useUlt = function() {
    return `Using ${this.ult}!`
  }
}

//Day 223
//7 - convert an array of strings to numbers
function toNumberArray(stringarray){
  return stringarray.map(Number)
}

//Day 224
// P - array of integers
// R - difference (integer) between the largest and smallest int in array
// E - [1,3,5] --> 4
// P - find the largest with Math.max, the smallest with Math.min, return the difference.  if input array has only 1 item, return 0

function maxDiff(list) {
  return list.length === 0 ? 0 : Math.max(...list) - Math.min(...list)
}

//Day 225
function repV(str) {
  let vowels = "aeiou".split("")
  let word = str.split("")
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(word[i])) {
      word[i] = "!"
    }
  }
  return word.join("")
}

//7 - Sort the Gift Code
//given a string, return the same string but in alphabetical order

function sortGiftCode(code){
  return code.split("").sort().join("")
}

function range(start,end) {
  let numberArr = []
  if (start < end) {
    for (let i = start; i <= end; i++) {
      numberArr.push(i)
    }
  }
  if (start > end) {
    for (let i = start; i >= end; i--) {
      numberArr.push(i)
    }
  }
  return numberArr
}

function rangeMod(start,end,step=1) {
  let numberArr = []
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      numberArr.push(i)
    }
  }
  if (start > end) {
    for (let i = start; i >= end; i -= step) {
      numberArr.push(i)
    }
  }
  return numberArr
}

function sum(arr) {
  return arr.reduce((a,b) => a+b, 0)
}

//Day 226 - 
function findOccurrences(str1, str2) {
  return str1.split(str2).length -1
}

//7 - simple beads count
function countRedBeads(n) {
  return n < 2 ? 0 : 2 * (n-1)
}

//Day 227
//7 - find the nth number of a digit
var findDigit = function(num, nth){
  if(nth <= 0)
    return -1;
   
  var x = Math.abs(num);
  for (var i=1; i < nth; i++){
    x = Math.floor(x/10);
  }
  return x%10;
}

//Day 228
//7 Alternate case - given a string, make all uppercase letters lowercase and viceversa
function alternateCase(s) {
  let sentence = s.split("").map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase())
  return sentence.join("")
}

//Day 229
//7 - esreveR
function reverse(array) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.unshift(array[i])
  }
  return result
}

//Day 230
function overheat(cpu) {
  if (cpu.Temp > 90) {
    cpu.shutdown
  }
}

//Day 231
function pc() {
  if (needPromptService) {
    buyFromiBuyPower = false
  }
}

//7 - Gauß needs help!
function f(n){
  return (parseInt(n) === n && n > 0) ? n*(n+1)/2 : false;
}

//Day 232
//7 - Coding Meetup #3
function isRubyComing(list) {
  return list.some(entry => entry.language === "Ruby")
}

//Day 233
//7 - Coding Meetup #2
function greetDevelopers(list) {
  list.forEach(entry => entry.greeting = `Hi ${entry.firstName}, what do you like the most about ${entry.language}?`)
  return list
}

//Day 234
//Coding Meetup #4
//given an array of objects, find the first object that meets a criteria and return its information in a given format
function getFirstPython(list) {
  let result = "There will be no Python developers"
  for (let entry of list) {
    if (entry.language === "Python") {
      result = `${entry.firstName}, ${entry.country}`
      break
    }
  }
  return result
}

// an alternate would be to use the array method "find()", which finds the first element of an array that satisfies a given condition

//Day 235
function countThings(arr) {
  let counter = {}
  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] = (counter[arr[i]] || 0) +1
  }
  return counter
}

//7 - Balanced Number 1
function balancedNum(number) {
  let str = `${number}`
  ,   len = (str.length - (str.length % 2 ? -1 : -2)) / 2
  ,   sum = digits => [ ...digits ].reduce((a, b) => a + +b, 0);

  return sum(str.slice(0, len)) === sum(str.slice(-len)) 
  ? 'Balanced' 
  : 'Not Balanced';
}

//Day 236
//7 - Incrementer
function incrementer(nums) { 
  let step1 = nums.map((el, i) => el + i + 1)
  return step1.map(el => el >= 10 ? +el.toString().split("").slice(-1) : el)
}

//alternate
function incrementer(num) { 
  return num.map((a,i) => (a+i+1)%10);
}

//Day 237
function pcTemp() {
  if (pcTemp === "too fecking high") {
    shutdown
  }
}

//Day 238 - SSD failure; no computer

//Day 239 - SSD failure; no computer

//Day 240 - SSD failure; no computer

//Day 241
//8 - Is the string uppercase?
String.prototype.isUpperCase = function() {
  return this.split("").every(character => character.toUpperCase() === character)
}

//Day 242
//Nth Smallest Element - given an array of integers, find the nth smallest number
function nthSmallest(arr, pos){
  return arr.sort((a,b) => a-b,0)[pos - 1]
 }

 //without modifying the input:
 function nthSmallest(arr, pos){
  let arrCopy = [...arr]
  return arrCopy.sort((a,b) => a-b,0)[pos - 1]
 }

 //Day 243
 //Sum of Odd Cubed Numbers
 function cubeOdd(arr) {
  if (arr.some(el => el !== +el)) {
   return undefined
  }
  let cubed = arr.map(el => el * el * el)
  let odds = cubed.filter(el => el % 2 === 1 || el % 2 === -1)
  let sum = odds.reduce((a,b) => a+b, 0)
  return sum
}

//Day 244
//simple remove duplicates
function solve(arr) {
  let result = []
  for (let i = arr.length-1; i >= 0; i--) {
    if (!result.includes(arr[i])) {
      result.unshift(arr[i])
    }
  }
  return result
}

//Day 245
//7 Spacify
function spacify(str) {
  return str.split("").join(" ")
}

//alternate
function spacify(str) {
  return [...str].join(" ")
}

//Day 245
//function declaration
function thing() {
  //do the thing
}

//function expression
const thing = function() {
  //do the thing
}

//fat arrow
const thing = thing => thing +1

//Day 246
//7 - Average of numbers
function averages(numbers) {
  if (numbers === null || numbers.length < 2) {
    return []
  }
  return numbers.map((el,i,arr) => (arr[i] + arr[i+1]) / 2).slice(0,-1)
}

//alternate
function averages(numbers) {
  return numbers ? numbers.map((el, i, a) => (el + a[i + 1]) / 2).slice(0, -1) : [];
}

//Day 247
//7 - V A P O R C O D E
function vaporcode(string) {
  return string.toUpperCase().split("").filter(el => el !== " ").join("  ")
}

//Day 248
//7 - Filter the number
function filterString(str) {
  return  +str.split("").filter(el => el.toUpperCase() === el.toLowerCase()).join("")
}

//Day 249

function gbfCon(name, race, element) {
  this.name = name
  this.race = race
  this.element = element
}

//Day 250
//7- Sort out the men from the boys
function menFromBoys(arr){
  arr = Array.from(new Set(arr))
  let odds = arr.filter(el => el % 2).sort((a,b) => b-a,0)  //originally I had el % 2 === 1;  this caused problems with negative numbers having a remainder of -1
  let evens = arr.filter(el => el % 2 === 0).sort((a,b) => a-b,0)
  return [...evens, ...odds]
}

//Day 251
//7 Simple consecutive pairs
function pairs(ar){
  let count = 0
  for (let i = 0; i < ar.length; i += 2) {
    console.log(ar[i+1])
    if (ar[i + 1] === ar[i] +1 || ar[i + 1] === ar[i] -1) {
      count++
    }
  }
  return count
}

//Day 252
//7 - The Office I
function outed(meet, boss){
  let total = 0
  let teamSize = Object.keys(meet).length
  for (let person in meet) {
    if (person === boss) {
      total += (meet[person] *2)
    } else {
      total += meet[person]
    }
  }
  return total / teamSize <= 5 ? "Get Out Now!" : "Nice Work Champ!"
}

//Day 253
//Fold an array
// revisit

function foldArray(array, runs){
  if (!runs) return array //this will stop the recursion from infinite looping;  once runs is 0, it'll return array
  
  var result = []
  for (let i = 0; i < Math.ceil(array.length /2); i++) {
    //add the 1st element to the last, 2nd to 2nd last, etc.  if at any point you're adding an element to itself, you know you've hit the middle and should stop
    if (i !== array.length-[i+1]) {
      result.push(array[i] + array[array.length-[i+1]])
    } 
    else {
      result.push(array[i])
      break;
    }
  }
  
  return foldArray(result,runs-1)  //instead of nested for loops, make it recursive
}

//Day 254
//7 - Basic Calculator
function calculate(num1, operation, num2) {
  switch (operation) {
      case "+": return num1 + num2
      case "-": return num1 - num2
      case "*": return num1 * num2
      case "/": return num2 === 0 ? null : num1 / num2
      default: return null
  }
 }
 
 //Day 255
 //7 - Interactive Dictionary
 // revisit
 class Dictionary {
  constructor() {
    this.dict = {};
  }
  
  newEntry(key, value) {
    this.dict[key] = value;
  }
  
  look(key) {
    return this.dict[key] || `Can\'t find entry for ${key}`;
  }
}

//alternate
class Dictionary {
  newEntry(key, value) {
    this[key] = value;
  }
  
  look(key) {
    return this[key] || `Can't find entry for ${key}`;
  }
}

//Day 256
//7 - Sum Factorial

function sumFactorial(arr){
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += factorialize(arr[i])
  }
  return sum
}

function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

//Day 257
//7 - Running out of space
function spacey(array){
  let result = []
  let word = ""
  for (let i = 0; i < array.length; i++) {
    word += array[i]
    result.push(word)
  }
  return result
}

//Day 258
//7 - Hello World without strings
function helloWorld(){
  return String.fromCharCode(72,101,108,108,111, 44,32, 87,111,114,108,100, 33)
}

//Day 259
//7 - Keep the Order
function keepOrder(arr, val) {
  let higherVal = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= val) {
      higherVal = i
      break;
    }
    if (arr[arr.length-1] < val) {
      higherVal = arr.length
    }
  }
  return higherVal
}

//alternate:  use findIndex to find the index of the first element that is larger than, or equal to, the input value.  also, add the value to the array with array.concat
function keepOrder(arr,val) {
  return arr.concat(val).findIndex( el => el >= val )
}

//Day 260
//Get Nth Even Number
function nthEven(n){
  return n * 2 -2
}

//Day 261
//7 - Dot Calculator
function dotCalculator (equation) {
  let numbers = equation.split(" ")
  let answer = ""
  switch (numbers[1]) {
      case "+": return answer.padStart(numbers[0].length + numbers[2].length, ".")
      case "-": return answer.padStart(numbers[0].length - numbers[2].length, ".")
      case "//": return answer.padStart(numbers[0].length / numbers[2].length, ".")
      default:  return answer.padStart(numbers[0].length * numbers[2].length, ".")
  }
}

//slightly more readable
function dotCalculator (equation) {
  let [leftDots,operation,rightDots] = equation.split(" ")
  let answer = ""
  switch (operation) {
      case "+" : return answer.padStart(leftDots.length + rightDots.length, ".")
      case "-" : return answer.padStart(leftDots.length - rightDots.length, ".")
      case "//": return answer.padStart(leftDots.length / rightDots.length, ".")
      case "*":  return answer.padStart(leftDots.length * rightDots.length, ".")
  }
}

//Day 262
//7 - Find the index of the 2nd occurrence
function secondSymbol(str, symbol) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === symbol) {
      result.push(i)
    }
  }
  return result.length > 1 ? result[1] : -1
}

//alternate
function secondSymbol(s, symbol) {
  return s.indexOf(symbol, s.indexOf(symbol) + 1);  //you can optionally indicate where in the string to start your search, so start it after the first occurrence's index
}

//Day 263
//7 - Sum a list but ignore any duplicates
// revisit - At first I didn't know why this code worked.  I forgot that indexOf(num) would always return the first index of that number, even if its called on later elements in the array.  So if there are duplicates in the array, it'll always return false and therefore not add them to the sum.
function sumNoDuplicates(arr) {
  let sum = 0
  arr.forEach(num => {
      if (arr.indexOf(num) === arr.lastIndexOf(num)) {
          sum += num;
      }
  })
  return sum
}
//Day 264
//7 - Last digits of a number.
function lastDigit(n, d) {
  let numArr = n.toString().split("").map(Number) // .splice(-d,d)
  //instead of everything down below this line, I could have just spliced the above line to get the specific section of the array I wanted...
  let result = []
  
  for (let i = numArr.length-1; result.length < d; i--) {
    result.unshift(numArr[i])
  }
  
  if (d > numArr.length) {
    return numArr
  } else {
    return result
  }
}

//cleaner alternative
function lastDigit(n, d) {
  return n.toString().split('').splice(-d,d).map(Number)
}

//Day 265
class GbfChar {
  constructor(name, race, element, ult) {
    this.name = name
    this.race = race
    this.element = element
    this.ult = ult
  }
  ougi() {
    return `${this.ult}`
  }
}

//Day 266
//7 Holiday 3 - Fire on the boat
function fireFight(s){
  return s.split(" ").map(el => el === "Fire" ? el = "~~" : el).join(" ")
}

//also could have used String.replaceAll("Fire", "~~")

//Day 267
//6 - Odd-heavy array
function isOddHeavy(arr){
  let odds = arr.filter(el => el % 2).sort((a,b) => a-b,0)  //if we use Math.min and Math.max in the return, we would not need to sort the new arrays.
  let evens = arr.filter(el => el % 2 === 0).sort((a,b) => a-b,0)
  
  if (arr.length === 0 || odds.length === 0) {  //if arr.length is 0, odds.length is 0 by default, so I could actually get rid of that check
    return false
  }
  if (odds.length > 0 && evens.length === 0) {
    return true
  }
  return odds[0] > evens[evens.length -1]  //Also could have done `Math.min(...odds) > Math.max(...evens)`
}

//cleaned up a little: 
function isOddHeavy(arr){
  let odds = arr.filter(el => el % 2 !== 0)
  let evens = arr.filter(el => el % 2 === 0)
  
  if (odds.length === 0) {
    return false
  }
  return Math.min(...odds) > Math.max(...evens)
}

//Day 268
//7 - Find your caterer
function findCaterer(budget, people){
  let basic = 15 * people
  let economy = 20 * people
  let premium = (people > 60 ? 24 : 30) * people
  
  if (people < 1 || budget < basic) {
    return -1
  } else {
    return premium > budget ? economy > budget ? 1 : 2 : 3
  }
}

//Day 269
//8 - Quadrants - Determine which of the 4 quadrants a set of coordinates is in.
function quadrant(x, y) {
  if (x > 0 && y > 0) {
    return 1
  }
  if (x < 0 && y < 0) {
    return 3
  }
  if (x > 0 && y < 0) {
    return 4
  }
  if (x < 0 && y > 0) {
    return 2
  }
}

//Day 270
//7 - Alphabetically ordered; check to see if all of a string's letters are in alphabetical order
function alphabetic(s) {
  return s.split("").sort().join("") === s
}

//Day 271
//7 How many consecutive numbers are needed?
function consecutive(arr) {
  let limit = Math.max(...arr) - (Math.min(...arr)-1)
  return arr.length ? limit - arr.length : 0
}

//Day 272
//7 - 99 Problems, #1: last in list
function last(arr) {
  return arr.length ? arr[arr.length-1] : null
}

//Day 273
function repStr(str) {
  let vowels = "aeiou".split("")
  let result = []
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result.push("!")
    } else {
      result.push(str[i])
    }
  }
  return result.join("")
}

//7 - Adding Arrays
function arrAdder(arr) {
  let result = []
  for (let j = 0; j < arr[0].length; j++) {
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i][j])
    }
    result.push(" ")
  }
  return result.join("").trim()
}

//Day 274
//Given a number, 0-9, return that number as a word.
function convert(num) {
  return ["Zero", "One", "Two","Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][num]
}

//Day 275
//7 Remove All Marked Elements of a List
//revisit
Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(el => !values_list.includes(el))
}

//Day 276
//7 Make Acronym
function toAcronym(str){
  return str.split(" ").map(el => el.slice(0,1)).join("").toUpperCase()
}

//Day 277
// Create a function that accepts 2 strings as arguments and returns an integer of the number of occurrences the 2nd argument is found in the 1st
function countThings(str1, str2) {
  let count = 0
  let strArr = str1.split("")
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === str2) {
      count++
    }
  }
  return count
}

//alternative
function countThings2(str1,str2) {
  return str1.split(str2).length -1
}

//Day 278
//7 - Find the smallest power higher than a given value
function findNextPower(val, pow_) {
  return Math.floor(Math.pow(val, 1/pow_) +1) ** pow_ > val ? Math.floor(Math.pow(val, 1/pow_) +1) ** pow_  : Math.floor(Math.pow(val, 1/pow_) +2) ** pow_ 
}  //oh god its so wet

//alternate
function findNextPower(val, pow_) {
  return Math.ceil(Math.pow(val+1, 1/pow_)) ** pow_
} 
//explanation: take the original value, find its nth root, round it down, increase it by 1, raise it to the nth power.  However, this fails inconsistently when the given value is already a perfect power.  Increase the original value by one and round UP to bypass this

//Day 279
//7 - Most Likely
function mostLikely(prob1,prob2){
  let arr1 = prob1.split(":").map(Number)
  let arr2 = prob2.split(":").map(Number)
  return (arr1[0]/arr1[1] > arr2[0]/arr2[1])
}

//Day 280
//7 - Cats in hats
function height(n) {
  let result = 2000000
  let previousCat = 2000000
  let currentCat = 0
  for (let i = 0; i < n; i++) {
    currentCat = previousCat * 0.4
    result += currentCat
    previousCat = currentCat
  }
  return result.toFixed(3)
}

//Day 281
function countElementsFor(arr) {
  let counter = {}
  for (let i = 0; i < arr.length; i++) {
    if (counter[arr[i]]) { 
      counter[arr[i]]++
    } else {
      counter[arr[i]] = 1
    }
  }
  return counter
}

//alternate
function countElementsForOf(arr) {
  let counter = {}
  for (let num of arr) {
    counter[num] = (counter[num] || 0) +1
  }
  return counter
}

//Day 282
//7 - Length and two values
function alternate(n, firstValue, secondValue){
  let result = []
  let i = 0
  while (i < n) {
    if (i % 2 === 0) {
      result.push(firstValue) 
      i++
    } else {
      result.push(secondValue)
      i++
    }
  }
  return result
}

//Day 283
//7 - Find Duplicates
function duplicates(arr) {
  let array1 = []
  let duplicates = []
  for (let i = 0; i < arr.length; i++) {
    if (array1.indexOf(arr[i]) === -1) {
      array1.push(arr[i]) 
    } 
    else if (duplicates.indexOf(arr[i]) === -1) {
      duplicates.push(arr[i])
    }
  }
  return duplicates
}

//Day 284
//implement filter
Array.prototype.filter = function(fn){
  var result = [];
  for (var i = 0; i<this.length; i++){
    if (fn(this[i])){
      result.push(this[i])
    }
  }
  return result
}

//Day 285
//8 - Do something "n.times"
Number.prototype.times = function (f) {
  for (let i = 0; i < this; i++) {
    f(i)
  }
}

//Day 286
//8 - Training JS 31
function blackAndWhite(arr){
  if(Array.isArray(arr)) {
    if (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1) {
      return "It's a black array"
    }
    else {
      return "It's a white array"
    }
  }
  return "It's a fake array"
}

//Day 287
//8 - pressure calc
solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  return (((givenMass1/molarMass1) + (givenMass2/molarMass2)) * 0.082 * (temp+273.15)) / volume
}

//Day 288
//8 - Configure package json for a node app
const configuration = {
  "name": "your-pack-name",
  "description": "This is a test.",
  "version": "1.0.0"
}

//Day 289
//8 - Elite Brazilian Forces
function magNumber(info){
  switch (info[0]) {
    case "PT92": return Math.ceil(3 * info[1] / 17)
    case "M4A1": 
    case "M16A2": return Math.ceil(3 * info[1] / 30)
    case "PSG1": return Math.ceil(3 * info[1] / 5)
  }
}

//alternate that's more DRY
magNumber = info => Math.ceil(info[1] * 3 / {PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5}[info[0]])

//Day 290
//7 - Product of largest pair
function maxProduct(a) {
  let arr = a.sort((a,b) => a-b,0)
  return arr[arr.length-1] * arr[arr.length-2]
}

//Day 291
//7 - 
function newAvg(arr, newavg) {
    let result = (newavg * (arr.length+1)) - (arr.reduce((a,b) => a+b,0))
    if (result <= 0) {
      throw new Error('Expected New Average is too low')
    } else {
      return Math.ceil(result)
    }
}

//Day 292
//6 - Find Cracker
//revisit - fun fact! this code has a very edge case failure:  if a student hacks their grade to be LOWER than what they deserve, this function will not catch it.
function findHack(arr) {
  let cheaters = []
  for (let i = 0; i < arr.length; i++) {
    if (checkTotal(arr[i][2]) < arr[i][1]) {
        cheaters.push(arr[i][0])
    }
  }
  return cheaters
}

function checkTotal(arr) {
  let total = 0
  if (arr.length > 4) {
      var honorRoll = true
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
      total += 30
    }
    else if (arr[i] === "B") {
      total += 20
    }
    else if (arr[i] === "C") {
      total += 10
      honorRoll = false
    }
    else if (arr[i] === "D") {
      total += 5
      honorRoll = false
    } else {
      honorRoll = false
    }
  }
  return total + (honorRoll ? 20 : 0)
}

//Day 293
//6 - Reverse vowels in a string
function reverseVowels(str) {
  let wordArr = str.split("")
  let vowelArr = "aeiouAEIOU".split("")
  let vowels = []
  for (let i = 0; i < wordArr.length; i++) {
    if (vowelArr.includes(wordArr[i])) {
      vowels.push(wordArr[i])
      wordArr[i] = "replace"
    }
  }
  for (let i = 0; i < wordArr.length; i++) {
    if ((wordArr[i]) === "replace") {
      wordArr[i] = vowels.pop()
    }
  }
  return wordArr.join("")
}

//Day 294
//constructor function
function gbfConstructor(name,race,element, ult) {
  this.name = name,
  this.race = race,
  this.element = element
  this.ult = function() {
    return `Using ${ult}`
  }
}

//Day 295
//6 - Permute a palindrome
function permuteAPalindrome (input) { 
  let inputArray = input.split("")  //turn the input into an array
  let counter = {}  //empty object to fill with counts of each character
  for (let i = 0; i < inputArray.length; i++) {  //for loop that counts the number of occurrences for each character in the array
    counter[inputArray[i]] = (counter[inputArray[i]] || 0) +1
  }
  let numOfOdds = 0  //a palindrome by its very nature can only have 1 character with an odd number of occurrences, at most
  for (const property in counter) {  //loop through the object and increment the counter every time there's a character with an odd number of occurrences
    if (counter[property] % 2 === 1) {
      numOfOdds++
    }
  }
  return numOfOdds > 1 ? false : true  
}

//Day 296
//6 - Number format.  Given a number, return that number as a string with commas in appropriate places
function numberFormat(number) {
  return number.toLocaleString();
}

//Day 297
//8 - Be Concise IV
function find(arr, el) {
  return arr.includes(el) ? arr.indexOf(el) : "Not found";
}

//Day 298
//8 - Making Six Toast
function sixToast(num) {
  return Math.abs(6-num)
}

//Day 299
//8 - Power
function numberToPower(number, power){
  var total = 1;
  for (var i = 1; i <= power; i++) { 
    total = total * number;
  }
  return total;
}

//Day 300
//8 - unexpected parsing
function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return {
    status: msg
  }
}

//Day 301
//8 - debugging - basic var assignment
var ab = "code";
var bc = "wa.rs";
var name = ab + bc;

//Day 302

//function declaration
function doIt() {
  //do it
}
//function expression
const doIt = function() {
  //do it
}
//fat arrow
const goOnDoIt = () => {/*do it*/}

//8 - Debugging practice
function weatherInfo (temp) {
  let c = convertToCelsius(temp)
  if (c < 0) {
    return (c + " is freezing temperature")
  } else {
    return (c + " is above freezing temperature")
  }
}
function convertToCelsius(temperature) {
  return ((temperature - 32) * (5/9))
}

//Day 303
//8 Bug Fixing
function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b; break;
    case'-': result = value.a - value.b; break;
    case'/': result = value.a / value.b; break;
    case'*': result = value.a * value.b; break;
    case'%': result = value.a % value.b; break;
    case'^': result = Math.pow(value.a, value.b); break;
  }
  return result;
}

//Day 304
//8 - Simple Fun - Seats in theater
function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col +1) * (nRows - row)
}

//Day 305
//8 - String Templates - Bug Fixing 5
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

//Day 306
//8 - Short Long Short - given two strings, return a new string of format: short+long+short
function solution(a, b){
  return a.length > b.length ? b+a+b : a+b+a
}

//Day 307
//8 - debugging - is this my tail?
function correctTail(bod, tail) {
    
  let sub = bod.substr(bod.length-(tail.length))
  
  if (sub === tail) {;
    return true
  }
  else {
    return false
  }
}

//Day 308
//8 - if/else syntax debug
function checkAlive (health) {
  if (health <= 0) {
    return false
  } else {
    return true
  }
}

//Day 309
//8 - refactoring
//started with:
function squaresOnly(array) {
  var result = [], isSquare;
  for (let i = 0; i < array.length; i++) {
    isSquare = !1; // !1 evaluates to false and is therefore a shorthand way of typing 'false'
    for (let k = 0; k <= 10; k++) {
      if (k ** 2 === array[i]) {
        isSquare = true;
      }
    }
    if (isSquare) {
      result[result.length] = array[i];
    }
  }
  return result;
}

//finished with:
function squaresOnly(arr) {
  return arr.filter((num) => Math.sqrt(num) % 1 === 0)
}

//Day 310
//8 - Whose Move?
function whoseMove(lastPlayer, win) {
  let nextPlayer = lastPlayer === "white" ? "black" : "white"
  return win ? lastPlayer : nextPlayer
}

//Day 311
//8 - Dollars and Cents - given a float, return said number as a string with dollar notation:  3 >>> $3.00
function formatMoney(amount){
  return `$${amount.toFixed(2)}`
}

//Day 312
//8 - Find the difference in ages
function differenceInAges(ages){
  let youngest = Math.min(...ages)
  let oldest = Math.max(...ages)
  return [youngest, oldest,(oldest-youngest) ]
}

//Day 313
//8 - Fix the bugs
function myFirstKata(a, b) {
  if (typeof(a) !== "number" || typeof(b) !== "number") {
    return false;
  } else {
    return (a % b) + (b % a)
  }
}

//Day 314
//8 - user links (spaces)
function generateLink(user) {
  let name = user.split(" ").join("%20")
  return `http://www.codewars.com/users/${name}`
}

//Day 315
//8 - Speedcode #2, array madness
function arrayMadness(a, b) {
  let sumA = a.reduce((a,b) => a + b*b, 0)
  let sumB = b.reduce((a,b) => a + b*b*b, 0)
  return (sumA > sumB)
}

//Day 316
//review
function cleanString(str) {  //string will be numbers & commas:  "1,2,3,4,5"
  return str.split(",").slice(1,-1).join(" ") || null
}
//review
//How would you replace all the vowels in a string with something else, or nothing at all?  (Use a regex)
function repVow(str) {
  return str.replace(/[aeiou]/gi, "!")
} 

//Day 317
//debugging
let items = []
items.push({a: "b", c: "d"})

//Day 318
//8 - invalid login, bug fixing
function validate(username, password){
  if (password.includes("||") || password.includes("//")) {
    return "Wrong username or password!"
  }
  var database = new Database();
  return database.login(username, password);
}

//Day 319
//8 - fun with es6 classes
// revisit
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true);
  }
}

//Day 320
class GBFcharMaker {
  constructor(name, race, element, ultName) {
    this.name = name
    this.race = race
    this.element = element
    this.chargeAttack = function() {
      return `Using ${ultName}!`
    }
  }
}

//Day 321
//8 - JS Style
//the below code will not work.  Why?  revisit
function getMax2()
{
  return
  {
    name: 'Max Headroom'
  }
}
//apparently there's an implicit ";" after return, which means the code never reaches the object.  fix it by putting the opening curly bracket on the same line as return

//Day 322
//7 - Count the consonants
function consonantCount(str) {
  let consonants = "bcdfghjklmnpqrstvwxyz".split("")
  let word = str.toLowerCase().split("")
  let counter = 0
  for (let i = 0; i < str.length; i++) {
    if (consonants.includes(word[i])) {
      counter++
    }
  }
  return counter
}

//Day 323
//7 - What dominates your array?
//revisit
function dominator(arr) {
  let counter = {}
  for (let i=0; i < arr.length; i++) {
    if (counter[arr[i]]) {
      counter[arr[i]]++
    } else {
      counter[arr[i]] = 1
    }
  }
  for (let key in counter) {
    if (counter[key] > arr.length/2) {
      return +key
    }
  }
  return -1
}

//Day 324
//7 - Day of the Year
function toDayOfYear(arr) {
  var now = new Date(arr[2],(arr[1]-1),[arr[0]]);
  var start = new Date(arr[2], 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.round(diff / oneDay)
  return day
}

//Day 325
//7 - alternating between three values; revisit
function f(x, cc) { 
  switch (x) {
    case cc.a: return cc.b;
    case cc.b: return cc.c;
    case cc.c: return cc.a;
  }
}

//Day 326
//7 - wentback
function f(x, cc) { 
  switch(x) {
      case cc.a: return cc.b
      case cc.b: return cc.c
      case cc.c: return cc.a
  }
}

//Day 327
//7 - Basic JS - Building a Calculator
var Calculator = {};
Calculator.add = function(n1,n2) {
  return n1+n2
}
Calculator.subtract = function(n1,n2) {
  return n1-n2
}
Calculator.multiply = function(n1,n2) {
  return n1*n2
}
Calculator.divide = function(n1,n2) {
  if(n2===0) {
    return false
  }
  return n1/n2
}
// a little drier version:
let Calculator = {
  add: function(n1,n2) {
    return n1+n2
  },
  subtract: function(n1,n2) {
    return n1-n2
  },
  multiply: function(n1,n2) {
    return n1*n2
  },
  divide: function(n1,n2) {
    return n2===0 ? false : n1/n2
  }
}

//Day 328
//cleaned up further:
var Calculator = {
  add:      (n1,n2) => n1+n2,
  subtract: (n1,n2) => n1-n2,
  multiply: (n1,n2) => n1*n2,
  divide:   (n1,n2) => n2===0 ? false : n1/n2
};

//Day 329
//7 - adding array functionality to js
Array.range = function(start, count) {
  let result = []
  let counter = 0
  for (let i = 0; counter < count; i++) {
    result.push(start + i)
    counter++
  }
  return result;
}
Array.prototype.sum = function() {
  let total = 0
  for (let i = 0; i < this.length; i++) {
    total += this[i]
  }
  return total;
}

//Day 330
//7 - Sorting Arrays
//revisit
function sortArray(a1, a2) {
  let result = []
  for (let i = 0; i < a1.length; i++) {
    let firstLetter = a1[i][0]
    for (let j = 0; j < a1.length; j++) {
      if (a2[j].startsWith(firstLetter)) {
        result.push(a2[j])
      }
    }
  }
  return result
}
//not a big fan of the nested for loop.  let's clean it up

const sortArray = (a1, a2) => a1.map(word1 => a2.find(word2 => word1[0] === word2[0]))

//Day 331 
function sortArray(a1, a2) {
  return a1.map(word1 => a2.find(word2 => word1[0] === word2[0]))
}

//Day 332
//7 - no ifs no buts
//revisit; multiple ways to do this.  kinda neat
function noIfsNoButs(a, b) {
  switch(true) {
      case (a>b) : return `${a} is greater than ${b}`
      case (a<b) : return `${a} is smaller than ${b}`
      default : return `${a} is equal to ${b}`
  }
}

//Day 333
function noIfsNoButs(a, b) {
  switch(true) {
      case a>b   : return `${a} is greater than ${b}`
      case a<b   : return `${a} is smaller than ${b}`
      case a===b : return `${a} is equal to ${b}`
  }
}

//Day 334
//7 - Given an array, Take each number in the array and square it if it is even, or square root the number if it is odd. Take this new array and return the sum of it, rounded to two decimal places.
function sumSquareEvenRootOdd(nums){
  let result = nums.map(x => x % 2 === 0 ? x*x : Math.sqrt(x)).reduce((a,b) => a+b,0)
  return Math.round(result * 100) / 100
}

//Day 335
//7 Power of 4
//Write a function that returns true if a given parameter is a power of 4, and false if it's not.
function powerOf4(n) {
  return Number.isInteger(n) && Number.isInteger(Math.log(n)/Math.log(4));
}

//Day 336
//create a function, taking two strings, that returns the count of the number of occurences of the 2nd string in the 1st one.
function letterCount(word,letter) {
  let counter = 0
  for(let i = 0; i < word.length; i++) {
    word[i] === letter ? counter++ : null
  }
  return counter
}

//or you could:

function letterCounter(word,letter) {
  return word.split(letter).length - 1
}

//Day 337
//7 - given an object where the values are arrays, determine which key has a value that includes all elements of a given array
//revisit
function killer(suspectInfo, dead) {
  for (let name in suspectInfo) {
    if (dead.every(deadPerson => suspectInfo[name].includes(deadPerson))) {
      return name;
    }
  }
}

//Day 338
//anki review
function repVow(str) {
  let vowels = "aeiou".split("")
  let result = str.split("")
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(result[i])) {
      result[i] = "!"
    }
  }
  return result.join("")
}
//337 review
function killer(suspectInfo, dead) {
  for (let name in suspectInfo) {
    if (dead.every((val) => suspectInfo[name].includes(val))) {
      return name
    }
  }
  return "Killer not found"
}

//Day 339
//anki review
function arrayCounter(arr) {
  let counter = {}
  for (let i = 0; i < arr.length; i++) {
    if (counter[arr[i]]) {
      counter[arr[i]]++
    } else {
      counter[arr[i]] = 1
    }
  }
  return counter
}
//alternate
function altArrayCounter(arr) {
  let counter = {}
  for (let key of arr) {
    counter[key] = (counter[key] || 0) +1
  }
}

//Day 340
//337 review; the importance of semantic code
function killer(suspectInfo, dead) {
  for (let suspect in suspectInfo) {
    if (dead.every(victim => suspectInfo[suspect].includes(victim))) {
      return suspect
    }
  }
 }

 //Day 341
 //given two numbers that will be multiplied, determine if the result is a "vampire number"
 function vampireTest(a, b) {
  let initial = (a.toString() + b.toString()).split("").sort().join("")
  let result = (a*b).toString().split("").sort().join("")
  return initial === result
}

//Day 342
//7 - turn any word into beef taco
function tacofy(word) {
  word = word.toLowerCase()
  let guide = {a: "beef",e: "beef",i: "beef",o: "beef",u: "beef",t: "tomato",l: "lettuce",c: "cheese",g: "guacamole",s: "salsa"}
  let result = ["shell"]
  for (let i = 0; i < word.length; i++) {
    if (guide[word[i]]) {
      result.push(guide[word[i]])
    }
  }
  result.push("shell")
  return result
}

//Day 343
//7 - Transpose two strings in an array
function transposeTwoStrings(arr) {
  let longer = Math.max(arr[0].length, arr[1].length)
  let result =[]
  for (let i = 0; i < longer; i++) {
    result.push(`${arr[0][i] || " "} ${arr[1][i] || " "}`)
  }
	return result.join("\n")
}

//Day 344
//7 - unscrambled eggs; you are given a string where "egg" has been inserted after every consonant.  return what the original string must have been
function unscrambleEggs(word){
  return word.split("egg").join("")
}

//Day 345
//7 - Turkish numbers, 0-99
function getTurkishNumber(num){
	let singleDigits = ["sıfır", "bir", "iki", "üç","dört", "beş", "altı", "yedi", "sekiz", "dokuz"]
  let dblDigits = ["on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"]
  let splitNumber = num.toString().split("").map(Number)
  
  if (num <=9) {
    return singleDigits[num]
  } else {
    return dblDigits[splitNumber[0]-1] + (splitNumber[1]===0? "" : ` ${singleDigits[splitNumber[1]]}`)
  }
}

//Day 346
//7 - Upstream/Downstream
function time(distance,boatSpeed,stream){
  let speed
  if (stream.split(" ")[0] === "Downstream") {
    speed = boatSpeed + +stream.split(" ")[1]
  } else {
    speed = boatSpeed - +stream.split(" ")[1]
  }
  return +(distance/speed).toFixed(2)
}

//Day 347
//7 - Cat and Mouse, easy version
function catMouse(x){
  return x.split(".").length-1 > 3 ? "Escaped!" : "Caught!"
}
// or just
function catMouse(x){
  return x.length > 5 ? "Escaped!" : "Caught!"
}

//Day 348
//7 - What time is it?
function getMilitaryTime(input) {
  let time = input.split(":")
  
  if (time[2].includes("PM") && (time[0] < 12)) {
    time[0] = +time[0] + 12
  }
  
  if (time[2].includes("AM") && (time[0] === "12")) {
    time[0] = "00"
  }
  return time.join(":").replace(/[AMPM]/gi, "")
}

//Day 349
//7 - Tram Capacity
function tram(stops, exiting, entering){
  let passengerCount = 0
  let passengerMax = 0
  for (let i = 0; i < stops; i++) {
    passengerCount += entering[i]
    passengerCount -= exiting[i] 
    passengerCount > passengerMax ? passengerMax = passengerCount : null
  }
  return passengerMax
}

//Day 350
//7 - two numbers are positive
function twoArePositive(...nums) {
  let counter = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      counter++
    }
  }
  return counter === 2
}

//alt
function twoArePositive(a, b, c) {
  return [...arguments].filter(val => val > 0).length === 2
}

//Day 351
function gbfmaker3(name, race, element) {
  this.name = name
  this.race = race
  this.element = element
}

//7 - Center Yourself
function center (str, width, fill = ' ') {
  let length = width - str.length
  let newString = str.padStart((str.length + Math.ceil(length/2)), fill)
  newString = newString.padEnd(width, fill)
  return newString         
}

//Day 352
//7 - Unix command line, extract file type
function linuxType(fileAttribute) {
  let index = {
    "-": "file",
    "d": "directory",
    "l": "symlink",
    "c": "character_file",
    "b": "block_file",
    "p": "pipe",
    "s": "socket",
    "D": "door"
  }
  return index[fileAttribute[0]]
}

//Day 353
//7 - search JSON
const getCharacters=(obj, key, val) => 
obj.characters.filter(character => character[key]?.toLowerCase() === val.toLowerCase());

//Day 354
// review 353;
function getCharacters(obj, key, val) {
  return obj.characters.filter(entry => entry[key].toLowerCase() == val.toLowerCase())
}
//I got as far as this but it kept erroring.  I forgot about the optional chaining used in yesterday's solution to avoid throwing an error

//Day 355
//7 - exclamation marks series #7
function remove (string) {
  let result = string.split(" ")
  result = result.filter(str => str.indexOf("!") !== str.lastIndexOf("!") || str.indexOf("!") === -1)
  return result.join(" ")
}

//Day 356
//7 - Between extremes
function betweenExtremes(numbers) {
  return Math.max(...numbers) - Math.min(...numbers)
}

//Day 357
//7 - You got change?
function giveChange(amount) {
  let money = []
  money[5] = Math.floor(amount / 100)
  money[4] = Math.floor((amount - (money[5]*100)) / 50)
  money[3] = Math.floor((amount - (money[5]*100+ money[4]*50)) / 20)
  money[2] = Math.floor((amount - (money[5]*100+ money[4]*50+ money[3]*20)) / 10)
  money[1] = Math.floor((amount - (money[5]*100+ money[4]*50+ money[3]*20+ money[2]*10)) / 5)
  money[0] = Math.floor(amount%5)
  return money
}

//hideous!  do a while loop instead?

function giveChange(amount) {
  let result = [0,0,0,0,0,0]
  
  while (amount>=100)
  { result[5]++; amount-=100;}
  
  while (amount>=50)
  { result[4]++; amount-=50; }
  
  while (amount>=20)
  { result[3]++; amount-=20; }
  
  while (amount>=10)
  { result[2]++; amount-=10; }
  
  while (amount>=5)
  { result[1]++; amount-=5; }
  
  while (amount>0)
  { result[0]++; amount--; }
  
  return result;
}
//at the very least, it's easier to decipher

//Day 358
//7 - Bingo (Or Not)
function bingo(arr) {
  let bingo = [2,7,9,14,15]
  return bingo.every((num) => arr.includes(num)) ? "WIN" : "LOSE"
}

//Day 359
//review
function repVowe(str) {
  return str.replace(/[aeiou]/gi, "")
}

//7 Convert Decimal Degrees to Deg,Min,Sec
//WIP
function convert(degrees) {
  degrees = degrees.toFixed(4)
  let result = []
  result[0] = +degrees.toString().split(".")[0]
  result[1] = +degrees.toString().split(".")[1]
  result[2] = +degrees.toString().split(".")[2]
  return result
}

// the annoying thing here is that it's easy, the only real complication is the arbitrary desire to have variable array lengths depending on the input

//360
//7 - ATM
function solve(n) {
  if (n % 10 !== 0) {return -1}
  let notes = 0
  while (n >= 500) {notes++; n -= 500;}
  while (n >= 200) {notes++; n -= 200;}
  while (n >= 100) {notes++; n -= 100;}
  while (n >= 50) {notes++; n -= 50;}
  while (n >= 20) {notes++; n -= 20;}
  while (n >= 10) {notes++; n -= 10;}

  return notes
}

//Day 361
function tidyNumber(n){
  let num = n.toString().split("").map(Number).join()
  
  return num === n.toString().split("").map(Number).sort().join()
}

//Day 362
//7 Thinkful - List and Loop Drills: Lists of lists
function processData(data){
  return data.map(el => el[0] - el[1]).reduce((a,b) => a*b,1)
}

//Day 363
//7 - three sticks
function maxlen(l1, l2) {
  let nums = [...arguments].sort((a,b) => a - b, 0)
  if (nums[0]*3 < nums[1]) {
    return nums[1]/3
  }
  if (nums[0]*2<nums[1]) {
    return nums[0]
  }
  return nums[1]/2
}

//Day 364
//7 - Who took the car key?
function whoTookTheCarKey(message) {
  let result = ""
  for (let i = 0; i < message.length; i++) {
    result += String.fromCharCode(parseInt(message[i], 2))
  }
  return result
}

//simplified with map method:
function whoTookTheCarKey(msg) {
  return msg.map(el => String.fromCharCode(parseInt(el, 2))).join("")
}

//Day 365
//7 - Is n divisible by (...) ?
function isDivisible(){
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[0] % arguments[i] !== 0) {
        return false
    }
  }
  return true
}

//simplified further
function isDivisible(n1, ...nRest){
  return nRest.every(el => n1 % el === 0)
}

//Day 366
//review
function isDivisible(n1, ...nRest){
  return nRest.every(el => n1 % el === 0)
}

//7 - Thinkful - Logic Drills: Umbrella
function takeUmbrella(weather, chance) {
  return weather === "rainy" ? true : weather === "cloudy" && chance > 0.2 ? true : weather  === "sunny" && chance > 0.5 ? true : false
}

//slightly cleaner:
function takeUmbrella(weather, chance) {
  return weather == 'rainy' ||  (weather == 'cloudy' && chance > 0.2) || (weather == 'sunny' && chance > 0.5)
}

//Day 367
//7 - The Office II - Boredom score
var boreScore = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  "pissing about": 25
}

function boredom(staff){
  let departments = Object.values(staff)
  let score = 0
  departments.forEach(el => score += boreScore[el])
  return score <= 80 ? 'kill me now' : score < 100 ? 'i can handle this' : 'party time!!'
}

//Day 368
//7 - this kata maker sucks ass; the logic of his word problems is incorrect.
function cookPancakes(n, m) { 
  const time = Math.ceil((n * 2) / m);
  return time === 1 ? 2 : time;
}

//Day 369
//7 - tiyFizzBuzz;  change a string's consonants & vowels
function tiyFizzBuzz(sentence){
  let consonantsUC = "BCDFGHJKLMNPQRSTVWXYZ"
  let vowelUC = "AEIOU"
  let vowelLC = "aeiou"
  let sent = sentence.split("")
  for (let i = 0; i < sent.length; i++) {
    if (consonantsUC.includes(sent[i])) {
      sent[i] = "Iron"
    }
    if (vowelUC.includes(sent[i])) {
      sent[i] = "Iron Yard"
    }
    if (vowelLC.includes(sent[i])) {
      sent[i] = "Yard"
    }
  }
  return sent.join("")
}

//Day 370
//7 - Suzuki; lining up his students
function lineupStudents(students){
  return students.split(" ").sort((a,b) => b.localeCompare(a)).sort((a,b) => b.length - a.length, 0)
}

//trimmed down a little:
//instead of two sort calls, both the length comparison and localeCompare happen in the same one

function lineupStudents(students){
  return students.split(" ").sort((a,b) => b.length - a.length || b.localeCompare(a))
}

//Day 371
// 6 - Help Suzuki purchase his Tofu
function buyTofu(cost,box){
  //count up your coins
  let arr = box.split(" ")
  let mon = arr.filter(el => el === "mon").length
  let monme = arr.filter(el => el === "monme").length
  
  //push what data you currently have to the result array, because mon & monme will be altered by the while statements below
  let result = [mon,monme,((monme*60) + mon)]

  //find out whether you have exact change & count the coins used
  let coinsUsed = 0
  
  //continually reduce the cost by 60, either using single monme coins, or many mon coins 
  //reducing the mon coins by 60 in one iteration rather than running the single-coin-while-loop 60 times
  while (cost >= 60) {
    monme >= 1 ? (monme -= 1, coinsUsed +=1) : (mon -= 60, coinsUsed += 60)
    cost -= 60
    if (mon < 0) {
      break
    }
  }
  
  //continually reduce the cost by 1, using mon coins, until you reduce the cost to 0 or run out of mon coins
  while (cost > 0) {
    mon >= 1 ? (mon -=1, coinsUsed +=1) : result = "leaving the market"
    cost -=1
  }
  
  //if you did not have enough coins, the result binding was changed from an array to a string
  result[3] = (coinsUsed)  //strings are immutable, so if result was changed from an array to a string in the last step, this will do nothing; otherwise it'll add the final thing we need
  
  return result
}
//!!!this fails if your cost is perfectly divisible by 60 & you don't have enough money!!!

//alternate; I seem to be overestimating the value of mine iterating the cost 60 at a time
//i ran a test where the cost was 73,000 and we only had 72,999 mon, meaning the below function iterated 72,999 times before failing.  Mine would run about 1/60th of that, but still seemed slower =/

function buyTofu(cost, box) {
  box = box.split(' ')
  let mon = box.filter(x => x == 'mon').length
  let monme = box.filter(x => x == 'monme').length
  
  let mon2 = mon, monme2 = monme, paidCoins = 0
  // Let's try paying with monme
  while (cost >= 60 && monme2) cost -= 60, monme2--, paidCoins++
  // Then let's try paying with mon
  while (cost && mon2) cost--, mon2--, paidCoins++
  // Can't pay?
  if (cost) return 'leaving the market'
  // Can pay?
  return [mon, monme, monme * 60 + mon, paidCoins]
}

//Day 372
//8 - Suzuki climbing stairs again
//given an array of arrays containing numbers, total all the numbers
function stairsIn20(s){
  return s.flat().reduce((a,b) => a+b,0) * 20
}

//Day 373
//7 - Find Min & Max
function getMinMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
}

//Day 374
//7 - 
function toLeetSpeak(str) {
  let word = str.split("")
  for (let i = 0; i < word.length; i++) {
    word[i] = alphabet[word[i]]
  }
  return word.join("")
}

//Could also have used the map method:
return str.split('').map(char => alpha[char] || char).join('');


//Day 375
//7 - transposing a song
function transpose(song, interval){
  var sharp = 'A,A#,B,C,C#,D,D#,E,F,F#,G,G#'.split(',');
  var flat  = 'A,Bb,B,C,Db,D,Eb,E,F,Gb,G,Ab'.split(',');
  return song.map(note => sharp[(Math.max(flat.indexOf(note), sharp.indexOf(note)) + interval + 12) % 12]);
}

//Day 376
//7 - Where's Wally
function wheresWally(string){
  return (" "+string).search(/ Wally\b/) 
}

//Day 377
//7 - Valid HK Phone Number
function isValidHKPhoneNumber(str) {
  return str == str.match(/\d\d\d\d\s\d\d\d\d/)
}
function hasValidHKPhoneNumber(str) { 
  return str.match(/\d\d\d\d\s\d\d\d\d/) ? true : false
}

//Day 378
//7 - volume of a cup
function cupVolume(d1, d2, h) {
  return +(h / 12 * Math.PI * (d1 ** 2 + d1 * d2 + d2 ** 2)).toFixed(2)
}

//Day 379
//7 - Hands up
function getPositions(n) {
  return [n%3, Math.floor(n/3) % 3, Math.floor(n/9) % 3]
}
//I tried to get clever with parseInt because the problem was basically just trinary, but it created more problems than I expected

//Day 380
//7 - Bit manipulation
function eliminateUnsetBits(number) {
  return parseInt(number.split("0").join(""), 2) || 0
}

//Day 381
//7 - Tail Swap
function tailSwap(arr) {
  let newArr = arr.map(string => string.split(':'))
  return [newArr[0][0]+':'+newArr[1][1], newArr[1][0]+':'+newArr[0][1]];
}

//Day 382
//7 - The mean of two means
function getMean(arr, x, y) {
  if (x <= 1 || y <= 1) {
    return -1
  }
  if (x > arr.length || y > arr.length) {
    return -1
  }
  let num1 = arr.slice(0,x).reduce((a,b) => a+b,0) / x
  let num2 = arr.slice(-y).reduce((a,b) => a+b,0) / y
  return (num1+num2)/2
}
//alternate
function getMean(arr, x, y) {
  x <= 1 || y <= 1 || x > arr.length || y > arr.length ? -1 : (arr.slice(0, x).reduce((pre, val) => pre + val) / x + arr.slice(-y).reduce((pre, val) => pre + val) / y) / 2;
}

//Day 383
//7 - Object Drills: Quarks
class Quark {
  constructor(color, flavor) {
    this.color = color;
    this.flavor = flavor;
  }
  baryon_number = 1/3
  interact(obj) {
    let newColor = obj.color
    obj.color = this.color
    this.color = newColor
  }
}

//alternate
class Quark {
  constructor(color, flavor) {
    this.color = color;
    this.flavor = flavor;
    this.baryon_number = 1/3
  }
  interact(obj) {
    [this.color, obj.color] = [obj.color, this.color]
  }
}

//Day 384
//review 7 - Find min and max
function getMinMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
}

//Day 385
//7 - NATO Phonetic Alphabet
function nato(word) {
	return word.split("").map(el => LETTERS[el.toUpperCase()]).join(" ")
}

//Day 386
//7 Selective fear of numbers
function AmIAfraid(day, num){
  switch(day) {
      case "Monday": return num === 12
      case "Tuesday": return num > 95
      case "Wednesday": return num === 34
      case "Thursday": return num === 0
      case "Friday": return num % 2 === 0
      case "Saturday": return num === 56
      case "Sunday": return Math.abs(num) === 666
  }
  return "invalid input"
}

//Day 387
//7 - Return substring instance count
function solution(fullText, searchText){
  return fullText.split(searchText).length -1
}

//Day 388
//7 - Tail Swap
function tailSwap(arr) {
  let result1 = arr[0].split(":")
  let result2 = arr[1].split(":")
  return [result1[0]+":"+result2[1], result2[0]+":"+result1[1]]
}

//Day 389
//7 - Reversed Message
function reverseMessage(str) {
  let splitWords = str.split(" ");
  let reversedWords = splitWords.map(el => el.split("").reverse().join("").toLowerCase())
  let reversedSentence = reversedWords.reverse().map(el => el.slice(0,1).toUpperCase() + el.slice(1))
  return reversedSentence.join(" ")
}

//Day 390
//review
class GbfCharMaker {
  constructor(name, race, element, ult) {
    this.name = name,
    this.race = race,
    this.element = element
    this.ult = ult
  }
  ultimate = function(ult) {
   return `Using ${this.ult}!`
  }
}

//7 - perfect squares, perfect fun
function squareIt(int) {
  let n = Math.sqrt(int.toString().length);
  if(!Number.isInteger(n)){
    return 'Not a perfect square!'
  } 
  else {
    return int.toString().split('').map((e,i) => (i+1) % n === 0 && i !== (n**2) - 1 ? `${e}\n` : e).join('');
  }
}

//Day 391
//7 - Number to Bytes
function toBytes (n) {
	const b = n.toString(2)
  const l = Math.max(Math.ceil(b.length / 8) * 8, 8)
  const fullB = b.padStart(l, 0)
  return fullB.match(/.{8}/g)
}

//Day 392
//7 - C.Wars
function initials(name){
  let nameArray = name.split(" ")
  nameArray = nameArray.map((el,i)=> i+1 === nameArray.length ? el[0].toUpperCase() + el.slice(1) : el[0].toUpperCase())
  return nameArray.join(".")
}

//Day 393
//7 - CryptAnalysis Word Patterns
function wordPattern(str) {
  let word = str.toLowerCase()
  let index = {}
  let counter = 1
  for (let letter of word) {
    if(!index[letter]) {
      index[letter] = counter
      counter++
    }
  }
  return word.split("").map(el => index[el] -1).join(".")
}

//alternate
function wordPattern(str) {
  let word = str.toLowerCase()
  let arr = [...new Set(word)]
  return word.split("").map(el=> arr.indexOf(el)).join(".")
}

//Day 394
//7 - Trimming a string
const trim = (str, size) => {
  if(str.length <= size) return str
  if(size <= 3)return str.slice(0,size) + '...'
  if(size > 3) return str.slice(0,size-3)+'...' 
}

//Day 395
//review: FizzBuzz
function fizzer(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz")
    }
    else if (i % 5 === 0) {
      console.log("Buzz")
    }
    else if (i % 3 === 0) {
      console.log("Fizz") 
    } else {console.log(i)}
  }
}

//Day 396
//review: Sort Numbers
function solution(nums){
  return nums ? nums.sort((a,b)=>a-b,0) : []
}

//Day 397
//8 - Training JS1
function helloWorld() {
  return "Hello World!"
}


//Day 398
//7 - All Star Code Challenge 3
function removeVowels(str){
  return str.replace(/[aeiou]/gi, "")
}

//Day 399
//7 - The old switcheroo
function vowel2index(str) {
  let result = str.split("")
  let vowels = "aeiouAEIOU".split("")
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(result[i])) {
      result[i] = i+1
    }
  }
  return result.join("")
}

//Day 400
//6 - Simple Fun 210
function maximizePoints(team1, team2) {
  var t1=team1.slice().sort((a,b)=>a-b);
  var t2=team2.slice().sort((a,b)=>a-b);
  for (var c=0,j=0,i=0;i<t1.length;i++,j++) if (t1[i]>t2[j]) c++; else j--; 
  return c
}

//Day 401
//6 Review
function maximizePoints(team1, team2) {
  let t1=team1.slice().sort((a,b)=>a-b)
  let t2=team2.slice().sort((a,b)=>a-b)
  let count = 0
  for (let j=0,i=0; i<t1.length; i++,j++) {
    if (t1[i] > t2[j]) {
      count++; 
    } 
    else j--
  }
  return count
}

//Day 402
function maximizePoints(team1, team2) {
  let t1 = team1.slice().sort((a,b)=> a-b,0)
  let t2 = team2.slice().sort((a,b)=> a-b,0)
  for (var c = 0, i = 0, j = 0; i < t1.length; i++,j++) if (t1[i] > t2[j]) c++; else j--;
  return c
}

//Day 403
//6 - The Lamp: Revisited
class Lamp {
  constructor(color, on) {
    this.color = color
    this.on = false
  }
  toggleSwitch() {
    this.on = !this.on
  }
  state() {
    return (this.on ? "The lamp is on." : "The lamp is off.")
  }
}

//Day 404
//6 - The Book of Mormon
function Mormons(startingNumber, reach, target) {
  let count = startingNumber
  for (var i = 0; count < target; i++) {
    count += (reach * count)
  }
  return i
}


//Day 405
//6 - The Deaf Rats of Hamelin
//revisit - Doesn't quite work
function countDeafRats(town) {
  let piperPosition = town.indexOf("P")
  let firstPart = town.slice(0,piperPosition)
  let secondPart = town.slice(piperPosition)
  let totalRats = town.split("O").length-1
  let rightRats = firstPart.split("~O").length-1
  let leftRats = secondPart.split("O~").length-1
  
  return totalRats - rightRats - leftRats
}

//split is not ideal because it can interpret 3 rats going one way as two rats going the other

//Day 406
//6 - Deaf Rats solved
function countDeafRats(town) {
  //remove spaces & split at Piper
  let townHalves = town.split(" ").join("").split("P") 
  //separate Piper's left and right side into arrays of elements 2 characters long
  let leftHalf = townHalves[0].match(/.{2}/g)
  let rightHalf = townHalves[1].match(/.{2}/g)
  
  //search the left half for rats going left, and the right half for rats going right (away from Piper)
  //the optional chaining operator (?) is to force it to evaluate as undefined instead of throwing an error if there is no right or left side, which will make it evaluate 0 due to `|| 0`
  return (leftHalf?.filter(el => el === "O~").length || 0) + (rightHalf?.filter(el => el === "~O").length || 0)
}

//Day 407
//review
function countLetters(str,letter) {
  return str.split(letter).length - 1
}

//Day 408
//6 - Max & min difference
//unfinished
function maxAndMin(arr1,arr2){
  let highest = Math.max(Math.max(...arr1), Math.max(...arr2))
  let lowest = Math.min(Math.min(...arr1), Math.min(...arr2))
  console.log(highest, lowest)
  let difference;
  
  return [highest-lowest, 0]
}

//Day 409
//revisit https://www.codewars.com/kata/583c5469977933319f000403/train/javascript
function maxAndMin(arr1,arr2){
  return [
    Math.max( ...arr1.map(n => Math.max( ...arr2.map(m => Math.abs(n - m)) )) ),
    Math.min( ...arr1.map(n => Math.min( ...arr2.map(m => Math.abs(n - m)) )) )
  ]
}
//nested maps... ugh, my brain.

//Day 410
//review
const square = (int) => int * int

function countTheThings(arr) {
  let counts = {}
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] ? counts[arr[i]]++ : counts[arr[i]] = 1
  }
  return counts
}

//Day 411
//review.  I think I understand, but don't think I'd have ever come up with this on my own.
function maxAndMin(arr1,arr2){
  return [
    Math.max(...arr1.map(n => Math.max(...arr2.map(m => Math.abs(n - m)) )) ),
    Math.min(...arr1.map(n => Math.min(...arr2.map(m => Math.abs(n - m)) )) )
  ]
}

//Day 412
//review
function repVowels(str) {
  let vowels = "aeiouAEIOU".split("")
  let result = str.split("")
  for (let i = 0; i < result.length; i++) {
    if (vowels.includes(result[i])) {
      result[i] = "!"
    }
  }
  return result.join("")
}

//7 - Elevator Distance
function elevatorDistance(arr) {
  let distance = 0
  for (let i = 0; i < arr.length-1; i++) {
    distance += Math.abs(arr[i] - arr[i+1])
  }
  return distance
}

//Day 413
//7 - Elapsed Seconds
function elapsedSeconds(startDate, endDate){
  return (endDate - startDate) / 1000
}

//review Class 26 - create a pizza object with 4 properties and 3 methods
//object literal notation:
let pizza = {}
pizza.size = "Large"
pizza.crust = "STUFFED"
pizza.bread = "regular"
pizza.cheese = "Double"
pizza.sauce = "Regular"
pizza.toppings = []
pizza.eat = function() {console.log()}

//shitty; have to copy paste to make multiple objects

//factory function:
let PizzaMake = function(size, crust, bread, sauce, toppings) {
  this.size = size;
  this.crust = crust;
  this.bread = bread;
  this.sauce = sauce;
  this.toppings = toppings
  this.expectedDeliveryTime = function() {
    return console.log("I have no idea")
  }
  this.price = function() {
    return `$${(size === "large" ? 10 : 5) + (crust === "stuffed" ? 2 : 1)}`
  }
}

//Day 414
//7 - Reverse the bits of an integer
function reverseBits(n) {
  return parseInt((n.toString(2).split("").reverse().join("")), 2)
}

//Day 415
//review - class

class PizzaMaker {
  constructor(size,crust,bread,sauce,toppings) {
    this.size = size;
    this.crust = crust;
    this.bread = bread;
    this.sauce = sauce;
    this.toppings = toppings;
  }
  expectedDeliveryTime() {
    return console.log("I have no idea")
  }
  price() {
    return `$${(this.size === "large" ? 10 : 5) + (this.crust === "stuffed" ? 2 : 1)}`
  }
}
//7 - Minimum Steps (Array Series #6)
function minimumSteps(numbers, target){
  let arr = numbers.sort((a,b)=> a-b,0)
  let sum = arr[0]
  let counter = 0
  for (let i = 1; sum < target; i++, counter++) {
    sum += arr[i]
  }
  return counter
}

//Day 416
//7 - 
function reverseIt(data) {
  if(typeof data == 'string') return data.split('').reverse().join('');
  if(typeof data == 'number') return parseFloat(String(data).split('').reverse().join(''));
  return data;
}

//Day 417 
//review
//constructor function
function gbfMake(name, race, element, ult) {
  this.name = name
  this.race = race
  this.element = element
  this.ultimate = function() {
    console.log(`Using ${ult}`)
  }
}
let siegfried01 = new gbfMake("Siegfreid", "Human", "Earth", "Iunno")

//Day 418
//7 - reverseIt
function reverseIt(data){
  if (typeof data === "string") {return data.split("").reverse().join("")}
  if (typeof data === "number") {return parseFloat(data.toString().split("").reverse().join(""))}
  return data
}

//Day 419
//7 - RuplesJS 3
String.prototype.eachChar = function(el) {
  if (typeof el === "string") {
    return this.split("").map(x => x+el).join("")
  }
  if (typeof el === "function") {
    return this.split("").map(el).join("")
  }
}

//Day 420
//7 - 
String.prototype.eachChar = function(el) {
  return typeof el === "string" ? this.split("").map(x => x+el).join("") : this.split("").map(el).join("")
}

//Day 421
//review - Internet is out.
function isItBroke(bin) {
  return bin ? "Fix it" : "Carry on."
}

//Day 422
//
// class Creature {
//   constructor(name,size,level,perception,visionType,abilityArray,hp,defenseArr,strideSpeed) {
//     this.name = name
//     this.level = level
//     this.size = size
//     this.perception = perception
//     this.visionType = visionType
//     this.abilityArray = abilityArray
//     this.hp = hp
//     this.ac = defenseArr[0]
//     this.fort = defenseArr[1]
//     this.rflx = defenseArr[2]
//     this.will = defenseArr[3]
//     this.strideSpeed = strideSpeed
    
//   }
// }
// class Monster extends Creature{
//   constructor(hp,ac,fort,reflex,will) {
//     super(level,hp,ac,fort,reflex,will,perception,strideSpeed)
//   }
// }
//dice rolls
function d4(num=1) {
  let total = []
  for (let i = 0; i < num; i++) {
    total.push(Math.floor((Math.random()*4)) + 1)
  }
  console.log(total)
  return total.reduce((a,b) => a+b,0)
}
function d6(num=1) {
  let total = []
  for (let i = 0; i < num; i++) {
    total.push(Math.floor((Math.random()*6)) + 1)
  }
  console.log(total)
  return total.reduce((a,b) => a+b,0)
}
function d8(num=1) {
  let total = []
  for (let i = 0; i < num; i++) {
    total.push(Math.floor((Math.random()*8)) + 1)
  }
  console.log(total)
  return total.reduce((a,b) => a+b,0)
}
function d10(num=1) {
  let total = []
  for (let i = 0; i < num; i++) {
    total.push(Math.floor((Math.random()*10)) + 1)
  }
  console.log(total)
  return total.reduce((a,b) => a+b,0)
}
function d12(num=1) {
  let total = []
  for (let i = 0; i < num; i++) {
    total.push(Math.floor((Math.random()*12)) + 1)
  }
  console.log(total)
  return total.reduce((a,b) => a+b,0)
}
function d20(num=1) {
  let total = []
  for (let i = 0; i < num; i++) {
    total.push(Math.floor((Math.random()*20)) + 1)
  }
  console.log(total)
  return total.reduce((a,b) => a+b,0)
}

//Day 423
//review - 7 - String eachChar
String.prototype.eachChar = function(char) {
  if (typeof char === "string")   { return this.split("").map(el => el+char).join("") }
  if (typeof char === "function") { return this.split("").map(char).join("") }
  return char
}

//Day 424
// class Troll extends Creature{
//   constructor(name,size,level,perception,visionType,abilityArray,hp,ac,fort,rflx,will,strideSpeed, languages,skills,regeneration,weaknesses) {
//     super(name,size,level,perception,visionType,abilityArray,hp,ac,fort,rflx,will,strideSpeed)
//     this.languages = [...languages]
//     this.skills = [...skills]
//     this.regeneration = regeneration
//     this.weaknesses = [...weaknesses]
//   }
// }

//Day 425
//7 - Convert the Score
function scoreboard(string) {
  let numbers = ["nil", "one", "two", "three", "four", "five","six","seven","eight","nine"]
  let sentence = string.split(" ")
  let score = []
  for (let i = 0; i < sentence.length; i++) {
    if (numbers.includes(sentence[i])) {
      score.push(sentence[i])
    }
  }
  return [numbers.indexOf(score[0]), numbers.indexOf(score[1])]
}

//Day 426
class Creature {
  constructor(type,size,level,perception,visionType,abilityArray,hp,defenseArr,strideSpeed,strikeAccuracyArr,strikeDamageArr) {
    this.type = type
    this.level = level
    this.size = size
    this.perception = perception
    this.visionType = visionType
    this.abilityArray = abilityArray
    this.hp = hp
    this.ac = defenseArr[0]
    this.fort = defenseArr[1]
    this.rflx = defenseArr[2]
    this.will = defenseArr[3]
    this.strideSpeed = strideSpeed 
    this.strikeAccuracyArr = strikeAccuracyArr
    this.strikeDamageArr = strikeDamageArr  //example - 2d10+5: [2, d10, 5]
  }
  strike = function(attackNumber) {
    //Attack Roll

    //Damage
    switch(this.strikeDamageArr[1]) {
      case "d4": return d4(this.strikeDamageArr[0]) + this.strikeDamageArr[2]
      case "d6": return d6(this.strikeDamageArr[0]) + this.strikeDamageArr[2]
      case "d8": return d8(this.strikeDamageArr[0]) + this.strikeDamageArr[2]
      case "d10": return d10(this.strikeDamageArr[0]) + this.strikeDamageArr[2]
      case "d12": return d12(this.strikeDamageArr[0]) + this.strikeDamageArr[2]
      default: return "Error"
    }
  }
}
class Monster extends Creature{
  constructor(type,size,level,perception,visionType,abilityArray,hp,defenseArr,strideSpeed,strikeAccuracyArr,strikeDamageArr,name,languageArr,skillArr,regeneration,weaknessArr,resistanceArr) {
    super(type,size,level,perception,visionType,abilityArray,hp,defenseArr,strideSpeed,strikeAccuracyArr,strikeDamageArr)
    this.name = name
    this.languageArr = languageArr
    this.skillArr = skillArr
    this.regeneration = regeneration
    this.weaknessArr = weaknessArr
    this.resistanceArr = resistanceArr
  }
}

//Day 427
//7 - reduce my fraction
function reduce(fraction) {
  let min = Math.min(...fraction)
  let highestCommonDenominator = 1
  for (let i = 1; i <= min; i++) {
    if (fraction[0] % i === 0 && fraction[1] % i === 0) {
      highestCommonDenominator = i
    }
  }
  return [fraction[0]/highestCommonDenominator, fraction[1]/highestCommonDenominator]
}

//Day 428
//rolling with advantage or disadvantage; advantage by default
function d20fortune(boolean=true) {
  let rolls = []
  for (let i = 0; i < 2; i++) {
    rolls.push(Math.floor((Math.random()*20)) + 1)
  }
  console.log(rolls)
  return boolean ? Math.max(...rolls) : Math.min(...rolls)
}

//Day 429
//review
function stringEdit(str) {
  return str.split(",").slice(1,-1).join(" ") || null
}
//7 - Find Factors Down to Limit
function factors(integer, limit){
  let result = []
  for (let i = integer; i >= limit; i--) {
    if (integer % i === 0) {
      result.push(i)
    }
  }
  return result.sort((a,b)=>a-b,0)
}

//Day 430
//review
function howManyDays(month) {
  var days
  switch(month) {
    case 4:
    case 6:
    case 9:
    case 11: days =  30; break;
    case 2: days =  28; break;
    default: days =  31; break;
  }
  return days
}

function addCommasToNumber(num) {
  return num.toLocaleString()
}

//Day 431
//Review - what are the 6 falsy values in JS?  False, undefined, null, NaN, 0, ""
//strike function:  no arguments = normal strike; true or false argument = fortune or misfortune, respectively
function strike(fortune) {
  let rolls = []
  for (let i = 0; i < 2; i++) {
    rolls.push(Math.floor((Math.random()*20)) + 1)
  }
  console.log(rolls)
  switch(fortune) {
    case true: return Math.max(...rolls)
    case false: return Math.min(...rolls)
    default: return rolls[0]
  }
}

//Day 432
//7 Color Association
function colourAssociation(array){
  return array.map((el) => ( { [el[0]] : el[1] } ) )
}

//Day 433
//7 - simple "fun" 399 - author's solution below
function makeSequences(n){
  let dp=[1,1]
  for(let i=2;i<=n;i++){
    dp.push(i%2 ? dp[i-1] : dp[i-1] + dp[i/2])
  }
  return dp[n]
}

//Day 434
function diff(str){
  var max = 0
  var ans = false
  for (let i = 0; i < str.length; i++) {
    var arr = str[i].split('-')
    if (max < Math.abs(arr[0]-arr[1])) {
      max = Math.abs(arr[0]-arr[1])
      ans = str[i]
    }
  }
  return ans
}

//Day 435
//8 - Flick Switch
function flickSwitch(arr){
  let result = []
  let status = true
  for (let i = 0; i < arr.length; i++) {
    arr[i] === "flick" ? (status = !status, result.push(status)) : result.push(status)
  }
  return result
}

//Day 436 
//8 - flick switch - 1 line attempt
function flickSwitch(arr){
  let status = true
  return arr.map(el=> el === "flick" ? status = !status : status)
}

//Day 437
//7 - Simple Fun 203
function strangeCoach(players) {
  var ans=[];
  for(var i=0;i<players.length;i++){
    if(players.filter(a=>a[0]==players[i][0]).length>=5){
      if(!ans.includes(players[i][0])){
        ans.push(players[i][0]);
      }
    }
  }
  return ans.sort().join('')||'forfeit';  
}

//Day 438
//7 - Thinkful - areacode extractor
function areaCode(text) {
  return text.split("\(")[1].split("\)")[0]
}
//ugly and not what i'd put in production, but it works lol
//much cleaner alternate:
function areaCode(text) {
  return text.slice(text.indexOf('(') + 1, text.indexOf(')'));
}
//both of these have the problem of "what if there's a parentheses other than the area code in the string?"  regex should probably be used


//treat wounds 
function treatWounds(dc=15,fortune=false,misfortune=false,) {
  let rolls = []
  for (let i = 0; i < 2; i++) {
    rolls.push(Math.floor((Math.random()*20)) + 1)
  }
  console.log(`D20 Rolls: ${rolls}`)
  let rollResult = fortune ? Math.max(...rolls) : misfortune ? Math.min(...rolls) : rolls[0]
  if (rollResult >= dc+10) {
    result = 4
  } else 
  if (rollResult >= dc){
    result = 3
  } else
  if (rollResult <= dc-10) {
    result = 1
  } else {
    result = 2
  }
  if (rollResult === 20) {result += 1} 
  if (rollResult === 1) {result -= 1}
  switch (result) {
    case 5 :
    case 4 : return `${rollResult}: You heal ${d8(4)} HP.`;
    case 3 : return `${rollResult}: You heal ${d8(2)} HP.`;
    case 2 : return `${rollResult}: Failure.`;
    case 0 :
    case 1 : return `${rollResult}: You take ${d8()} damage.`;
  }
}
//still needs a way to accept the character's modifier (medicine, nature, or crafting)

function d8(num=1) {
  let total = []
  for (let i = 0; i < num; i++) {
    total.push(Math.floor((Math.random()*8)) + 1)
  }
  console.log(`D8 rolls: ${total}`)
  return total.reduce((a,b) => a+b,0)
}

//Day 439
//areacode extractor 1-line
function areaCode(text) {
  return text.match(/\(\d\d\d\)/)[0].slice(1,4)
}

//Day 440
//eloquent javascript exercises: Chapter 4

function range(start,end, step=end<start?-1:1) {
  let result = []
  if (end < start) {
    for (let i = start; i >= end; i+= step) {
      result.push(i)
    }
  } else 
    for (let i = start; i <= end; i+= step) {
      result.push(i)
    }
  return result
}
function sum(numbers) {
  let total = 0
  for (let i = 0; i < numbers.length; i++) {
    total+= numbers[i]
  }
  return total
}

//Day 441
//Eloquent JS - reversing an array
function reverseArray(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.unshift(arr[i])
  }
  return result
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i]
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = temp
  }
  return arr
}

//Day 442
//Review: 3 ways to create functions in JS:

//function declaration
function thing() {
  return "DO the thing"
}
//function expression
let thing = function() {
  return "do the thing"
}

//fat arrow syntax
let thing = () => "Do the thing"


//Day 443
//7 - Triangular Numbers
function isTriangular(t) {
  return Math.sqrt(8*t + 1) % 1 == 0;
}

//Day 444
//7 - Even Odd Disparity
function solve(a){
  let countEven = 0
  let countOdd = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      countEven++
    }
    if (a[i] % 2 === 1) {
      countOdd++
    }
  }
  return countEven - countOdd
}

//Day 445
//7 - Santa's Naughty List
function findChildren(santasList, children) {
  return children.filter((el,i,arr) => santasList.includes(el) && arr.indexOf(el) === i).sort()
}

//Day 446
function sillycase(str) {
  let length = Math.ceil(str.length / 2)
  let result = []
  for (let i = 0; i < str.length; i++) {
    if (i < length) {
      result.push(str[i].toLowerCase()) 
    } else {
      result.push(str[i].toUpperCase())
    }
  }
  return result.join("")
}

//alternate
function sillycase(str) {
  let mid = Math.round(str.length / 2);
  return str.substr(0, mid).toLowerCase() + str.substr(mid).toUpperCase();
}

//Data 447
//7 - Find the lucky numbers
function filterLucky(arr) {
  return arr.filter((el) => el.toString().indexOf("7") !== -1)
}

//Day 448
//7 - Simple letter removal
function solve(str, num) {
  return str.split("").sort().slice(0, num).reduce((pre, val) => pre.replace(val, ``), str)
}

//Day 449
//7 - review from memory
//inserted a filter method at one point.  I might have been recalling a different problem.
function solve(str, num){
  return str.split("").sort().slice(0,num).reduce((prev,cur) => prev.replace(cur,""), str)
}

//Day 450
//review from memory
function solve(str, num){
  return str.split("").sort().slice(0,num).reduce((prev,curr) => prev.replace(curr, ""), str)
}

//Day 451
//7 - Odd Ones Out!
function oddOnesOut(numArr) {
  let counts = {}
  
  for (let el of numArr) {counts[el] ? counts[el]++ : counts[el] = 1}
  
  return numArr.filter(el => counts[el] % 2 === 0)
}

//Day 452
//7 - Is it a vowel in this position?
function checkVowel(string, position) {
  let vowels = "aeiouAEIOU".split("")
  return vowels.includes(string[position])
}

//Day 453
//8 - Merging sorted integer arrays
function mergeArrays(a, b) {
  return Array.from(new Set(a.concat(b))).sort((a,b) => a-b)
}

//Day 454
//8 - Quadratic coefficients solver; aka poorly explained word problem
function quadratic(x1, x2){
  return [1, -(x2 + x1), (x1 * x2)]
}

//Day 455
//7 - review - simple letter removal
function solve(str, num){
  return str.split("").sort().slice(0,num).reduce((prev,curr) => prev.replace(curr, ""), str)
}

//Day 456
//8 - Cascading Subsets
function eachCons(arr, num) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(i,i+num).length === num) {
      result.push(arr.slice(i,i+num))
    }
  }
	return result
}

//Day 457
//review
function Heading(props) {
  return <h1>{props.title}</h1>
}

//Day 458
//8 - Geometry Basics
function circleCircumference(circle) {
  return Math.PI * (circle.radius) * 2
}

//Day 459
//8 - Arguments to Binary addition
function arr2bin(arr){
  return arr.map(el => typeof(el) === "number" ? el : 0).reduce((prev,curr) => prev + curr, 0).toString(2)
}

//can make it slightly shorter by putting the map ternary inside the reduce:

function arr2bin(arr){
  return arr.reduce((prev,curr) => prev + (typeof curr === "number" ? curr : 0), 0).toString(2)
}

//Day 460
//8 - Pole Vault
function startingMark(bodyHeight){
  // Remember: Body height of 1.52 m --> starting mark: 9.45 m
  //           Body height of 1.83 m --> starting mark: 10.67 m
  var m = (10.67 - 9.45) / (1.83 - 1.52);
  return Math.round((10.67 + m * bodyHeight - m * 1.83) * 100) / 100;
}

//Day 461
//review - 7 - Simple letter removal
function solve(str, num){
  return str.split("").sort().slice(0,num).reduce((prev,curr) => prev.replace(curr, ""), str)
}

//Day 462
//8 - Circular Objects
let circular = {}
circular.value = "Hello World"
circular.self  = circular

//Day 463
//7 - Array Mash
function arrayMash (array1, array2) {
  let result = []
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i]);
    result.push(array2[i]);
  }
  return result
}

//Day 464
//7 - Count salutes
function countSalutes(hallway) {
  let right = 0;
  let salutes = 0;
  for (let el of hallway) {
    if (el === '>') right += 1
    else if (el === '<') salutes += right
  }
  return 2 * salutes;
}

//Day 465
//7 - sort a deck of cards - custom sort - revisit
function sortCards(arr){
	let ideal = "A23456789TJQK";
	return arr.sort((a,b) => ideal.indexOf(a) - ideal.indexOf(b))
}

//Day 466
//reviewing custom sorts
function sortCards(arr){
  let desiredSort = "A23456789TJQK"
  return arr.sort((a,b) => desiredSort.indexOf(a) - desiredSort.indexOf(b))
} 

//Day 467
//review
function customSort(arr) {
  let desiredSort = "BLAHFRG"
  return arr.sort((a,b) => desiredSort.indexOf(a) - desiredSort.indexOf(b))
}

function solve(str, num){
  return str.split("").sort().slice(0,num).reduce((prev,curr) => prev.replace(curr,""), str)
}

//Day 468
//7 - Sort the climbing grades
function sortGrades(arr){
  let desiredSort = "VBV0V0+V1V2V3V4V5V6V7V8V9V10V11V12V13V14V15V16V17"
  return arr.sort((a,b) => desiredSort.indexOf(a) - desiredSort.indexOf(b))
}

//can also be done with an array
function sortGrades(lst){
  const grades = ["VB", "V0", "V0+", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13", "V14", "V15", "V16", "V17"];
  return lst.sort((a, b) => grades.indexOf(a) - grades.indexOf(b));
}

//Day 469
//review
class GBFMaker {
  constructor(name, race, gender, element, ultName) {
    this.name = name
    this.race = race
    this.gender = gender
    this.element = element
    this.ultName = ultName
  }
  ult() {
    console.log(`Using ${this.ultName}`)
  }
}

//Day 470
//7 - Sort by Example
function exampleSort(arr,exampleArr){
  return arr.sort((a,b) => exampleArr.indexOf(a) - exampleArr.indexOf(b))
}

//Day 471
//7 - sorted list of objects
function sortList (sortBy, list) {
  return list.sort((a, b) => a[sortBy] < b[sortBy])
}

//Day 472
//review
function sortList (sortBy, list) {
  return list.sort((a,b) => a[sortBy] < b[sortBy])
}

//Day 473
//7 - String Scramble
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

//Day 474
//review
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

//Day 475
//7 - String reversing, changing caase, etc
function reverseAndMirror(s1,s2) {
  let str2 = s2.split("").reverse().map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join("")
  
  let str1a = s1.split("").reverse().map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join("")
  let str1b = s1.split("").map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join("")
  
  return str2 + "@@@" + str1a+str1b
}

//Day 476
//review
function solve(str, num){
  return str.split("").sort().slice(0,num).reduce((prev,curr) => prev.replace(curr,""), str)
}
//review - 7 - String scramble
//P - string & array of integers; they will be valid and of equal length
//R - string in a different order; each letter will be in a new position indicated by the number in the array.
//E - abcd, [0,3,1,2] --> acdb  | first letter will go to first number's index (a - 0), 2nd letter to 2nd number (b - 3), etc
//P - 
function scramble(str, arr) {
  // create an empty array that will later house the new string's elements in the correct order (we'll join it at the end)
  let result = []
  //for loop that assigns the letters from the original string into the new array at a specific position determined by the given array
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

//Day 477
//7 - Sum of integers in string
function sumOfIntegersInString(s){ 
  return s.match(/\d+/g) === null ? 0 : s.match(/\d+/g).map(Number).reduce((a,b) => a+b,0)
}

//instead of using Map to make them numbers, you could do that within the reduce by using "+"
function sumOfIntegersInString(s){ 
  return s.match(/\d+/g) === null ? 0 : s.match(/\d+/g).reduce((a,b) => a + +b, 0)
}

//can use an OR operator to get rid of the ternary
function sumOfIntegersInString(s){ 
  return (s.match(/\d+/g) || []).reduce((a,b) => a + +b, 0)
}

//Day 478
//review - string scramble (https://www.codewars.com/kata/5822d89270ca28c85c0000f3/train/javascript)
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

//Day 479
//7 - Smallest value of an array
function min(arr, toReturn) {
  let minNum = Math.min(...arr)
  return toReturn === "value" ? minNum : arr.indexOf(minNum)
}

//Day 480
//7 - Mysterioius Singularity Numbers (and a waste of time)
function realNumbers(n){
  let result = []
  for (let i = 1; i <= n; i++) {
    if (i % 2 && i % 3 && i % 5) {
      result.push(i)
    }
  }
  return result.length
}

//yet another poorly worded math problem, but this one has performance restraints because some of its arguments are insanely large numbers
// "correct" answer:
function realNumbers(n) {
  return n - ~~(n/2) - ~~(n/3) - ~~(n/5) + ~~(n/6) + ~~(n/10) + ~~(n/15) - ~~(n/30);
}

//Day 481
//review
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

//Day 482
function smallestInteger(matrix) {
  let thing = matrix.flat().sort()
  for (let i = 0; i < 100; i++) {
    if (!thing.includes(i)) {
      return i
    }
  }
}

//Day 483
//7 - "graceful" tipping
function gracefulTipping(bill) {
  const withRawTip = bill * 1.15;
  const multiple = Math.ceil(5 * Math.pow(10, Math.floor(Math.log10(withRawTip)) - 1));
  return Math.ceil(withRawTip / multiple) * multiple;
}

//Day 484
//review
class GBFMAKER {
  constructor(name, race, element, ultName) {
    this.name = name
    this.race = race
    this.element = element
    this.ultName = ultName
  }
  ult() {
    console.log(`Using ${this.ultName}`)
  }
}
//API basics
import express from "Express"
const App = express()
App.listen(PORT, optionalCallback)
App.get("/api", reqResCallback)

//Day 485
//review
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

//Day 486
//7 - Distance from the average
function distancesFromAverage(arr){
  let avg = arr.reduce((a,b) => a+b,0) / arr.length
  let deviations = arr.map(el => +(avg - el).toFixed(2))
  return deviations
}

//Day 487
//review
function solve(str, num){
  let toBeRemoved = str.split("").sort().slice(0,num)
  return toBeRemoved.reduce((prev,curr) => prev.replace(curr,""), str)
}

//Day 488
//review
function strCheck(str1,str2) {
  return str.split(str2).length -1
}

//Day 489
//7 - Schedule your Da(rr)ay
function dayPlan (hours, tasks, duration){
  let timeLimit = 60 * hours
  let breakTime = timeLimit - (tasks * duration)
  let breakDuration = Math.round(breakTime / (tasks -1))
  let schedule = []
  for (let i = 1; i <= (tasks * 2 -1); i++) {
    if (i % 2 === 1) {
      schedule.push(duration)
    } else {
      schedule.push(breakDuration)
    }
  }
  return breakTime >= 0 ? schedule : "You're not sleeping tonight!"
}

//Day 490
//review - String Scramble
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

//condensed version using .map()

function scramble(str, arr) {
  return arr.map((el,i) => str[arr.indexOf(i)]).join("")
}

//Day 491
class GBFCM {
  constructor(name, race, ultName) {
    this.name = name
    this.race = race
    this.ultName = ultName
  }
  ult() {
    return `Using ${ultName}!`
  }
}

//Day 492
//review
function arrCount(arr) {
  let counts = {}
  for (let el of arr) {
    counts[el] = (counts[el] || 0) +1
  }
  return counts
}

//Day 493
//review
function GBFM(name, race, ultName) {
  this.name = name
  this.race = race
  this.ultName = ultName
  this.ult = function() {
    return `Using ${ultName}`
  }
}

//Day 494
//7 - Quicksum
function quicksum(packet){
  if (/[^A-Z\s]/g.test(packet)) return 0
  let reference = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  return packet.split("").map((el,i) => reference.includes(el) ? (reference.indexOf(el) * (i+1)) : 0).reduce((a,b) => a+b,0)
}

//Day 495
//7 - Calculaate mean and concatenate string
function mean(lst){
  let numbers = lst.filter(el => el.toUpperCase() === el.toLowerCase())
  let letters = lst.filter(el => el.toUpperCase() !== el.toLowerCase())
  let avg = numbers.reduce((a,b) => a + +b, 0) / 10
  
  return [avg, letters.join("")]
}

//Day 496
//review
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

//Day 497
//Calculate Meal Total
function calculate_total(subtotal, tax, tip) {
  return +(subtotal + (subtotal * (tax/100)) + (subtotal * (tip/100))).toFixed(2)
}

//Day 498
//review
function clipStr(str) {
  return str.split(",").slice(1,-1).join(" ") || null
}

//Day 499
//review
class GBFM {
  constructor(name, race, element, ultName) {
    this.name = name
    this.race = race
    this.element = element
    this.ultName = ultName
  }
  ult() {
    return `Using ${this.ultName}`
  }
  intro() {
    return `My name is ${this.name}.  You killed my father.  Prepare to die.`
  }
}

//Day 500
//review - simple letter removal
function solve(str, num){
  let removed = str.split("").sort().slice(0,num)
  return removed.reduce((prev,curr) => prev.replace(curr,""), str)
}

//Day 501
function holiday() {
  if (dec25 === true) {
    return "Merry Christmas!"
  } else {
    return "Just another day."
  }
}

//Day 502
//review
function customSort(arr) {
  let desiredSort = "QWERTYUIOP"
  return arr.sort((a,b) => desiredSort.indexOf(a) - desiredSort.indexOf(b))
}

//Day 503
//review
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

//Day 504
//review - 3 ways to make objects

//object literal notation
let obje = {}
obje.prop = "X"
//constructor function
function objMaker(a,b,c) {
  this.a = a
  this.b = b
  this.c = function() {
    return c
  }
}
//classes
class ObjMaker {
  constuctor(a,b,c) {
    this.a = a
    this.b = b
    this.c = c
  }
  doTheThing() {
    return "THE THING"
  }
}

//Day 505
//7 - Functional Addition
function add(n) {
  return function (x) {
    return n+x
  }
}

//Day 506
//Find the volume of a cone
function volume(r,h) {
  return Math.floor(Math.PI * r * r * h / 3)
}

//Day 507
//7 - Formatting decimal places
function twoDecimalPlaces(number) {
  return number > 0 ? Math.floor(number * 100) / 100 : Math.ceil(number * 100) / 100
}
//alternate
function twoDecimalPlaces(number) {
  return Math.trunc(number*100)/100
}

//Day 508
class characterMaker {
  constructor(name, race, gender, element, ultName) {
    this.name = name
    this.race = race
    this.gender = gender
    this.element = element
    this.ultName = ultName
  };
  ult() {
    console.log(`Using ${this.ultName}`)
  };
}

//Day 509
//7 - Count the Digit
function nbDig(upperLimit, searchDigit) {
  let result = []
  for (let i = 0; i <= upperLimit; i++) {
    result.push(i*i)
  }
  result = result.map(el => el.toString().split("")).flat().map(Number)
  let count = 0
  for (let el of result) {
    if (el === searchDigit) {
      count++
    }
  }
  return count
}

//Day 510
//review fat arrow syntax
const basic = () => "Hello"  //no parameters necessary, but you'd still need a (); no 'return' or curly brackets necessary because it's a 1-liner
const medium = el => `Hello, ${el}`  //if there's a single parameter, you don't need ()
const moderate = (el1, el2) => `${el1} says ${el2}`  //with multiple parameters, you need () again

//Day 511
//discovery - array.at()
let index = 3
let arrExample = [2,4,6,8]
console.log(arrExample.at(index))  //should produce 8
//can replace arr[arr.length -1] to get the final element: arr.at(-1)

//Day 512
//review - String Scramble
//P- string & array;  R- string; E- "abcd", [0,3,1,2];
function scram(str, arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

// result[0] = str[0]
// result[1] = str[2]
// result[2] = str[3]
// result[3] = str[1]

//Day 513
//7 - Odd-Even string sort
function sortMyString(S) {
  let odds = []
  let evens = []
  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) {
      evens.push(S.split("")[i])
    } else {
      odds.push(S.split("")[i])
    }
  }
  return `${evens.join("")} ${odds.join("")}`
}

//Day 514
//alternate 7 
function sortMyString(S) {
  let evens = S.split("").filter((el,i) => i % 2 === 0).join("")
  let odds = S.split("").filter((el,i) => i % 2 === 1).join("")
  return evens + " " + odds
}

//Day 515
//7 - Strong Number
function strong(n) {
  let str = n.toString().split("").map(el => factorialize(+el)).reduce((a,b) => a+b,0)
  return str === n ? "STRONG!!!!" : "Not Strong !!"
}

function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}

//Day 516
//7 - Disarium Number
function disariumNumber(n){
  let num = n.toString().split("").map((el, i) => Math.pow(+el, i+1)).reduce((a,b) => a+b, 0)
  return num === n ? "Disarium !!" : "Not !!"
}

//an alternate without .map() 
function disariumNumber(n){
  let num = n.toString().split("").reduce((prev, curr, i) => prev + Math.pow(curr, i+1), 0)
  return num === n ? "Disarium !!" : "Not !!"
}

//Day 517
//review
function solve(str, num){
  let letters = str.split("").sort().slice(0,num)
  return letters.reduce((prev,curr) => prev.replace(curr, ""), str)
}

//Day 518
//review
class MakeAThing {
  constuctor(name, race, element, ultName) {
    this.name = name
    this.race = race
    this.element = element
  }
  ult() {
    return `${this.ultName}!!`
  }
}

//Day 519
//7 - jumping number
function jumpingNumber(n){
  let arr = n.toString().split('')
  for(i = 0; i < arr.length-1; i++){
    if(Math.abs(arr[i] - arr[i+1]) !== 1 ){
      return 'Not!!'
    }
  }
  return 'Jumping!!'
}

//Day 520
//review
function jumpingNumber(n){
  let arr = n.toString().split("")
  for (let i = 0; i < arr.length-1; i++) {
    if (Math.abs(arr[i] - arr[i+1]) !== 1) {
      return "Not!!"
    }
  }
  return "Jumping!!"
}

//Day 521
//7 - Special Number
function specialNumber(n){
  let num = n.toString().split("")
  return num.some(el => +el > 5) ? "NOT!!" : "Special!!"
}

//Day 522
//alternate Special Number
function specialNumber(n){
  return /[6-9]/.test(n) ? "NOT!!" : "Special!!"
}

//Day 523
//review - String Scramble
function scramble(string, array) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result[array[i]] = string[i]
  }
  return result.join("")
}

//Day 524
//7 - Automorphic Number
//attempt 1
function automorphic(number){
  let numberString = number.toString()
  let numberSquared = number * number
  return +numberSquared.toString().split("").slice(-numberString.length).join("") === number ? "Automorphic" : "Not!!"
}

//cleaned up a little bit
function automorphic(number){
  let numberLength = number.toString().length
  let numberSquaredLastDigits = (number * number).toString().slice(-numberLength)
  return numberSquaredLastDigits == number ? "Automorphic" : "Not!!"
}

//stupid one liner using shit I didn't know existed:
function automorphic(number){
  return String(number * number).endsWith(String(number)) ? "Automorphic" : "Not!!"
}

//one liner that's further cleaned up
function automorphic(number){
  return `${number * number}`.endsWith(number) ? `Automorphic` : `Not!!`
}

//Day 525
//7 - Extra Perfect Numbers
function extraPerfect(number){
  let result = []
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 1) {
      result.push(i)
    }
  }
  return result
}

//Day 526
//6 - Sum of Two Integers (Challenge:  Simply add two numbers, but you can't use + or -)
//waste of time; I thought this would be a fun exploration of methods I was unaware of.  It's just a math problem using bitwise operators instead of the normal, logical ones
const add = (x,y) => y ? add(x^y,(x&y)<<1) : x;

//Day 527
//review
function automorphic(number) {
  return `${number*number}`.endsWith(number) ? "Automorphic" : "Not!!"
}
function customSort(array) {
  let desiredSort = '23456789TJQKA'
  return array.sort((a,b) => desiredSort.indexOf(a) - desiredSort.indexOf(b))
}

//Day 528
function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz")
    } else
    if (i % 5 === 0) {
      console.log("Buzz")
    } else
    if (i % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
}

//Day 529
//review
class granBlueCharMaker {
  constructor(name, race, element, ultName) {
    this.name = name
    this.race = race
    this.element = element
    this.ultName = ultName
  }
  ult() {
    console.log(`${this.ultName}!`)
  }
}

//Day 530
function numberTester(number) {
  return `${number * number}`.endsWith(number)
}

//Day 531
//review
function convertNumberToString(number) {
  return number.toLocaleString()
}
function convertStringIntegersToNumbers(array) {
  return array.map(Number)
}

//Day 532
//6 - Primorial of a Number

//first determine prime numbers
function isPrime(num) {
  for(var i = 2; i < num; i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}
//then add the prime numbers to an array until you have n amount of them
function numPrimorial(n){
  let arr = []
  let i = 2
  while(arr.length < n){
    if(isPrime(i)){
      arr.push(i)
    }
   i++
  }
  return arr.reduce((a,b) => a * b)
}

//Day 533
//7 - Simple string characters
function solve(string) {
  let result = [0, 0, 0, 0];
  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      result[0]++; // Uppercase Letters
    } else if (charCode >= 97 && charCode <= 122) {
      result[1]++; // Lowercase Letters
    } else if (charCode >= 48 && charCode <= 57) {
      result[2]++; // Numbers
    } else {
      result[3]++; // Special Characters
    }
  }
  return result;
};

//ChatGPT supplied me with Javascript's order of characters:  'lexicographical order based on UTF-16 codes'
// If you want to use any of these with, for example, String.fromCharCode, increase the number you use by one.  For example, String.fromCharCode(33) will yield a !, not 32
// Basically, fromCharCode does not use the INDEX of what you're looking for, it uses normal human counting.
// 0:   NUL   (Null)
// 1:   SOH   (Start of Heading)
// 2:   STX   (Start of Text)
// 3:   ETX   (End of Text)
// 4:   EOT   (End of Transmission)
// 5:   ENQ   (Enquiry)
// 6:   ACK   (Acknowledgment)
// 7:   BEL   (Bell)
// 8:   BS    (Backspace)
// 9:   HT    (Horizontal Tab)
// 10:  LF    (Line Feed)
// 11:  VT    (Vertical Tab)
// 12:  FF    (Form Feed)
// 13:  CR    (Carriage Return)
// 14:  SO    (Shift Out)
// 15:  SI    (Shift In)
// 16:  DLE   (Data Link Escape)
// 17:  DC1   (Device Control 1)
// 18:  DC2   (Device Control 2)
// 19:  DC3   (Device Control 3)
// 20:  DC4   (Device Control 4)
// 21:  NAK   (Negative Acknowledgment)
// 22:  SYN   (Synchronous Idle)
// 23:  ETB   (End of Transmission Block)
// 24:  CAN   (Cancel)
// 25:  EM    (End of Medium)
// 26:  SUB   (Substitute)
// 27:  ESC   (Escape)
// 28:  FS    (File Separator)
// 29:  GS    (Group Separator)
// 30:  RS    (Record Separator)
// 31:  US    (Unit Separator)
// 32:  !    (Exclamation Mark)
// 33:  "    (Quotation Mark)
// 34:  #    (Number Sign)
// 35:  $    (Dollar Sign)
// 36:  %    (Percent Sign)
// 37:  &    (Ampersand)
// 38:  '    (Apostrophe)
// 39:  (    (Left Parenthesis)
// 40:  )    (Right Parenthesis)
// 41:  *    (Asterisk)
// 42:  +    (Plus Sign)
// 43:  ,    (Comma)
// 44:  -    (Hyphen-Minus)
// 45:  .    (Full Stop)
// 46:  /    (Solidus)
// 47:  0    (Digit Zero)
// 48:  1    (Digit One)
// 49:  2    (Digit Two)
// 50:  3    (Digit Three)
// 51:  4    (Digit Four)
// 52:  5    (Digit Five)
// 53:  6    (Digit Six)
// 54:  7    (Digit Seven)
// 55:  8    (Digit Eight)
// 56:  9    (Digit Nine)
// 57:  :    (Colon)
// 58:  ;    (Semicolon)
// 59:  <    (Less-Than Sign)
// 60:  =    (Equals Sign)
// 61:  >    (Greater-Than Sign)
// 62:  ?    (Question Mark)
// 63:  @    (Commercial At)
// 64:  A    (Uppercase Letter A)
// 65:  B    (Uppercase Letter B)
// 66:  C    (Uppercase Letter C)
// 67:  D    (Uppercase Letter D)
// 68:  E    (Uppercase Letter E)
// 69:  F    (Uppercase Letter F)
// 70:  G    (Uppercase Letter G)
// 71:  H    (Uppercase Letter H)
// 72:  I    (Uppercase Letter I)
// 73:  J    (Uppercase Letter J)
// 74:  K    (Uppercase Letter K)
// 75:  L    (Uppercase Letter L)
// 76:  M    (Uppercase Letter M)
// 77:  N    (Uppercase Letter N)
// 78:  O    (Uppercase Letter O)
// 79:  P    (Uppercase Letter P)
// 80:  Q    (Uppercase Letter Q)
// 81:  R    (Uppercase Letter R)
// 82:  S    (Uppercase Letter S)
// 83:  T    (Uppercase Letter T)
// 84:  U    (Uppercase Letter U)
// 85:  V    (Uppercase Letter V)
// 86:  W    (Uppercase Letter W)
// 87:  X    (Uppercase Letter X)
// 88:  Y    (Uppercase Letter Y)
// 89:  Z    (Uppercase Letter Z)
// 90:  [    (Left Square Bracket)
// 91:  \    (Reverse Solidus)
// 92:  ]    (Right Square Bracket)
// 93:  ^    (Circumflex Accent)
// 94:  _    (Low Line)
// 95:  `    (Grave Accent)
// 96:  a    (Lowercase Letter a)
// 97:  b    (Lowercase Letter b)
// 98:  c    (Lowercase Letter c)
// 99:  d    (Lowercase Letter d)
// 100: e    (Lowercase Letter e)
// 101: f    (Lowercase Letter f)
// 102: g    (Lowercase Letter g)
// 103: h    (Lowercase Letter h)
// 104: i    (Lowercase Letter i)
// 105: j    (Lowercase Letter j)
// 106: k    (Lowercase Letter k)
// 107: l    (Lowercase Letter l)
// 108: m    (Lowercase Letter m)
// 109: n    (Lowercase Letter n)
// 110: o    (Lowercase Letter o)
// 111: p    (Lowercase Letter p)
// 112: q    (Lowercase Letter q)
// 113: r    (Lowercase Letter r)
// 114: s    (Lowercase Letter s)
// 115: t    (Lowercase Letter t)
// 116: u    (Lowercase Letter u)
// 117: v    (Lowercase Letter v)
// 118: w    (Lowercase Letter w)
// 119: x    (Lowercase Letter x)
// 120: y    (Lowercase Letter y)
// 121: z    (Lowercase Letter z)
// 122: {    (Left Curly Bracket)
// 123: |    (Vertical Line)
// 124: }    (Right Curly Bracket)
// 125: ~    (Tilde)

//Day 534
//review
function disemVowel(str) {
  return str.replace(/[aeiou]/gi, "")
}
//7 - Char Code Calculation
function calc(string){
  let total1 = ""
  for (let i = 0; i < string.length; i++) {
    total1 += string.charCodeAt(i)
  }
  let total2 = total1.replace(/7/g, '1')
  
  return total1.split("").map(Number).reduce((a,b) => a+b,0) - total2.split("").map(Number).reduce((a,b) => a+b,0)
}

//Day 535
//7 - Debug sum of digits of a number

//before
function getSumOfDigits(integer) {
  var sum = null;
  var digits =  Math.floor(integer).toString();
  for(var ix = 1; ix < digits.length; ix = sum + 1) {
    sum =+ digits[ix + 1];
  }
  return sum;
}
//after
function getSumOfDigits(integer) {
  var sum = 0
  var digits =  integer.toString();
  for(var i = 0; i < digits.length; i++) {
    sum += +digits[i]
  }
  return sum
}

//Day 536
//7 - Indexed Capitalization
function capitalize(str,arr){
  let string = str.split("")
  for (let i = 0; i < arr.length; i++) {
    string[arr[i]] = string[arr[i]] ? string[arr[i]].toUpperCase() : null
  }
  return string.join("")
}

//Day 537
//7 - Building blocks
class Block{
  constructor(dataArray){
    this.width = dataArray[0]
    this.length = dataArray[1]
    this.height = dataArray[2]
  }
  getWidth() {
    return this.width
  }
  getLength() {
    return this.length
  }
  getHeight() {
    return this.height
  }
  getVolume() {
    return this.width * this.length * this.height
  }
  getSurfaceArea() {
    return (this.length * this.width * 2) + (this.length * this.height * 2) + (this.width * this.height * 2)
  }
}

//Day 538
//review - I hate this one so much
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < str.length; i++) {
   result[arr[i]] = str[i]
  }
  return result.join("")
}

//Day 539
//review
class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}


//Day 540
//review
function solve(str, num){
  let toBeRemoved = str.split("").sort().slice(0,num)
  return toBeRemoved.reduce((prev,curr) => prev.replace(curr, ""), str)
}

//Day 541
//7 - Array Leaders
function arrayLeaders(numbers){
  let result = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers.slice(i+1).reduce((a,b) => a+b,0)) {
      result.push(numbers[i])
    }
  }
  return result
}

//Day 542
//review
class gbfCharMake {
  constructor(name, race, element, ultName) {
    this.name = name
    this.race = race
    this.eleement = element
    this.ultName = ultName
  }
  ult() {
    return `${this.ultName}!`
  }
}

//Day 543
//review
function customSort(arr) {
  let mySort = "23456789TJQKA"
  return arr.sort((a,b) => mySort.indexOf(a) - mySort.indexOf(b))
}

//damage roll for combat tracker
function damageRoll(arr) {  //format for array is: [numberOfDamageDice, sizeOfDamageDice, flatDamageBonus, damageType]
  let result = []
  for (let i = 0; i < arr[0]; i++) {
    result.push(Math.floor((Math.random() * arr[1]) + 1))
  }
  console.log(`${arr[0]}d${arr[1]}+${arr[2]}:`, result)
  return result.reduce((a,b) => a+b, arr[2]) + ` (${arr[3]})`
}

//Day 544
//7 - Digital Cypher
function encode(str, num){
  let numberResult = []
  let stringNumArr = num.toString().split("")
  let length = num.toString().length
  
  for (let i = 0; i < str.length; i++) {
    numberResult.push(str.charCodeAt(i) -96 + parseInt(stringNumArr[i%length], 10))
  }
  
  return numberResult
}

//simplified a bit with map:

function encode(str, num) {
	var numString = num.toString()
  return str.split("").map((el, i) => el.charCodeAt(0) - 96 + +numString[i % numString.length])
}

//Day 545
//7 Number to letters
//too lazy to type out the object, so I'll let a loop do it for me
let alphabet545a = " ?!abcdefghijklmnopqrstuvwxyz".split("")
let cipher545a = {}
for (let i = 29, j = 0; i > 0; i--, j++) {
  cipher[i] = alphabet[j]
}
function switcher(arr){
  return arr.map(el => cipher[el]).join("")
}

//console logging the result of the above loop means I don't have to type that shit myself AND I can get rid of the loop so it doesn't fire every time the function is used.  win-win
let alphabet545b = " ?!abcdefghijklmnopqrstuvwxyz".split("")
let cipher545b = {
  '1': 'z',
  '2': 'y',
  '3': 'x',
  '4': 'w',
  '5': 'v',
  '6': 'u',
  '7': 't',
  '8': 's',
  '9': 'r',
  '10': 'q',
  '11': 'p',
  '12': 'o',
  '13': 'n',
  '14': 'm',
  '15': 'l',
  '16': 'k',
  '17': 'j',
  '18': 'i',
  '19': 'h',
  '20': 'g',
  '21': 'f',
  '22': 'e',
  '23': 'd',
  '24': 'c',
  '25': 'b',
  '26': 'a',
  '27': '!',
  '28': '?',
  '29': ' '
}
function switcher(arr){
  return arr.map(el => cipher[el]).join("")
}

//cleaned up even more; object not necessary; reverse the alphabet string
const alpha545c = ' zyxwvutsrqponmlkjihgfedcba!? '
function switcher (arr) {
  return arr.map(item => alpha[item]).join('')
}

//Day 546
//7 - Coding Meetup 5 
function countLanguages(arr) {
  let result = {}
  for (let el of arr) {
    result[el.language] = (result[el.language] || 0 ) + 1
  }
  return result
}

//Day 547
//review
class Animal547 {
  constructor(name) {
    this.name=name
  }
}
class Dog547 extends Animal547 {
  constructor(name, breed) {
    super(name)
    this.breed=breed
  }
}

//Day 548
//review
function question(str) {
  return str.endsWith("?")
}

//Day 549
//method review: array.at()
function seventhThing(arr) {
  return `The thing in the 7th position is ${arr.at(7)}`
}

function nthThing(arr, num) {
  return `The thing in the ${num} position is ${arr.at(num)}`
}

//Day 550
//review localeCompare - https://www.codewars.com/kata/5701800886306a876a001031/train/javascript
function lineupStudents(students){
  return students.split(" ").sort((a,b) => b.length - a.length || b.localeCompare(a))
}

//Day 551
//array item count
function mostFrequentItemCount(arr) {
  if (arr.length === 0) return 0;
  let counter = {}
  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] = (counter[arr[i]] || 0) +1
  }
  return Math.max(...Object.values(counter))
}

//Day 552
//method review: array.concat()
function smoosh(arr1,arr2) {
  return arr1.concat(arr2)
}

//Day 553
//7 - String Merge!
function stringMerge(string1, string2, letter){
  return string1.slice(0, string1.indexOf(letter)) + string2.slice(string2.indexOf(letter))
}

//Day 554
//7 - Changing letters
function swap (string) {
  const vowels = "aeiou"
  let result = []
  for (let i = 0; i < string.length; i++) {
    vowels.includes(string[i]) ? result.push(string[i].toUpperCase()) : result.push(string[i])
  }
  return result.join("")
}

//Day 555
// universal dice roller
function damageRoll(arr) {  //format for array is: [numberOfD4s,#D6s,#D8s,#D10s,#D12s,#d20s]
  let d4s = []
  let d6s = []
  let d8s = []
  let d10s= []
  let d12s= []
  let d20s= []
  for (let i = 0; i < arr[0]; i++) {
    d4s.push(Math.floor((Math.random() * 4) + 1))
  }
  for (let i = 0; i < arr[1]; i++) {
    d6s.push(Math.floor((Math.random() * 6) + 1))
  }
  for (let i = 0; i < arr[2]; i++) {
    d8s.push(Math.floor((Math.random() * 8) + 1))
  }
  for (let i = 0; i < arr[3]; i++) {
    d10s.push(Math.floor((Math.random() * 10) + 1))
  }
  for (let i = 0; i < arr[4]; i++) {
    d12s.push(Math.floor((Math.random() * 12) + 1))
  }
  for (let i = 0; i < arr[5]; i++) {
    d20s.push(Math.floor((Math.random() * 20) + 1))
  }
  console.log(`D4s: ${d4s}, D6s: ${d6s}, D8s: ${d8s}, D10s: ${d10s}, D12s: ${d12s}, D20s: ${d20s}`)
  return d4s.concat(d6s,d8s,d10s,d12s,d20s).reduce((a,b) => a+b, 0)
}

//Day 556
// array: copyWithin() - allows copy/pasting elements within an array to other parts in the same array without changing its length
const array1 = ['a', 'b', 'c', 'd', 'e', "f", "g"]
array1.copyWithin(0,2,4) // should return cdcdefg

//Day 557
//review
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

//Day 558
//review class constructor
class gbfCharacterMaker {
  constructor(name, race, element, ultName) {
    this.name = name
    this.race = race
    this.element = element
    this.ultName = ultName
  }
  ult() {
    return `${this.ultName}`
  }
}

//Day 559
// array: Array.entries() - returns a new array iterator object that contains the keyvalue paairs for each index in the array.  There seems to be overlapping functionality with arr.forEach().  I don't really understand when to use which.  Even chatGPT struggled to give me an example where array.entries() wins over a forEach loop.
//example from Chatgpt:  Suppose you have an array of prices representing the cost of items, and you want to calculate the total price after applying a discount to items with odd indices. Using Array.prototype.entries(), you can easily access both the index and the value of each element, allowing you to apply the discount selectively.
const prices = [10, 20, 30, 40, 50];
const discount = 0.1; // 10% discount on odd-indexed items
let totalPrice = 0;
for (const [index, price] of prices.entries()) {
    if (index % 2 === 1) { // odd index
        totalPrice += price * (1 - discount);
    } else {
        totalPrice += price;
    }
}

//Day 560
//7 - All Stars Code Challenge 22
function toTime(seconds) {
  let hours = Math.floor(seconds / 3600)
  let minutes = Math.floor(seconds / 60) - (hours * 60)
  return `${hours} hour(s) and ${minutes} minute(s)`
}

//Day 561
//review
function customSort(arr) {
  const sortType = "A23456789TJQK"
  return arr.sort((prev,curr) => sortType.indexOf(prev) - sortType.indexOf(curr))
}

//Day 562
//7 - counting sheep
function lostSheep(friday,saturday,total){
  return total - friday.concat(saturday).reduce((a,b) => a+b,0)
}

//Day 563
//array.every - compares every element in the array to see if they return true when put through your callback function
function allEven(arr) {
  return arr.every(el => el % 2 === 0)
}

//Day 564
//7 
function greet(name) {
  return name ? `hello ${name}!` : null
}

//Day 565
//array.fill(value, start, end)  fills an array with a given value starting at a given index, inclusive, to an ending index, exclusive.
let nines = new Array(9).fill(9)

//Day 566
//7 - Unique string characters
function solve(a,b){
  let result = []
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      result.push(a[i])
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (!a.includes(b[i])) {
      result.push(b[i])
    }
  }
  return result.join("")
}

//Day 567
//review
class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

//Day 568
//review string replace
function solve(str, num){
  let removed = str.split("").sort().slice(0,num)
  return removed.reduce((prev,curr) => prev.replace(curr, ""), str)
}

//Day 569
//array.filter()
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
words.filter((el) => el.length === 5) //returns ['spray', 'elite']

//Day 570
//7 - Find a meeting room
function meeting(arr){
  return !arr.includes(`O`) ? `None available!` : arr.indexOf(`O`);
}

//Day 571
// array.find finds the first element of an array that meets the criteria of the callback function
const array11 = [5, 12, 8, 130, 44];
const found = array11.find((element) => element > 10);  //would return 12

//Day 572
//7 - original price
function discoverOriginalPrice(discountedPrice, salePercentage){
  return +(discountedPrice / (1 - salePercentage * .01)).toFixed(2)
}

//Day 573
// 7 - longest vowel chain
function solve(str){
  const vowels = "aeiou"
  let longest = 0
  let current = 0
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      current += 1
    } else {
      current >= longest? longest = current : null
      current = 0
    }
  }
 return longest
}

//Day 574
//array.findIndex() - returns the index of the first element in the array that satisifies the callback function
const array12 = [5, 12, 8, 130, 44];
array12.findIndex(el => el > 12) // should return 3, the index of 130


//Day 575
class gbfCharMake1 {
  constructor(name, race, element, ultName) {
    this.name = name
    this.race = race
    this.element = element
    this.ultName = ultName
  }
  ult() {
    return `${this.ultName}!`
  }
}

//Day 576
//array.findLast() & findLastIndex() - logical opposites of find() and findIndex() - searches the array in reverse order
const array576 = [5, 12, 50, 130, 44];

array576.findLast((element) => element > 45);  //should return 130
array576.findLastIndex((element) => element > 45)  //should return 3

//Day 577
//array.flat()  - creates new array with all sub-array elements concacenated into it up to a specified depth
const arr577 = [0, 1, [2, [3, [4, 5]]]];
arr577.flat(Infinity)  // should return [0, 1, 2, 3, 4, 5]


//Day 577
//review String Scramble
function scramble(str, arr) {
  let result = []
  for (let i =0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

//Day 578
//7 - Last Survivor
function lastSurvivor(letters, coords) {
  letters = letters.split('');
  for (let i = 0; i < coords.length; i++) {
     letters.splice(coords[i], 1)
  }
  return letters.join('')
}

//Day 579
//review
class Dog extends Animal579 {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

//Day 580
//array.flatMap() - same as using map followed by flat(), but slightly more efficient
const arr580 = [1, 2, 1];
const result = arr580.flatMap((num) => (num === 2 ? [2, 2] : 1));  // Expected output: Array [1, 2, 2, 1]

//Day 581
//7 - product array
function productArray(numbers){
  return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
}

//Day 582
//review
function gbfMake582(name, race, element, ultName) {
  return {
    name: name,
    race: race,
    element: element,
    ult: function() {
      return `${this.ultName}!`
    }
  }
}

//Day 583
//array.forEach() ; executes a given task for each element in the array
const array583 = ['a', 'b', 'c'];
array583.forEach((element) => console.log(element))

//Day 584
//review
function snip584(str) {
  return str.split(",").slice(1,-1).join(" ") || null
}

//Day 585
//7 - SevenAte9 - Write a function that removes any 9 from a given string that is between two 7s
function sevenAte9(str) {
  let numbers = str.split("")
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 9 && numbers[i-1] == 7 && numbers[i+1] == 7) {
      numbers[i] = ""
    }
  }
  return numbers.join("")
}

//Day 586
//array.from(arrayLike, mapFn, thisArg))
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]


//Day 587
//review - How many occurrences of str2 are in str1
function countStr587(str1,str2) {
  return str1.split(str2) -1
}

//Day 588
//7 - Split in parts
function splitInParts(str, partLength){
  let result = []
  let arr = str.split("")
  for (let i = 0; i < str.length / partLength; i++) {
    result.push(arr.splice(0, partLength).join(""))
  }
  return result.join(" ")
}

//Day 589
//array.includes(seachElement, fromIndex) - checks an array to see if it includes a given value, returning true or false
const pets589 = ['cat', 'dog', 'bat'];
console.log(pets589.includes('cat'));
// Expected output: true

//Day 590
//array.indexOf(searchElement, fromIndex) - returns the first index at which an element is found inside an array
const beasts590 = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts590.indexOf('bison'));
// Expected output: 1

//Day 591
//review
function countAll591(arr) {
  const counter = {}
  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] = (counter[arr[i]] || 0) +1
  }
  return counter
}

//Day 592
//Array.isArray() - returns true or false on whether or not the passed argument is an array
console.log(Array.isArray('[]'));
// Expected output: false
console.log(Array.isArray([]));
// Expected output: true

//Day 593
//review
function repVowels593(str) {
  const vowels = "aeiouAEIOU"
  let result = str.split("")
  for (let i = 0; i < str.length; i++) {
    vowels.includes(result[i]) ? result[i] = "!" : null
  }
  return result.join("")
}

//Day 594
//7 - Consecutive Items - https://www.codewars.com/kata/5f6d533e1475f30001e47514/train/javascript
function consecutive(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a && (arr[i-1] === b || arr[i+1] === b)) {
      return true
    } 
  }
  return false
}

//slightly cleaned up; for loop not necessary since integers are unique
function consecutive(arr, a, b) {
  let index = arr.indexOf(a)
  if (arr[index-1] === b || arr[index+1] === b) {
      return true
  }
  return false
}

//Day 595
//7 Sum of Triangular Numbers
function sumTriangularNumbers(n) {
  let sum = 0
  for (let i=0, j=1; i<n; i++, j += i+1) {
    sum += j
  }
  return sum
}

//Day 596
//review
class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

//Day 597
//review
class GBFcharMaker597 {
  constructor(name, race, element, ultName) {
    this.name = name
    this.race = race
    this.element = element
    this.ultName = ultName
  }
  ult() {
    return `${this.ultName}!`
  }
}

//Day 598
//review - Simple Letter Removal
function solve598(str, num){
  return str.split("").sort().slice(0,num).reduce((prev,curr) => prev.replace(curr, ""), str)
}

//Day 599
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

//Day 600
//6 - Count the smiley faces
function countSmileys(arr) {
  const smiley = /^[:;][-~]?[)D]$/
  return arr.reduce((prev,curr) => prev + smiley.test(curr), 0)
}

//Day 601
//array.join() - combines array elements with a given argument string connecting them.  defaults to ,
const elements601 = ['Fire', 'Air', 'Water'];
console.log(elements601.join());
// Expected output: "Fire,Air,Water"
console.log(elements601.join(''));
// Expected output: "FireAirWater"
console.log(elements601.join('-'));
// Expected output: "Fire-Air-Water"

//Day 602
//6 - Encrypt this!
function encryptWord(str) {
  const firstLetter = str.charCodeAt(0)
  let result
  switch (str.length) {
    case 0: return '';
    case 1: return firstLetter;
    case 2: result = [firstLetter, str[1]]; break;
    case 3: result = [firstLetter, str[2], str[1]]; break;
    default: result = [firstLetter, str.slice(-1), str.slice(2,-1), str[1]]; break;
  }
  return result.join('')
}

function encryptThis(str) {
  return str.split(' ').map(encryptWord).join(' ')
}

//Day 603
//array.keys() - 
const array603 = ['a', 'b', 'c']
const iterator = array603.keys()
for (const key of iterator) {
  console.log(key)
}
// Expected output: 0
// Expected output: 1
// Expected output: 2

//Day 604
//array.lastIndexOf() - returns the index of the last appearance of an element in an array
const animals604 = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals604.lastIndexOf('Dodo'));
// Expected output: 3


//Day 605
//7 - Sum of integers in string
function sumOfIntegersInString(str){
  let integers = str.match(/\d+/g) || []
  return integers.reduce((a,b) => a + +b, 0)
}

//Day 606
//6 - Highest Rank number in an array
function highestRank(arr) {
  let occurrences = num => arr.filter(el => el === num).length
  return arr.sort((a,b) => occurrences(b) - occurrences(a) || b - a)[0];
}

//Day 607
//6 - +1 Array
function upArray(arr){
  if (arr.some(el => el < 0 || el > 9) || arr.length < 1) {
    return null
  }
  for (let i = 1; i <= arr.length; i++) {
    if (arr[arr.length-i] === 9) {
      arr[arr.length-i] = 0
      if (i === arr.length) {
        arr.unshift(1); // If the loop reaches the leftmost digit, add 1 to the left
        break;
      }
    } else {
      arr[arr.length-i]++
      break;
    }
  }
  return arr
}

//Day 608
//Array.map() - execute a function on every element of an array, returning a new array with the changed elements

const array608 = [1, 4, 9, 16];
// Pass a function to map
const map608 = array608.map((x) => x * 2);
console.log(map608);
// Expected output: Array [2, 8, 18, 32]

//Day 609
//array.of() - make a new array from the passed arguments
console.log(Array.of('foo', 2, 'bar', true));
// Expected output: Array ["foo", 2, "bar", true]

//Day 610
//array.pop() - removes and returns the last element of an array
const plants610 = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants610.pop());
// Expected output: "tomato"

//Day 611
//array.push() - adds the specified elements to the end of an array and returns the new length of the array.
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

//Day 612
//7 - Factorial
function factorial(num){
  if (num < 0 || num > 12) {throw new RangeError('Argument must be an integer between 0 and 12');}
  let result = 1
  for (let i = 0; i < num; i++) {
    result *= (num - i)
  }
  return result
}

//Day 613
//review
function repVowels613(str) {
  return str.replace(/[aeiou]/gi, "")
}

//Day 614
//review class extension
class Animal614 {
  constructor(name) {
    this.name = name
  }
}
class Dog614 extends Animal614 {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

//Day 615
//array.reduce() - executes a user supplied 'reducer' callbaack function on each element of the array, in order, passing in the return value from the calculation on the preceding element.  The final result is a single value
//reduce(callbackFn, initialValue)
const array615 = [1, 2, 3, 4, 5, 6];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array615.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue,
)

//Day 616
//7 - Build a square
function generateShape(integer){
  let result = ""
  for (let i = 0; i < integer; i++) {
    result += "+".repeat(integer)
    i < integer-1 ? result += "\n" : null
  }
  return result
}

//Day 617
//array.reduceRight() - as reduce, but from right to left
const array617 = [[0, 1], [2, 3],[4, 5]]
const result617 = array617.reduceRight((accumulator, currentValue) =>accumulator.concat(currentValue),);
console.log(result617);  // Expected output: Array [4, 5, 2, 3, 0, 1]

//Day 618
//array.reverse() - reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first
const array618 = ['one', 'two', 'three'];
const reversed = array618.reverse();
// Careful: reverse is destructive -- it changes the original array.
console.log(array618, reversed);
// Expected output: ["three", "two", "one"] for both

//Day 619
//review - quick easy way to remove an element from a string if you have no concern for replacing it
function removeThing(str, thing) {
  return str.split(thing).join("")
}

//Day 620
//review - Build a square
function generateShape(integer){
  return ("+".repeat(integer) + "\n").repeat(integer).trim()
}

//Day 621
//array.shift() - removes and returns the first element of an array.
const array621 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array621); // Expected output: Array [2, 3]
console.log(firstElement); // Expected output: 1

//Day 622
//review
class GBFMaker622 {
  constructor(name, race, element, ultName) {
    this.name=name
    this.race=race
    this.element=element
    this.ultName=ultName
  }
  ult() {
    return `${ultName}!`
  }
}

//Day 623
//review
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
};

//Day 624
//array.slice(start, end) - returns a shallow copy of an array from start index (inclusive) to end index (exclusive)
const animals624 = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals624.slice(2)); // Expected output: Array ["camel", "duck", "elephant"]

//Day 625
//array.some(function) - tests to see if even a single element from the array returns true from the given test function
const array = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));  // Expected output: true

//Day 626
//array.sort(compareFunction) - sort an array of elements by comparing their UTF-16 code units values; default is ascending order
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array626 = [1, 30, 4, 21, 100000];
array626.sort();
console.log(array1); // Expected output: Array [1, 100000, 21, 30, 4]

//Day 627
function lineupStudents(students){
  return students.split(" ").sort((a,b) => b.length - a.length || b.localeCompare(a))
}

//Day 628
// array.splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const months628 = ['Jan', 'March', 'April', 'June'];
months628.splice(1, 0, 'Feb');  // Inserts at index 1
console.log(months628);  // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

//Day 629
//7 - Coding Meetup #6
function isSameLanguage(list) {
  return list.every((el,i) => el.language === list[0].language)
}

//Day 630
//array.toLocaleString(locales, options) -  returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods and these strings are separated by a locale-specific string
const array630 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array630.toLocaleString('ja-JP', { timeZone: 'UTC' });
console.log(localeString); // Expected output: "1,a,12/21/1997, 2:12:00 PM",

//Day 631
//review - custom sort
function customSort631(arr) {
    let customSort = "23456789TJQKA"
    return arr.sort((a,b) => customSort.indexOf(a) - customSort.indexOf(b))
}

//Day 632
//array.toReversed() - is the copying counterpart of the reverse() method. It returns a new array with the elements in reversed order.

//Day 633
//7 - Digits Explosion
function explode(str) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    result.push(str[i].repeat(+str[i]))
  }
  return result.join("")
}

//Day 634
// toSorted() - is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.
toSorted(compareFn) 

//Day 635
//review - class extension
class Dog635 extends Animal {
  constructor(name,breed) {
    super(name)
    this.breed = breed
  }
}

//Day 635
//toSpliced() - is the copying version of the splice() method. It returns a new array with some elements removed and/or replaced at a given index.
array635.toSpliced(start, deleteCount, item1, item2)

//Day 636
//toString() - returns a string representing the specified array and its elements.
const array636 = [1, 2, 'a', '1a'];
console.log(array636.toString());  // Expected output: "1,2,a,1a"

//Day 637
//array.unshift() - adds the specified elements to the beginning of an array and returns the new length of the array.
const array637 = [1, 2, 3]
console.log(array637.unshift(4, 5))  // Expected output: 5
console.log(array637)  // Expected output: Array [4, 5, 1, 2, 3]

//Day 638
//review - simple letter removal
function solve(str, num){
  return str.split("").sort().slice(0,num).reduce((prev,curr) => prev.replace(curr, ""), str)
}

//Day 639
//7 - Maximum Triplet Sum
function maxTriSum(numbers){
  let result = Array.from(new Set(numbers.sort((a,b) => b-a,0)))
  return result[0] + result[1] + result[2]
}

//Day 640
//7 - Currying functions:
function multiplyAll(arr) {
  return (n) => arr.map(el => el * n)
}

//Day 641
//String.at() - takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.
'The quick brown fox jumps over the lazy dog.'.at(5) //returns 'u'

//Day 642
//String.charAt() -  returns a new string consisting of the single UTF-16 code unit at the given index.  Not deprecated, but .at() is a more modern JS method + it can handle negative numbers.
'The quick brown fox jumps over the lazy dog.'.charAt(4) //returns 'q'

//Day 643
//7 - word values
function wordValue(arr) {
  return arr.map((el,i) => el.replace(/\s/g, '')
                         .split('')
                         .map(b => (b.charCodeAt() -96))
                         .reduce((acc, cur) => (acc+=cur),0)*(i+1))
}

//Day 644
//String.charCodeAt() = returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
'The quick brown fox jumps over the lazy dog.'.charCodeAt(4)  //should return 113, q's char code

//Day 645
//String.codePointAt() - returns a non-negative integer that is the Unicode code point value of the character starting at the given index. Note that the index is still based on UTF-16 code units, not Unicode code points.
const icons645 = '☃★♲';
console.log(icons645.codePointAt(0)) // Expected output: "9731"
console.log(icons645.codePointAt(1));  // Expected output: "9733"

//Day 645
//review - word values
function wordValue(arr) {
  return arr.map((el,i) => el.replace(/\s/g, '')
                         .split('')
                         .map(el2 => (el2.charCodeAt() -96))
                         .reduce((acc, cur) => (acc+cur),0)*(i+1))
}

//Day 646
//review - String Scramble
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
};

//Day 647
//7 - Basic Sequence Practice
function sumOfN(n) {
  let sum = 0
  let result = []
  for (let i = 0; i <= Math.abs(n); i++) {
    n < 0 ? sum -= i : sum += i
    result.push(sum);
  }
  return result
}

//Day 648
//String.concat() - concatenates the string arguments to this string and returns a new string.
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));  // Expected output: "Hello World"

//Day 649
//String.endsWith(searchString, endPosition) -  determines whether a string ends with the characters of this string, returning true or false as appropriate.
const str649 = 'Cats are the best!';
console.log(str649.endsWith('best!')); // Expected output: true
console.log(str649.endsWith('best', 17)); // Expected output: true

//Day 650
//String.includes() - performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
'The quick brown fox jumps over the lazy dog.'.includes('fox') // should return true

//Day 651
//review
class gbfMake651 {
  constructor(name, race, element, ultName) {
    this.name = name
    this.race = race
    this.element = element
    this.ultName = ultName
  }
  ult() {
    return `${this.ultName}!`
  }
}

//Day 652
//String.indexOf() - searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.
"I think Ruth's dog is cuter than your dog!".indexOf('dog') // should return 15, the index of 'd'

//Day 653
//7 - Evens and Odds - Given a number, convert it to hexadecimal if its odd and binary if its even
function evensAndOdds(num){
	return num.toString(num % 2 ? 16 : 2)
}

//Day 654
//String.isWellFormed() - returns a boolean indicating whether this string contains any lone surrogates.
"I think Ruth's dog is cuter than your dog!".isWellFormed() // should return true

//Day 655
class Dog655 extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

//Day 656
//7 - How many arguments - return the number of arguments passed to the function
function args_count(...rest) {
  return rest.length
}
//alternate:
function args_count() {
  return arguments.length
}

//Day 657
//lastIndexOf(searchString, position) - searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.
"I think Ruth's dog is cuter than your dog!".lastIndexOf('dog')  //should return 38

//Day 658
//String.localeCompare() - returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order. In implementations with Intl.Collator API support, this method simply calls Intl.Collator.
const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase
console.log(a.localeCompare(b));// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));// Expected output: 0

//Day 658
//6 - Consonant value
function solve(str) {
  let charCodeArr = str.split("").map(el => "aeiou".includes(el) ? "x" : el.charCodeAt() -96)
  let sums = []
  let sum = 0
  for (let i = 0; i < charCodeArr.length; i++) {
    if (charCodeArr[i] == "x") {
      sums.push(sum)
      sum = 0
    } else {
      sum += charCodeArr[i]
    }
  }
  // To handle the case where the last characters are not vowels
  sums.push(sum); 
  return Math.max(...sums)
}

//Day 659
//String.match() - retrieves the result of matching this string against a regular expression.  results inside an array
'The quick brown fox jumps over the lazy dog. It barked.'.match(/[A-Z]/g)  // Expected output: Array ["T", "I"]

//Day 660
//6 - Review consonant value
function solve(str) {
  let sums = [];
  
  str.split("").reduce((sum, char) => {
    if ("aeiou".includes(char)) {
      sums.push(sum);
      return 0;
    } else {
      return sum + char.charCodeAt(0) - 96;
    }
  }, 0);
  
  // Push the final accumulated sum
  sums.push(sum);
  
  return Math.max(...sums);
}

//Day 661
//String.padEnd() -  pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length
const str661 = 'Breaded Mushrooms'

console.log(str661.padEnd(25, '.')); // Expected output: "Breaded Mushrooms........"
console.log(str661.padEnd(25)); // Expected output: "Breaded Mushrooms        "

//Day 662
//7 - Basic Math (Add or Subtract) - given a string of numbers and operators, return the sum as a string.  ex: "1plus2plus3plus4"  --> "10"
function calculate(str) {
  let numbers = str.split(/plus|minus/);
  let operations = str.match(/[a-z]+/g);
  let sum = parseInt(numbers[0]);
  for(let i = 0, len = operations.length; i < len; i++){
    switch(operations[i]){
      case "plus":
        sum += parseInt(numbers[i+1]);
        break;
      case "minus":
        sum -= parseInt(numbers[i+1]);
        break;
    }
  }
  return sum+"";
}

//Day 663
//String.padStart() - pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.
const str663 = '5';
console.log(str663.padStart(2, '0'));// Expected output: "05"

//Day 664
//review - custom sort
function customSort664(arr) {
  let sortOrder = "A23456789TJQK"
  return arr.sort((a,b) => sortOrder.indexOf(a) - sortOrder.indexOf(b))
}

//Day 665
//7 - check three and two
function checkThreeAndTwo(array) {
  // Create a count object to store occurrences of each character
  const count = { "a": 0, "b": 0, "c": 0 };
  
  // Count the occurrences of each character in the array
  array.forEach(char => {
    count[char]++;
  });
  
  // Extract the values of the counts
  const counts = Object.values(count);
  
  // Check if we have exactly 3 occurrences of one letter and 2 of another
  return counts.includes(3) && counts.includes(2);
}

//Day 666
//String.repeat()
const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);  // Expected output: "I feel Happy! Happy! Happy! "

//Day 667
//7 - Compare Strings by Sum of Chars
function compare(str1, str2) {
  // Helper function to normalize the string
  function normalizeAndSum(str) {
    if (str == null) return 0; // Treat null/undefined as empty string
    
    // Convert string to uppercase
    str = str.toUpperCase();
    
    // Check if the string contains only letters
    if (!/^[A-Z]*$/.test(str)) return 0; // If not, treat as empty
    
    // Calculate the sum of ASCII values
    let sum = 0;
    for (let char of str) {
      sum += char.charCodeAt(0);
    }
    return sum;
  }
  
  // Normalize and calculate the ASCII sum for both strings
  const sum1 = normalizeAndSum(str1);
  const sum2 = normalizeAndSum(str2);
  
  // Compare the sums
  return sum1 === sum2;
}

//Day 668
//String.replace() - returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.replace("Ruth's", 'my'));  // Expected output: "I think my dog is cuter than your dog!"

//669
//review - converting a number to a string with appropriate commas
(100000).toLocaleString() // should return '100,000'

//Day 670
//String.replaceAll() - returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.
const paragraph670 = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph670.replaceAll('dog', 'monkey')); // Expected output: "I think Ruth's monkey is cuter than your monkey!"

//Day 671
//String.search() -  executes a search for a match between a regular expression and this string, returning the index of the first match in the string.
const paragraph671 = "I think Ruth's dog is cuter than your dog!";

const regex671 = /[^\w\s']/g; // Anything not a word character, whitespace or apostrophe
console.log(paragraph671.search(regex671));// Expected output: 41
console.log(paragraph671[paragraph671.search(regex671)]);// Expected output: "!"

//Day 672
//7 - Stanton measure - count the number of 1s in a given array, then find the number of occurences of that total's value  (if 3 1s, find the number of 3s)
function stantonMeasure(arr){
  let counts = {}
  for (let el of arr) {
    counts[el] = (counts[el] || 0) + 1
  }
  return counts[counts[1]] || 0
}

//Day 673
//String.slice() - extracts a section of this string and returns it as a new string, without modifying the original string.

const str673 = 'The quick brown fox jumps over the lazy dog.';
console.log(str673.slice(31));  // Expected output: "the lazy dog."
console.log(str673.slice(4,19)) // Expected output: "quick brown fox"

//Day 674
//7 - greatest common divisor
function mygcd(x, y) {
  // Ensure x and y are positive integers
  if (x <= 0 || y <= 0) throw new Error("Input values must be positive integers");

  // Use Euclidean algorithm
  while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
  }
  return x;
}

//Day 675 
//review - the euclidean algorithm (which states that if y is 0, GCD is x and vice versa) from yesterday simplified & using recursion
function mygcd(x,y){
  return y == 0 ? x : mygcd(y, x % y)
}

//Day 676
//7 - Array series 2 - given an array and an integer, find the product of the (integer) highest numbers in said array
function maxProduct(arr, num){
  return arr.sort((a,b) => b-a,0).slice(0, num).reduce((prev,curr) => prev*curr, 1)
}

//Day 677
//String.split() - takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array
'The quick brown fox jumps over the lazy dog.'.split(" ") //should return ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']

//Day 678
//String.startsWith() - determines whether this string begins with the characters of a specified string, returning true or false as appropriate.
const str678 = 'Saturday night plans';
console.log(str678.startsWith('Sat')); // Expected output: true

//Day 679
//review - String Scramble
function scramble(str, arr) {
  let result = []
  for (let i=0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
};

//Day 680
//review - extending classes
class Dog680 extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}
//Day 681
//String.substring() -  returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
const str681 = 'Mozilla';
console.log(str681.substring(1, 3)); // Expected output: "oz"

//Day 682
//review - 7 - simple letter removal
function solve(str, num){
  let toBeRemoved = str.split("").sort().slice(0,num)
  return toBeRemoved.reduce((prev,curr) => prev.replace(curr, ""), str)
}

//Day 683
//String.toLocaleLowerCase() - returns this string converted to lower case, according to any locale-specific case mappings.
const dotted = 'İstanbul';
console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);  // Expected output: "i̇stanbul"

//Day 684
//String.toLocaleUpperCase()
const city = 'istanbul';
console.log(city.toLocaleUpperCase('en-US'));  // Expected output: "ISTANBUL"

//Day 685
//review - constructor function
function gbfMake685(name, race, element, ultName) {
  this.name = name 
  this.race = race 
  this.element = element 
  this.ult = function() {
    return `${this.ultName}`
  }
}

//Day 686
//review - class constructor
class GbfMaker686 {
  constructor(name, race, element, ultName) {
    this.name = name 
    this.race = race 
    this.element = element 
    this.ultName = ultName
  }
  ult() {
    return `${this.ultName}`
  }
}

//Day 687
//String.toLowerCase() - 
const sentence687 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence687.toLowerCase());  // Expected output: "the quick brown fox jumps over the lazy dog."

//Day 688
//7 - Maximum Gap
function maxGap (arr){
  let numbers = arr.sort((a,b) => a-b, 0)
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    if (result < arr[i+1] - arr[i]) {
      result = arr[i+1] - arr[i]
    }
  }
  return result
}

//Day 689
//review - custom sort
function customSort689(arr) {
  let sortOrder = "A23456789TJQK"
  return arr.sort((a,b) => sortOrder.indexOf(a) - sortOrder.indexOf(b))
}

//Day 690
//review 
function stringSnip690(str) {
  return str.split("").slice(1,-1).join(" ")  || null
}

//Day 691
//String.toString() - converts a value to a string
(456).toString() // expect: "456"

//Day 692
//review
function numToString(num) {
  return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][num]
}

//Day 693
//String.toUpperCase()
const sentence693 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence693.toUpperCase());  // Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

//Day 694
//String.trim() - removes whitespace from both ends of this string and returns a new string, without modifying the original string.
const greeting694 = '   Hello world!   ';
console.log(greeting694.trim());  // Expected output: "Hello world!";

//Day 695
//String.trimEnd() - removes whitespace from the end of this string and returns a new string, without modifying the original string. trimRight() is an alias of this method.
const greeting695 = '   Hello world!   ';
console.log(greeting695.trimEnd());  // Expected output: "   Hello world!";


//Day 696
//String.trimStart() - removes whitespace from the beginning of this string and returns a new string, without modifying the original string. trimLeft() is an alias of this method.
const greeting696 = '   Hello world!   ';
console.log(greeting696.trimStart());  // Expected output: "Hello world!   ";

//Day 697
//String.valueOf() -  returns this string value.
const stringObj = new String('foo');
console.log(stringObj);  // Expected output: String { "foo" }
console.log(stringObj.valueOf());  // Expected output: "foo"

//Day 698
//review - str count
function strCount698(str1,str2) {
  return str1.split(str2).length -1
}

//Day 699
//review
[1,2,3,4,5].splice(2,1,"three") // should return [1,2,'three',4,5]

//Day 700
//review 99 bottles
function bottles700(num) {
  for (let i = num; i > 0; i--) {
    console.log(`${i} ${i === 1 ? "bottle" : "bottles"} of beer on the wall, ${i} ${i === 1 ? "bottle" : "bottles"} of beer!  Take one down, pass it around, ${i-1} ${i-1 === 1 ? "bottle" : "bottles"} of beer on the wall.`)
  }
}

//Day 701
//String.fromCharCode() - returns a string created from the specified sequence of UTF-16 code units.
console.log(String.fromCharCode(65, 90, 97, 122));  // Expected output: "AZaz"

//Day 702
//review - replace Vowels with 
function repVow702(str) {
  let vowels = "aeiouAEIOU"
  let result = str.split("")
  for (let i = 0; i < str.length; i++) {
    vowels.includes(result[i]) ? result[i] = "" : null
  }
  return result.join("")
}

//Day 703 
//review, class 27
class NetflixTvShow {
  constructor(title, genre, numOfEpisodes, episodeLength) {
    this.title = title
    this.genre = genre
    this.numOfEpisodes = numOfEpisodes
    this.episodeLength = episodeLength
  }
  play() {
    console.log(`Play Episode`)
  }
  pause() {
    console.log(`Pause Episode`)
  }
  rewind() {
    console.log(`Rewinding`)
  }
  fastForward() {
    console.log(`Forwarding`)
  }
}

let title001 = new NetflixTvShow("Castlevania", "Adventure", 32, 25)

//Day 704
//review
function repVowRegEx(str) {
  return str.replace(/[aeiou]/gi, "")
}

//Day 705
//7 - Product Array (Array Series #5)
function productArray(numbers){
  let total = numbers.reduce((a,b) => a*b,1)
  return numbers.map(el => total / el)
}

//Day 706
//String.fromCodePoint() - returns a string created from the specified sequence of code points.  (An integer between 0 and 0x10FFFF (inclusive))

console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));// Expected output: "☃★♲你"

//Day 707
//String.raw() - used to get the raw string form of template literals — that is, substitutions (e.g. ${foo}) are processed, but escape sequences (e.g. \n) are not.
//Create a variable that uses a Windows path without escaping the backslashes:
const filePath = String.raw`C:\Development\profile\aboutme.html`;
console.log(`The file was uploaded from: ${filePath}`);  // Expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"
//without String.raw:
const filePath2 = `C:\Development\profile\aboutme.html`;
console.log(`The file was uploaded from: ${filePath2}`); // Expected output: "The file was uploaded from: C:Developmentprofileaboutme.html"

//Day 708
//fetch for nasa api project
async function fetchAPOD() {
  const apiKey = nasaConfig.apiKey;
  const yearMonthDay = document.querySelector('input').value
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${yearMonthDay}`;

  try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data)

      const apodContainer = document.getElementById('apodContainer');
      const newDiv = document.createElement('div');
      newDiv.classList.add('apod-item');

      const date = document.createElement('h3')
      date.textContent = data.date

      const description = document.createElement('p');
      description.textContent = data.explanation;

      let mediaElement;
      if (data.media_type === 'video') {
          mediaElement = document.createElement('iframe');
          mediaElement.src = data.url;
          mediaElement.width = "640";
          mediaElement.height = "360";
      } else {
          mediaElement = document.createElement('img');
          mediaElement.src = data.url;
          mediaElement.alt = data.title;
          mediaElement.style.maxWidth = "100%";
      }

      newDiv.appendChild(date)
      newDiv.appendChild(description);
      newDiv.appendChild(mediaElement);
      apodContainer.appendChild(newDiv);

  } catch (error) {
      console.error('Error fetching NASA APOD:', error);
  }
}


//Day 709 
//playing with local storage - class 27
if (!localStorage.Score) {localStorage.setItem('Score', 0)}
document.querySelector('button').addEventListener('click', addAnotherOne)
document.querySelector('span').innerText = localStorage.Score

function addAnotherOne() {
    localStorage.Score++
    document.querySelector('span').innerText = localStorage.Score
}

//Day 710
//review - endsWith()
function automorphic(number){
  return `${number * number}`.endsWith(number) ? `Automorphic` : `Not!!`
}

//Day 711
//6 - Transform to Prime;  Given an array of numbers, determine what number you'd have to add to said array to make the sum of the array's numbers a Prime number
function minimumNumber(numArr){
  let total = numArr.reduce((prev,curr) => prev + curr, 0)
  
  for (let i = 1; i <= (Math.sqrt(total)); i++) {
    if (isPrime(total)) {
      return 0
    } else 
    if (isPrime(total+i)){
      return i
    }
  }
}

function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num <= 3) return true; // 2 and 3 are prime numbers

    if (num % 2 === 0 || num % 3 === 0) return false; // eliminate multiples of 2 and 3

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

//Day 712
//7 - Largest Elements
function largest(num, arr) {
  let array = arr.sort((a,b)=> b-a,0)
  let result = []
  for (let i = 0; i < num; i++) {
    result.push(array[i])
  }
  return result.sort((a,b) => a-b,0)
}
//alternate
function largest(num, arr) {
  return [...arr].sort((a,b) => a-b,0).slice(arr.length-num)
}

//Day 713
//review - counter
function arrCounter713(arr) {
  let counter = {}
  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] = (counter[arr[i]] || 0) +1
  }
  return counter
}

//Day 714
//review
function bottles714(num) {
  for (let i = num; i > 0; i--) {
    console.log(`${i} ${i === 1 ? "bottle" : "bottles"} of beer on the wall, ${i} ${i === 1 ? "bottle" : "bottles"} of beer!  Take one down, pass it around, ${i-1} ${i-1 === 1 ? "bottle" : "bottles"} of beer on the wall.`)
  }
}

//Day 715
//review: classes
class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

//Day 716
//review - custom sort
function customSort716(arr) {
  let desiredOrder = 'A23456789TJQKA'
  return [...arr].sort((a,b) => desiredOrder.indexOf(a) - desiredOrder.indexOf(b))
}

//Day 717
//7 - 
function multiples(num, int){
  let result = []
  for (let i = 1; i <= num; i++) {
    result.push(int * i)
  }
  return result
}

//Day 718
//7 - Valid Spacing
function validSpacing(str) {
  return str === str.trim() && !str.includes("  ")
}

//Day 719
//Date.getDate() - returns the day of the month for this date according to local time.  Returns NaN if the date is invalid.
const birthday719 = new Date('August 19, 1975 23:15:30');
const date719 = birthday719.getDate();
console.log(date719);// Expected output: 19

//Day 720
//Date.getDay() - returns the day of the week for this date according to local time, where 0 represents Sunday.
const day720 = birthday719.getDay();  // Sunday - Saturday : 0 - 6
console.log(day720);  // Expected output: 2

//Day 721
//review - String Scramble
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

//Day 722
//Date.getFullYear() - returns the year for this date according to local time.
const moonLanding = new Date('July 20, 69 00:20:18');
console.log(moonLanding.getFullYear());  // Expected output: 1969

//Day 723
//Date.getHours()
const birthday = new Date('March 13, 08 04:20:34');
console.log(birthday.getHours());// Expected output: 4
console.log(birthday.getMinutes());// Expected output: 20
console.log(birthday.getSeconds());// Expected output: 34

//Day 724
//review - valid spacing
function validSpacing724(str) {
  return str === str.trim() && !str.includes("  ")
}

//Day 725
//Date.getMonth() - returns the month for this date according to local time, as a zero-based value (where zero indicates the first month of the year).
console.log(birthday.getMonth())  //should return 2

//Day 726
//Date.getTime() - returns the number of milliseconds for this date since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
console.log(birthday.getTime()) //should return 1205400034000

//Day 727
//Date.setDate() - changes the day of the month for this date according to local time.
const event727 = new Date('August 19, 1975 23:15:30');
event727.setDate(24);
console.log(event727);  // Expected output: Sun Aug 24 1975 23:15:30 GMT-0500 (Central Daylight Time)

//Day 728
//review - class constructor
class gbfCharacterMaker728 {
  constructor(name, race, element, ultName) {
    this.name = name
    this.race = race
    this.element = element
    this.ultName = ultName 
  }
  ult() {
    return `${this.ultName}`
  }
}

//Day 729
//Date.toDateString()
const event729 = new Date(1993, 6, 28, 14, 39, 7);
console.log(event729.toString()) // Expected output: "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)"
console.log(event729.toDateString()) // Expected output: "Wed Jul 28 1993"

//Day 730
//Date Object Methods Review 
//Year:	getFullYear()	setFullYear()	getUTCFullYear()	setUTCFullYear()
//Month: getMonth()	setMonth()	getUTCMonth()	setUTCMonth()
//Date: getDate()	setDate()	getUTCDate()	setUTCDate()
//Hours: getHours()	setHours()	getUTCHours()	setUTCHours()
//Minutes: getMinutes()	setMinutes()	getUTCMinutes()	setUTCMinutes()
//Seconds: getSeconds()	setSeconds()	getUTCSeconds()	setUTCSeconds()
//Milliseconds: getMilliseconds()	setMilliseconds()	getUTCMilliseconds()	setUTCMilliseconds()
//Day of Week: getDay()	N/A	getUTCDay()	N/A

//Day 731
//7 - Substituting Variables Into Strings: Padded Numbers
function solution(num){
  return `Value is ${num.toString().padStart(5, "0")}`
}

//Day 732
//Array.at() - takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
const array732 = [5, 12, 8, 130, 44];
console.log(`An index of 2 returns ${array732.at(2)}`);// Expected output: "An index of 2 returns 8"

//Day 733
//Array.concat() - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const array733a = ['a', 'b', 'c'];
const array733b = ['d', 'e', 'f'];
const array733c = array733a.concat(array733b);
console.log(array733c);  // Expected output: Array ["a", "b", "c", "d", "e", "f"]

//Day 734
//7 - Simple letter removal review
function solve(str, num){
  let toBeRemoved = str.split("").sort().slice(0, num)
  return toBeRemoved.reduce((prev,curr) => prev.replace(curr, ""), str)
}

//Day 735
//7 - Nickname Generator
function nicknameGenerator(name){
  if (name.length < 4) return 'Error: Name too short'
  let vowels = "aeiou"
  return vowels.includes(name[2]) ? name.slice(0,4) : name.slice(0,3)
}

//Day 736
//Array.copyWithin(target, start, end) - shallow copies part of this array to another location in the same array and returns this array without modifying its length.
const array736 = ['a', 'b', 'c', 'd', 'e'];
console.log(array736.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

//Day 737
//review - class extension
class Dog737 extends Animal737 {
  constructor(species, breed) {
    super(species)
    this.breed = breed
  }
}

//Day 738
//Array.entries() - returns a new array iterator object that contains the key/value pairs for each index in the array.
const array738 = ['a', 'b', 'c'];
const iterator738 = array738.entries();
console.log(iterator738.next().value);// Expected output: Array [0, "a"]
console.log(iterator738.next().value);// Expected output: Array [1, "b"]

//Day 739
//8 - Sort My Textbooks
function sorter(arr) {
  return arr.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
}

//Day 740
//Array.with() - is the copying version of using the bracket notation to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.
const arr740 = [1, 2, 3, 4, 5];
console.log(arr740.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr740); // [1, 2, 3, 4, 5]

//Day 741
//8 - Collinearity
function collinearity( x1,y1, x2,y2 ) {
  if (x1===0 && y1===0 || x2===0 && y2===0) {return true}
  let slope1 = y1/x1
  let slope2 = y2/x2
  return slope1 === slope2
}

//Day 742
//Review 
"Testing".endsWith("ing") // should return true
function automorphic(n){
  return (n * n).toString().endsWith(n) ? "Automorphic" : "Not!!"
}

//Day 743
//review - Array.reverse() - WARNING:  array is an in=place method, meaning it destroys the original array.
const array743 = ['one', 'two', 'three'];
console.log('array1:', array743);// Expected output: "array1:" Array ["one", "two", "three"]

const reversed743 = array743.reverse();
console.log('reversed:', reversed);// Expected output: "reversed:" Array ["three", "two", "one"]

//Day 744
//review - Array.splice(start, deleteCount, item1, item2, etc)
const months744 = ['Jan', 'March', 'April', 'June'];
months744.splice(1, 0, 'Feb');  // Inserts at index 1
console.log(months744);  // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

//Day 745
//7 - Moves in squared strings
function vertMirror(str) {
  return str.split('\n')
    .map(line => line.split('').reverse().join(''))
    .join('\n')
}
function horMirror(str) {
  return str.split('\n')
    .reverse()
    .join('\n')
}
function oper(fct, s) {
  return fct(s)
}

//Day 746
//7 - review
function vertMirror746(str) {
  return str.split("\n").map(el => el.split("").reverse().join("")).join("\n")
}
function horMirror746(str) {
  return str.split("\n").reverse().join("\n")
}
function oper746(fct, str) {
  return fct(str)
}


//Day 747
//Array.toReversed() - the copying counterpart of the reverse() method. It returns a new array with the elements in reversed order.
const items747 = [1, 2, 3];
console.log(items747); // [1, 2, 3]

const reversedItems747 = items747.toReversed();
console.log(reversedItems747); // [3, 2, 1]
console.log(items747); // [1, 2, 3]


//Day 748
//7 - Squares sequence
function squares748(x, n) {
  if (n <= 0) return []
  let result = [x]
  for (let i = 0; i <= n-2; i++) {
    result.push(result[i] * result[i])
  }
  return result
}

//alt

function squares748a(x, n) {
  if (n <= 0) return []
  let result = []
  for (let i = 0; i < n; i++) {
    result.push(x)
    x = x*x
  }
  return result
}

//Day 749
//7 - Highest Value Pyramid
function pyramid(stones, cnt = 0) {
  const freq = stones.reduce((a, b) => (a[b] = (a[b] || 0) + 1, a), {});
  for (let take of [3, 2, 1]) {
    const ds = Object.keys(freq).filter(d => freq[d] >= take);
    if (!ds.length) return null;
    const val = Math.max(...ds);
    cnt += take * val;
    delete freq[val];
  }
  return cnt;
}

//Day 750
//review 
Array.sort((prev,curr) => prev-curr, 0)
Array.forEach((el,i,arr) => console.log(el))

//Day 751
//7 - Clothes size number converter
//My -thinking too hard- solution:
function sizeToNumber(size) {
  if (!validateSize(size)) return null
  let baseValue = (size.includes("s")) ? 36 : (size.includes("l")) ? 40 : 38
  size.split("").forEach(el => el === 'x' ? baseValue += size.includes('s') ? -2 : 2 : null)
  return baseValue
}
function validateSize(str) {
    const pattern = /^(x*[sl]|m)$/;
    return pattern.test(str);
}


//Day 752
//alternate 7 - Clothes size number converter
function sizeToNumber(size) {
  if (size == "s") return 36;
  if (size == "m") return 38;
  if (size == "l") return 40;
  const numberOfXs = size.match(/x/g)?.length;
  if (/^x+s$/.test(size)) return 36 - (numberOfXs * 2);
  if (/^x+l$/.test(size)) return 40 + (numberOfXs * 2);
  return null
}

//Day 753
//String.match(regex) - retrieves the result of matching this string against a regular expression.
const numberOfXs753 = "xxxxs".match(/x/g)?.length  //should return 4

//Day 754
//String.subString() -  returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
const str754 = 'Mozilla';
console.log(str754.substring(1, 3));// Expected output: "oz"
console.log(str754.substring(2));// Expected output: "zilla"

//Day 755
//7 - review
function sizeToNumber(size) {
  if (size === "s") return 36
  if (size === "m") return 38
  if (size === "l") return 40
  let numberOfXs = size.match(/x/g)?.length
  if ((/x+s/).test(size)) return 36 - (2* numberOfXs)
  if ((/x+l/).test(size)) return 40 + (2* numberOfXs)
  return null
}


//Day 756
//7 - 
function trickery(wordStr,lieStr,friendsLetters) {
  return [...wordStr].some((c,i) => lieStr[i] !== c && (friendsLetters.includes(c) || friendsLetters.includes(lieStr[i])))
}

//Day 757
//review
class Dog757 extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

//Day 758
//7 - Given an array of strings representing the contents of your inventory, determine how many stone picks you can craft
function stonePick(arr) {
  let cobblestones = arr.filter(el => el === "Cobblestone").length
  let wood = arr.filter(el => el === "Wood").length
  let sticks = arr.filter(el => el === "Sticks").length + (wood * 4)
  let stonePicks = Math.min(Math.floor(cobblestones / 3), Math.floor(sticks / 2))
  return stonePicks
}

//Day 759
//review
const str759 = 'Saturday night plans';
console.log(str759.startsWith('Sat'));  // Expected output: true

//Day 760
//review
const greeting760 = '   Hello world!   ';
console.log(greeting760);  // Expected output: "   Hello world!   ";
console.log(greeting760.trim());  // Expected output: "Hello world!";

//Day 761
//review
const paragraph761 = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph761.replaceAll('dog', 'monkey'));// Expected output: "I think Ruth's monkey is cuter than your monkey!"

//Day 762
//7 - Three-cushion Billiards
function hasScored(str) {
  let cushionCounter = 0, ballsHit = new Set();
  for (let char of str) {
    if ("news".includes(char)) {
      cushionCounter++;
    } else {
      ballsHit.add(char);
      if (ballsHit.size === 2 && ballsHit.has('R')) {
        return cushionCounter >= 3;
      }
    }
  }
  return false;
}

//Day 763
//review - Set.add()
const set763 = new Set();

set763.add("test")
set763.add(42)
set763.add(13)

for (const item of set763) {
  console.log(item);
  // Expected output: "test"
  // Expected output: 42
  // Expected output: 13
}

const set763b = new Set("test");
for (const item of set763b) {
  console.log(item);
  // Expected output: "t"
  // Expected output: "e"
  // Expected output: "s"
}

//Day 764
//Set.delete()
const set764 = new Set();
set764.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });

// Delete any point with `x > 10`.
set764.forEach((obj) => {
  if (obj.x > 10) {
    set764.delete(obj);
  }
});

//Day 765
//review
function hasScored(str) {
  let cushionsHit = 0
  let ballsHit = new Set()
  for (let char of str) {
    if ("news".includes(char)) {
      cushionsHit++
    } else {
      ballsHit.add(char)
      if (ballsHit.size == 2 && ballsHit.has("R")) { return cushionsHit >= 3}
    }
  }
  return false;
}

//Day 766
//Set.clear() - removes all elements from a set.
//Set.difference() - takes a set and returns a new set containing elements in this set but not in the given set.
const odds766 = new Set([1, 3, 5, 7, 9]);
const squares766 = new Set([1, 4, 9]);
console.log(odds766.difference(squares766)); // Set(3) { 3, 5, 7 }

//Day 767
//Set.intersection() - takes a set and returns a new set containing elements in both this set and the given set.
const odds767 = new Set([1, 3, 5, 7, 9]);
const squares767 = new Set([1, 4, 9]);
console.log(odds767.intersection(squares767)); // Set(2) { 1, 9 }

//Day 768
//Set.isDisjointFrom() -  takes a set and returns a boolean indicating if this set has no elements in common with the given set.
const primes768 = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const squares768 = new Set([1, 4, 9, 16]);
console.log(primes768.isDisjointFrom(squares768)); // true

//Day 769
//6 - Even or Odd Accessor
function target(num) {
  return num % 2 ? "Odd" : "Even"
}

const handler = {
  get(target, prop) {
    return target(prop)
  }
}
const evenOrOdd = new Proxy(target, handler)

//770
//Review - Three-Cushion Billiards
function hasScored(str) {
  let cushionsHit = 0
  let ballsHit = new Set()
  for (let char of str) {
    if ("news".includes(char)) {cushionsHit++}
    else {ballsHit.add(char)}
    if (ballsHit.size == 2 && ballsHit.has("R")) {return cushionsHit >= 3}
  }
  return false
}

//Day 771
//review - String Scramble
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

//Day 772
//proxies
const target772 = {
  message1: "hello",
  message2: "everyone",
};

const handler772  = {
  get(target, prop, receiver) {
    return "world";
  },
};
const proxy772  = new Proxy(target, handler2);
console.log(target772.message1) // hello
console.log(proxy772.message1); // world
console.log(proxy772.message2); // world

//Day 773
//review - 6 - Even or Odd Accessor
function target773(num) {
  return num % 2 ? "Odd" : "Even"
}
const handler773 = {
  get (target, prop) {
    return target(prop)
  }
}
const evenOrOdd773 = new Proxy(target773, handler773)

//Day 774
//Number - Number values represent floating-point numbers like 37 or -9.25.  A number literal like 37 in JavaScript code is a floating-point value, not an integer. There is no separate integer type in common everyday use. 
Number("123"); // returns the number 123
Number("123") === 123; // true
Number("unicorn"); // NaN
Number(undefined); // NaN

//Day 775
//Number.isInteger()
console.log(Number.isInteger(20.3))  //false
console.log(Number.isInteger(20)) //true

//Day 776
//internet is down; hopefully fixed tomorrow.  So here's some stuff I made (for my FriendO idea) to not go mad with boredom:
const arrayOfBirthDates = [...document.getElementsByClassName('birthDate')]
console.log(arrayOfBirthDates)
arrayOfBirthDates.forEach(el => {
        if (new Date(el.innerHTML).getMonth() - currentMonth >= 3) {
            //if their birthday is three or more months from now, turn green
            console.log("The current month is: " + whatMonthIsIt(currentMonth));
            el.style.background = 'green'
        }
        if (new Date(el.innerHTML).getMonth() - currentMonth == 2) {
            //if their birthday is two months from now, turn yellow
            console.log("The current month is: " + whatMonthIsIt(currentMonth));
            el.style.background = 'yellow'
        }
    }
)

function whatMonthIsIt(num) {
    switch (num) {
        case 0: return "January"; break;
        case 1: return "February"; break;
        case 2: return "March"; break;
        case 3: return "April"; break;
        case 4: return "May"; break;
        case 5: return "June"; break;
        case 6: return "July"; break;
        case 7: return "August"; break;
        case 8: return "September"; break;
        case 9: return "October"; break;
        case 10: return "November"; break;
        case 11: return "December"; break;
    
        default: return "Dude there's only 12 months; what did you enter?"
    }
}

//Day 777
//internet still down 
function customSort777(arr) {
  const sortingMethod = "A23456789TJQK"
  return arr.sort((a,b) => sortingMethod.indexOf(a) - sortingMethod.indexOf(b))
}

//Day 778
//Number.parseFloat() - parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.
console.log(Number.parseFloat(2.0 * Math.PI))

//Day 779
//review
function hasScored779(str) {
  let cushionsHit = 0
  let ballsHit = new Set()
  for (let char of str) {
    if ("news".includes(char)) {cushionsHit++}
    else {ballsHit.add(char)}
    if (ballsHit.size == 2 && ballsHit.has("R")) {return cushionsHit >= 3}
  }
  return false
}

//Day 780
class GBFcharMaker780 {
  constructor(name, race, element, ultName) {
    this.name = name
    this.element = element
    this.race = race 
    this.ultName = ultName
  }
  ult() {
    return `${this.ultName}`
  }
}

//Day 781
//Number.toString()
console.log((123).toString())  //expected:  "123"

//Number.toPrecision()
console.log((1.23).toPrecision(4));  // Expected output: "1.230"
console.log((1.234).toPrecision(4));  // Expected output: "1.234"
console.log((1.23456789).toPrecision(4));  // Expected output: "1.235"
console.log((1).toPrecision(4));  // Expected output: "1.000"

//Day 782
//Number.isNaN() - static method determines whether the passed value is the number value NaN, and returns false if the input is not of the Number type. It is a more robust version of the original, global isNaN() function.
console.log(Number.isNaN(NaN))  //true
console.log(Number.isNaN(100))  //false
console.log(Number.isNaN('100F'))  //false

//Day 783
//arrow function review
const double783 = el => el * 2  //one line function, one parameter
const multiply783 = (el1, el2) => el1 * el2 //one line function, two or more parameters
const ifElse783 = (el1, el2) => {  //multiLine function, two or more parameters
  if (el1 === el2) {
    return 'Same!'
  } else return 'Different!'
}

//Day 784 
//review - Three cushion billiards
function hasScored(str) {
  let cushionsHit = 0
  let ballsHit = new Set()
  for (let char of str) {
    if ("news".includes(char)) {cushionsHit++}
    else {ballsHit.add(char)}
    if (ballsHit.size == 2 && ballsHit.has("R")) {return cushionsHit >= 3}
  }
  return false
}

//Day 785
//Map object - holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
const map1 = new Map();

map1.set('a', 1);
console.log(map1.get('a'));// Expected output: 1

map1.set('a', 97);
console.log(map1.get('a'));// Expected output: 97

//Day 787
//6 - The lost beginning
function beginning(str) {
  let n
  let numberString
  let result
  
  for (let i = 1; i <= str.length; i++) {
    result = n = +str.slice(0, i);
    numberString = '';

    while (numberString.length < str.length) {
      numberString += n
      n++
    }

    if (numberString === str) return result;
  }
}

//Day 788
//review
class Clock {
  constructor({template}) {
    this.template = template
  }  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
    stop() {
      clearInterval(this.timer);
    };
  
    start() {
      render();
      this.timer = setInterval(this.render, 1000);
    };
}

//Day 789
const str789 = 'Saturday night plans';
console.log(str789.startsWith('Sat')); // Expected output: true

//Day 790
//6 - Alphabet Slices 
function solution(str) {
  let result = [];
  let i = 0;

  while (i < str.length - 1) {
      let j = i + 1;

      // Expand j while the characters are consecutive
      while (j < str.length && str.charCodeAt(j) - str.charCodeAt(j - 1) === 1) {
          j++;
      }

      // If we found a sequence of 2 or more consecutive letters
      if (j - i >= 2) {
          result.push([i, j]);  // Add the start/end indices of the consecutive sequence to the result
      }

      i = j;  // Move to the next potential start of sequence
  }
  let modifiedStr = str.split('');
    result.forEach(([start, end]) => {
        let consecutiveStr = str.slice(start, end);
        let reversedStr = consecutiveStr.split('').reverse().join('');
        modifiedStr.splice(start, end - start, ...reversedStr);
    });
  return modifiedStr.join("");
}

//Day 791
//review - three-cushion billiards
function hasScored(str) {
  let cushionsHit = 0
  let ballsHit = new Set()
  for (let i = 0; i < str.length; i++) {
    if ("news".includes(str[i])) {
      cushionsHit++
    } else {
      ballsHit.add(str[i])
    }
    if (ballsHit.size == 2 && ballsHit.has("R")) {
      return cushionsHit >= 3
    }
}
  return false;
}

//Day 792
//friendo class prototype
class Friendo {
  constructor(nameFirst, nameMiddle, nameLast, dateBirthday, dateBirthYear, contactPhone, contactEmail, contactHomeAddress) {
      this.nameFirst = nameFirst
      this.nameMiddle = nameMiddle
      this.nameLast = nameLast
      this.name = [this.nameFirst, this.nameMiddle, this.nameLast]
      this.dateBirthday = dateBirthday
      this.dateBirthYear = dateBirthYear
      this.contactPhone = contactPhone
      this.contactEmail = contactEmail
      this.contactHomeAddress = contactHomeAddress
  }
  birthdayAlert() {
      let today = new Date()
      if (new Date(this.dateBirthday).getMonth() == today.getMonth()) {
          console.log(`${this.nameFirst}'s birthday is this month!`)
      } else {
          console.log(`${this.nameFirst}'s birthday is NOT this month!`)
      }
  }
}

//Day 793
//start of the herald cipher:  change the vowels
function heraldCipher793(str) {
  let vowels = "aeioua"
  let string = str.toLowerCase()
  let stringArr = string.split("")
  //vowel changer:  all vowels should be changed to the next vowel in the alphabet
  for (let i = 0; i < stringArr.length; i++) {
    if (vowels.includes(stringArr[i])) {
      stringArr[i] = vowels[vowels.indexOf(stringArr[i]) +1]
    }
  }
  
  return stringArr.join("")
}

//Day 794
//6 - Array combinations
function solve(arr) {
  let uniqueNumCounts = arr.map(el => new Set(el).size)
  return uniqueNumCounts.reduce((acc, curr) => acc * curr, 1)
};

//Day 795
//cipher map 
const heraldCipherMap = {
  'a': 'e',
  'A': "E",
  'e': 'i',
  'E': 'I',
  'i':'o',
  'I':'O',
  'o':'u',
  'O':'U',
  'u':'a',
  'U':'A',
  'b':'p',
  'B':"P",
  'f':'v',
  'F':'V',
  'g':'k',
  'G':'K',
  'p':'b',
  'P':'B',
  's':'z',
  'S':'Z',
  't':'d',
  'T':'D',
  'v':'f',
  'V':'F',
  'z':'s',
  'Z':'S'
}

function heraldCipher(str) {
  return str.split("").map(el => heraldCipherMap[el] || el).join("")
}

//Day 796
//Sets are weird;  apparently when a new set is declared, it treats whatever you get it as iterable and thus adds everything it can.  The add method does not iterate and thus adds everything as 1 element
let example796 = new Set('1,2,3,4,5') // results in: {'1', ',', '2', '3', '4', '5'}
let example796b = new Set() 
example796b.add('1,2,3,4,5') //results in {'1,2,3,4,5'}


//Day 797
//Array.from(arrayLike, mapFn, thisArg) - 
let x797 = {length:5}
Array.from(x797) // should return [undefined, undefined, undefined, undefined, undefined]
// OR 
Array.from({length:5}) // should return [undefined, undefined, undefined, undefined, undefined]
Array.from({length:5}, el => 1) //should return [1, 1, 1, 1, 1]

//7 - Number from identity matrix
function idMatrixToBitValue(sizeNum) {
    let bitString = Array.from({length: sizeNum * sizeNum}, (el,i) => (i%(n+1) === 0 ? '1' : '0')).join("")
    const decimalValue = BigInt('0b' + bitString);
    return decimalValue;
}

//Day 798
//review - 7 - Three cushion billiards
function hasScored(str) {
  let cushionsHit = 0
  let ballsHit = new Set()
  for (let char of str) {
    if ('news'.includes(char)) {
      cushionsHit++
    } else {
      ballsHit.add(char) 
    }
    if (ballsHit.size == 2 && ballsHit.has('R')) {
      return cushionsHit >= 3
    }
  }
  return false
}

//Day 799
//review, 7 - Simple letter removal
function solve(str, num){
  let strArr = str.split("")
  let sortedStrArr = strArr.sort()
  let lettersToRemove = sortedStrArr.slice(0, num)
  return lettersToRemove.reduce((prev,curr) => prev.replace(curr, ""), str)
}

//Day 800
//review - 6 - Duplicate Encoder
function duplicateEncode(word){
  let stringBuilder = []
  let letters = {}
  
  for (let i = 0; i < word.length; i++) {
    letters[word[i].toLowerCase()] = (letters[word[i].toLowerCase()] || 0) +1
  }
  for (let i = 0; i < word.length; i++) {
    if (letters[word[i].toLowerCase()] === 1) {
      stringBuilder.push(`(`)
    } else {
      stringBuilder.push(`)`)
    }
  }
  return stringBuilder.join("")
}

// simplified, but worse time complexity.  running indexOf and lastIndexOf inside a map is essentially two loops inside a loop.
function duplicateEncode(word){
  return word.toLowerCase().split("").map((el,arr) => arr.indexOf(el) == arr.lastIndexOf(el) ? "(" : ")").join("")
}

//Day 801
function jewelCounter(jewels,stones) {
  let jewelCount = 0
  for (let stone of stones) {
    if (jewels.includes(stone)) {
      jewelCount++
    }
  }
  return jewelCount
}
//so this is O(n*m) because includes() will loop through jewels every time, not quite as bad as O(n^2), but still not ideal

//Day 802
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

//Day 803
//review - classes
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
  
  hide() {
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

//Day 804
//6 - PhoneWords
function phoneWords(stringOfNums) {
  let letterMap = {
    0: " ",
    1: "",
    2: 'a',
    22: 'b',
    222: 'c',
    3: 'd',
    33: 'e',
    333: 'f',
    4: 'g',
    44: 'h',
    444: 'i',
    5: 'j',
    55: 'k',
    555: 'l',
    6: 'm',
    66: 'n',
    666: 'o',
    7: 'p',
    77: 'q',
    777: 'r',
    7777: 's',
    8: 't',
    88: 'u',
    888: 'v',
    9: 'w',
    99: 'x',
    999: 'y',
    9999: 'z',
  }
  let result = [] //holding spot for dialed numbers
  let code = '' //consecutive numbers build a temporary string
  let maxLength = { '0': 1, '2': 3, '3': 3, '4': 3, '5': 3, '6': 3, '7': 4, '8': 3, '9': 4 }
  for (let i = 0; i < stringOfNums.length; i++) {
    code += stringOfNums[i]
    if (code.length === maxLength[stringOfNums[i]]) {
      result.push(code)
      code = ''
    }
    //if current number and next number are NOT the same, push that number sequence to result, and reset the code string
    if (stringOfNums[i] != stringOfNums[i+1]) {
      result.push(code)
      code = ''
    }
  }
  return result.map((el) => letterMap[el]).join("")
}

//Day 805
function countCharacters(str) {
  let counter = {}
  for (let char of str) {
    counter[char] = (counter[char] || 0) + 1  //counter[char] = counter[char] +1 || 1
  }
  let mostFrequentCharacter = ''
  let characterOccurrences = 0
  for (let key in counter) {
    if (counter[key] > characterOccurrences) {
      characterOccurrences = counter[key]
      mostFrequentCharacter = key
    }
  }
  console.log([mostFrequentCharacter, characterOccurrences])
  return mostFrequentCharacter
}

//Day 806
//review - 7: three cushion billiards
function hasScored806(str) {
  let cushionCounter = 0  //needs to be 3 before 2nd object ball is hit 
  let ballsHit = new Set()
  for (let letter of str) {
    if ('news'.includes(letter)) {
      cushionCounter++
    } else {
      ballsHit.add(letter)
    }
    if (ballsHit.size == 2 && ballsHit.has('R')) {
      return cushionCounter >= 3
    }
  }
  return false;
}

//Day 807
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
function dupeChecker(arr) {
  let counter = {}
  for (let el of arr) {
    if (counter[el]) {
      return true
    } else {
      counter[el] = true
    }
  } 
  return false
}

//alternate 
function dupeCheckerB(arr) {
  return new Set(arr).size !== arr.length
}

//Day 808
//7 - Multiply Adjacent Digits
function digitMultiplication(str) {
  let sumTotal = 0
  let product = 1
  for (let i = 0; i < str.length; i++) {
    //if current element is a number multiply it into the existing product
    if (str[i] == +str[i]) {
      product *= +str[i]
    } else 
    //if you see a minus sign, we're gonna subract the next set of numbers we see, so add current growing product to sumTotal, then reset product & set it to negative so the next total is subtracted even when using a '+'
    if (str[i] == "-"){
      sumTotal += product 
      product = -1
    } else 
    //if you see a plus sign, combine the current sumTotal with the growing product, then reset the product, keeping it positive
    if (str[i] == "+") {
      sumTotal += product 
      product = 1
    }
  }
  return sumTotal + product
}

//Day 809
const person1 = { 
  name: "Alice",
  age: 30
}
const person2 = person1
person2.age = person1.age + 1 

//what are their ages?  Both 31, because both objects are pointing to the same place in memory

//Day 810
//review, constructor function
function characterMaker810(name, race, gender, element, ultName) {
  this.name = name
  this.race = race
  this.gender = gender
  this.element = element
  this.ult = function() {  
    console.log(ultName)
  }
}

//Day 811
//review
class Dog811 extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}
//Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.
function returnPairs(arr, num) {
  let result = []
  let counter = {}
  for (let el of arr) {
    counter[el] = (counter[el] || 0) + 1
  }
  for (let el in counter) {
    let difference = (num - +el)
    if (counter[difference]) {
      result.push([+el, difference])
      counter[el]--
      counter[difference]--
    }
  }
  return result
}

//Day 812
//7 - A letter's best friend
function bestFriend(txt, a, b) {
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] == a && txt[i+1] !== b) {
      return false
    }
  }
  return true
}

//Day 813
function strNumTrim(str) {
  return str.split(",").slice(1,-1).join(" ") || null
}

//Day 814
//6 - Perform operation to make string empty
function lastNonEmptyStringA(str) {
  let results = [str]
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
  let loopString = str
  while (loopString.length > 0) {
    loopString = alphabet.reduce((prev, curr) => prev.replace(curr,""), loopString)
    results.push(loopString)
  }

  return results[results.length-2]
}

//2nd try using only letters in string instead of entire alphabet; still too time complex
function lastNonEmptyStringB(str) {
  let results = [str]
  let letterCounter = {}
  for (let el of str) {
    letterCounter[el] = (letterCounter[el] || 0) + 1
  }
  let alphabet = Object.keys(letterCounter)
  let loopString = str
  while (loopString.length > 0) {
    loopString = alphabet.reduce((prev, curr) => prev.replace(curr,""), loopString)
    results.push(loopString)
  }

  return results[results.length-2]
}

//Day 815
//review 7 - Three-cushion billiards
function hasScored815(str) {
  let cushionsHit = 0
  let ballsHit = new Set()
  for (let letter of str) {
    if ('news'.includes(letter)) {
      cushionsHit++
    } else {
      ballsHit.add(letter)
    }
    if (ballsHit.size == 2 && ballsHit.has("R")) {
      return cushionsHit >= 3
    }
  }
  return false;
}

//Day 816
//review
function repVowels816(str) {
  return str.replace(/[aeiou]/gi, "")
}
//num % 1 === 0

//Day 816
// reduceRight()
const array816 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const result816 = array816.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue),
);
console.log(result816);  // Expected output: Array [4, 5, 2, 3, 0, 1]

//Day 817
//Fibonacci
function fibonacciForLoop(num) {
  let numSequence = [0,1]
  for (let i = 2; i <= num; i++) {
    numSequence[i] = numSequence[i-2] + numSequence[i-1]
  }
  return numSequence[num]
}

//Day 818
//Fibonacci with recursion
function fibonacciRecursion(num) {
  if (num < 2) {return num}
  else { return fibonacciRecursion(num - 2) + fibonacciRecursion(num - 1) }
}

//Day 819
//custom sort review
function sort(arr) {
  let customSort = "A23456789TJQK"
  return [...arr].sort((a,b) => customSort.indexOf(a) - customSort.indexOf(b))
}

//Day 820
//Fibonacci with recursion & memoization
function fibonacciRecursionMemo(num) {
  const memo = {}
  if (num < 2) {return num} 
  else
  if (memo[num]) {return memo[num]}
  else { 
    memo[num] = fibonacciRecursionMemo(num - 2) + fibonacciRecursionMemo(num - 1) 
    return memo[num]
  }
}

//Day 821
//Array.toSorted() - the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.
const months821 = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths821 = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

//Day 822
//Array.toSpliced() - the copying version of the splice() method. It returns a new array with some elements removed and/or replaced at a given index.
const months_822 = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
const months2_822 = months_822.toSpliced(1, 0, "Feb");
console.log(months2_822); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
const months3_822 = months2_822.toSpliced(2, 2);
console.log(months3_822); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months4_822 = months3_822.toSpliced(1, 1, "Feb", "Mar");
console.log(months4_822); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log(months_822); // ["Jan", "Mar", "Apr", "May"]

//Day 823
// review
function automorphic823(num){
  return String(num * num).endsWith(num) ? "Automorphic" : "Not!!"
}

//Day 824
//class 27 stuff - Create a Netflix TV show class with a constructor that makes Netflix TV shows with 4 properties and 3 methods
class NetflixTvShow824 {
  constructor(title, genre, episodeCount, episodeLength) {
    this.title = title
    this.genre = genre 
    this.episodeCount = episodeCount
    this.episodeLength = episodeLength
  }
  play() {
    //play the episode
  }
  pause() {
    //pause the playback
  }
  nextEpisode() {
    //go to next episode
  }
  previousEpisode() {
    //go to previous episode
  }
}

//Day 825
//review - When provided with a number between 0-9, return it in words.  1 -> "One", 2 -> "Two", etc
function numberWord(num) {
  switch (num) {
    case 0: return "Zero"
    case 1: return "One"
    case 2: return "Two"
    case 3: return "Three"
    case 4: return "Four"
    case 5: return "Five"
    case 6: return "Six"
    case 7: return "Seven"
    case 8: return "Eight"
    case 9: return "Nine"
    default: return "Error.  Please enter a number 0-9"
  }
}

//alternate
function numberWordB(num) {
  const numbers = ["Zero","One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
  return numbers[num]
}

//Day 826
//review - 7 - three-cushion billiards
function hasScored(str) {
  let cushionsHit = 0
  let ballsHit = new Set()
  for (let letter of str) {
    if ("nesw".includes(letter)) {
      cushionsHit++
    } else {
      ballsHit.add(letter)
    }
    if (ballsHit.size == 2 && ballsHit.has("R")) {
      return cushionsHit >= 3
    }
  }
  return false;
}

//Day 827
//6 - review
function lastNonEmptyString(str) {

  const counts = str
    .split('')
    .reduceRight((acc, curr) => (acc[curr] = ++acc[curr] || 1, acc), {});
  
  const max_count = Math.max(...Object.values(counts));
  
  return Object.keys(counts)
    .filter(char => counts[char] === max_count)
    .reverse()
    .join('');
  
}

//Day 828
//review - String Scramble
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

//Day 829
//review - bottles of beer
function beerOnTheWall(num) {
  for (let i = num; i > 0; i--) {
    console.log(
      `${i} ${i == 1 ? 'bottle': 'bottles'} of beer on the wall, ${i} ${i == 1 ? 'bottle': 'bottles'} of beer!  Take one down, pass it around, ${i-1} ${i-1 == 1 ? 'bottle': 'bottles'} of beer on the wall~!`
    )
  }
}

//Day 830
//review
function lastNonEmptyString830(str) {
  const counts = str
    .split('')
    .reduceRight(
      (acc, curr) => (acc[curr] = (acc[curr] || 0) +1, acc), {}
    );
  
  const maxCount = Math.max(...Object.values(counts));
  
  return Object.keys(counts)
    .filter(char => counts[char] === maxCount)
    .reverse()
    .join('');
}

//Day 831
//What are the results of these expressions?

// "" + 1 + 0    --- "10"
// "" - 1 + 0    --- -1
// true + false  --- 1
// 6 / "3"       --- 2
// "2" * "3"     --- 6
// 4 + 5 + "px"  --- '9px'
// "$" + 4 + 5   --- "$45"
// "4" - 2       --- 2
// "4px" - 2     --- NaN
// "  -9  " + 5  --- "  -9  5"
// "  -9  " - 5  --- -14
// null + 1      --- 1
// undefined + 1 --- NaN
// " \t \n" - 2  --- -2 

//Day 832
//review 
function occurenceCounter832(str1,str2) {
  return str1.split(str2).length -1
}

//Day 833
//review
let array833 = ["this","is","a","test"]
array833.push("waffles")  // ["this","is","a","test", "waffles"]
array833.pop() // ["this","is","a","test"]

//Day 834
//Array.flat()

const arr834 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr834.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]
console.log(arr834.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]
console.log(arr834.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

//Day 835
//review
function countTheThing(str, str2) {
  const regex = new RegExp(str2,'g')
  const anyMatches = str.match(regex).length
  return anyMatches ? anyMatches : 0
}

//Day 836
//review
function strToNum(arr) {
  return arr.map(Number)
}

//Day 837
//7 - Christmas Trash Party
function compareTrash(trash1, trash2){
  return (trash1 == trash2) && (typeof trash1 == typeof trash2)
}

//Day 838
////7 - You Complete Me
function complete(str){
  for (let i = 1; i <= str.length; i++) {
    if (str.slice(i) == [...str.slice(i)].reverse().join(''))
    return str + [...str.slice(0,i)].reverse().join('')
  }
} 

//Day 839
//review
function disemVowel839(str) {
  let result = str.split("")
  let vowels = "aeiouAEIOU"
  for (let i = 0; i < result.length; i++) {
    if (vowels.includes(result[i])) {
      result[i] = "!"
    }
  }
  return result.join("")
}

//Day 840
//review - 7 - three cushion billiards
function hasScored(str) {
  let cushionCounter = 0 
  let ballsHit = new Set()
  for (let letter of str) {
    if ("news".includes(letter)) {
        cushionCounter++
        } else {
          ballsHit.add(letter)
        }
    if (ballsHit.size >= 2 && ballsHit.has("R")) {
      return cushionCounter >= 3
    }
  }
  return false;
}

//Day 841
//7 - Consecutive vowels in string
function getTheVowels(word) {
  let vowelSequence = "aeiou"; // correct sequence of vowels
  let currentVowelIndex = 0; // index of vowel in the sequence currentlly being checked
  let consecutiveCount = 0; // how many consecutive vowels are in the word
  
  //  check every letter of the word against current vowel
  for (letter of word) {
    if (letter == vowelSequence[currentVowelIndex]) {
      consecutiveCount++;
      currentVowelIndex = (currentVowelIndex + 1) % vowelSequence.length;
    }
  }
  
  return consecutiveCount;
}

//Day 842
//review - String.trim() - removes whitespace from both ends of this string and returns a new string, without modifying the original string.
const greeting842 = '   Hello world!   ';
console.log(greeting842);  // Expected output: "   Hello world!   ";
console.log(greeting842.trim());  // Expected output: "Hello world!";

//Day 843
//review
let a843 = prompt("First number?", 1);
let b843 = prompt("Second number?", 2);
alert(a843 + b843); // '12', not 3.  This is because the data is returned as a string and is concatenated.

//Day 844
//review
class GBFcharMaker844 {
  constructor(name,race,gender,element,ultName) {
    this.name = name 
    this.race = race
    this.gender= gender 
    this.element = element 
    this.ultName = ultName 
  }
  ult() {
    return `${this.ultName}!`
  }
}

//Day 845
//6 - Finite State Automata
class StateMachine {
  constructor({init, transitions}) {
    this.state = init;
    this.transitions = transitions
  }
  prep() {
    const prepareObject = this.transitions.find(obj => obj.method === 'prep')
    this.state == prepareObject.current ? this.state = prepareObject.target : null
    return this.state
  }
  move() {
    const moveObject = this.transitions.find(obj => obj.method === 'move')
    this.state == moveObject.current ? this.state = moveObject.target : null
    return this.state
  }
  slow() {
    const slowObject = this.transitions.find(obj => obj.method === 'slow')
    this.state == slowObject.current ? this.state = slowObject.target : null
    return this.state
  }
  stop() {
    const stopObject = this.transitions.find(obj => obj.method === 'stop')
    this.state == stopObject.current ? this.state = stopObject.target : null
    return this.state
  }
}

//Day 846
// continued; class with dynamically created methods
class StateMachine {
  constructor({ init, transitions }) {
    this.state = init;
    transitions.forEach(({ method, current,  target }) => {
      this[method] = () => {
        if (this.state == current) {
          this.state = target;
        }
      };
    });
  }
}

//Day 847
//review - what's effectively happening in the reduce method
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}
reduce([1, 2, 3, 4], (a, b) => a + b, 0) // returns 10

//Day 848
//7 - Some but not all
function someButNotAll(seq, pred){
  const arr = Array.from(seq);
  return arr.some(pred) && !arr.every(pred);
}

//Day 849
//String.toWellFormed() -  returns a string where all lone surrogates of this string are replaced with the Unicode replacement character U+FFFD.
const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.toWellFormed());
}
// Logs:
// "ab�"
// "ab�c"
// "�ab"
// "c�ab"
// "abc"
// "ab😄c"

//Day 850
//String.search() - executes a search for a match between a regular expression (or string) and this string, returning the index of the first match in the string.
"I think Ruth's dog is cuter than your dog!".search("I") // returns 0

//Day 851
//review - switch statements
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

//Day 852 
//review
class StateMachine852 {
  constructor({ init, transitions }) {
    this.state = init;
    transitions.forEach(({method,current,target}) => {
      this[method] = () => {
        if (this.state == current) {
          this.state = target
        }
      }
    })
  }
}

//Day 853
//7 - map over a list of lists (array of arrays)
function gridMap(fn,arr) {
  return arr.map(el => el.map(fn))
}

//Day 854
//review -- 99 bottles of beer
function bottles854(num) {
  for (let i = num; i > 0; i--) {
    console.log(
      `${i} ${i === 1? "bottle" : "bottles"} of beer on the wall, ${i} ${i === 1? "bottle" : "bottles"} of beer!  Take one down, pass it around, ${i-1} ${i === 1? "bottle" : "bottles"} of beer on the wall~`
    )
  }
}

//Day 855
//review
class StateMachine855 {
  constructor({ init, transitions }) {
    this.state = init;
    transitions.forEach(({method,current,target}) => {
      this[method] = () => {
        if (this.state === current) {
          this.state = target
        }
      }
    })
  }
}

//Day 856
//review
function countElements856(arr) {
  let counter = {}
  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] = (counter[arr[i]] || 0) + 1
  }
  return counter
}

//Day 857
//review
function hasScored(str) {
  let cushionsHit = 0
  let ballsHit = new Set()
  for (let char of str) {
    if ("news".includes(char)) {cushionsHit++}
    else {ballsHit.add(char)}
    if (ballsHit.size == 2 && ballsHit.has("R")) {return cushionsHit >= 3}
  }
  return false
}

//Day 858
//review
const str858 = 'The quick brown fox jumps over the lazy dog.';
console.log(str858.slice(31));// Expected output: "the lazy dog."

//Day 859
//7 - [Code Golf] Return Odd No Matter What 
//gross answer demanded by kata
alwaysOdd=n=>n%2?n:n-1

//better, more readable answer
function alwaysOdd(num) {
  return num % 2 ? num : num - 1
}

//Day 860
//review - finite state automata 1
class StateMachine860 {
  constructor({ init, transitions }) {
    this.state = init;
    transitions.forEach(({method,current,target}) => {
      this[method] = () => {
        if (this.state === current) {
          this.state = target
        }
      }
    })
  }
}

//Day 861
//Christmas.  I ain't codin on Christmas.  Sue me.

//Day 862
//Review
const paragraph862 = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph862.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"
const regex862 = /Dog/i;
console.log(paragraph862.replace(regex862, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"

//Day 863
//review
const paragraph863 = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph863.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

//Day 864
//review
class StateMachine {
  constructor({ init, transitions }) {
    this.state = init;
    transitions.forEach(({method, current, target}) => {
      this[method] = () => {
        if (this.state === current) {
          this.state = target
        }
      }
    })
  }
}

//Day 865
//review
const paragraph865 = "I think Ruth's dog is cuter than your dog!";
// Anything not a word character, whitespace or apostrophe
const regex865 = /[^\w\s']/g;
console.log(paragraph865.search(regex865));
// Expected output: 41
console.log(paragraph865[paragraph865.search(regex865)]);
// Expected output: "!"

//Day 866
//review
const str866 = 'The quick brown fox jumps over the lazy dog.';
console.log(str866.slice(31));
// Expected output: "the lazy dog."

//Day 867
//review 
const str867 = 'The quick brown fox jumps over the lazy dog.';
const words867 = str867.split(' ');
console.log(words867[3]);

//Day 868
//review - Array.at()
const array868 = [5, 12, 8, 130, 44];
let index868 = 2;
console.log(`An index of ${index868} returns ${array868.at(index868)}`); // Expected output: "An index of 2 returns 8"
index868 = -2;
console.log(`An index of ${index868} returns ${array868.at(index868)}`); // Expected output: "An index of -2 returns 130"

//Day 869
//review
class Dog869 extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}
let numbers869 = [1,2,8,7,3,9,6,8,4,9]
let evens869 = numbers869.filter(el => el % 2 === 0)  //should return [2,8,6,8,4]

//Day 870
//review - Finite State Automata
class StateMachine {
  constructor({ init, transitions }) {
    this.state = init;
    transitions.forEach( ({method,current,target}) => {
      this[method] = function() {
        if (this.state === current) {
          this.state = target
        }
      }
    })
  }
}

//Day 871
//review 
function multiplayEachNumber(num) {
  return num.toString().split("").map(Number).reduce((a,b) => a * b, 1)
}

//Day 872
//review
function numToString(num) {
  return num.toLocaleString()
}
// 5000 would return '5,000'

//Day 873
//review custom sort
function customSort873(arr) {
  const desiredSort = '23456789TJQKA'
  return [...arr].sort((a,b) => desiredSort.indexOf(a) - desiredSort.indexOf(b))
}

//Day 874
//review
const isBelowThreshold = (currentValue) => currentValue < 40;
const array876 = [1, 30, 39, 29, 10, 13];
console.log(array876.every(isBelowThreshold)); // Expected output: true

//Day 875
//review
const words875 = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result875 = words875.filter((word) => word.length > 6);
console.log(result875);  // Expected output: Array ["exuberant", "destruction", "present"]

//Day 876
//review - 7 - Simple letter removal
function solve876(str, num) {
  return str.split("").sort().slice(0, num).reduce((pre, val) => pre.replace(val, ``), str)
}

//Day 877
//review - Three cushion billiards
function hasScored(str) {
  let cushionCount = 0
  let ballsHit = new Set()
  for (let i = 0; i < str.length; i++) {
    if ('news'.includes(str[i])) {
      cushionCount++
    } else {
      ballsHit.add(str[i])
    }
    if (ballsHit.size == 2 && ballsHit.has("R")) {
      return cushionCount >= 3
    }
  }
  
  return false;
}

//Day 878
//review - finite state automata
class StateMachine {
  constructor({ init, transitions }) {
    this.state = init;
    transitions.forEach(el => {
      this[el.method] = function() {
        if (this.state == el.current ) {this.state = el.target}
      }
    })
  }
}

//Day 879
//review
const array879 = ['a', 'b', 'c'];
array879.forEach((element, index, array) => console.log(`${element} is at index ${index} in the array of: [${array}]`));

// "a is at index 0 in the array of: [a,b,c]"
// "b is at index 1 in the array of: [a,b,c]"
// "c is at index 2 in the array of: [a,b,c]"

//Day 880
//7 - Commenting Made Easy
function comment(text, style) {
  switch (style) {
      case "Bash" : case "Python" : return `# ${text.replace(/\n/g, "\n# ")}`
      case "Bash Multiline"       : return `: "\n${text}\n"`
      case "JavaDoc"              : return `/**\n* ${text.replace(/\n/g, "\n* ")}\n*/`
      case "Python Multiline"     : return `"""\n${text}\n"""`
      case "Javascript"           : return `// ${text.replace(/\n/g, "\n// ")}`
      case "Javascript Multiline" : return `/*\n${text}\n*/`
      case "SGML"                 : return `<!-- ${text.replace(/\n/g, " -->\n<!-- ")} -->`
      case "SQL"                  : return `-- ${text.replace(/\n/g, "\n-- ")}`
      default                     : throw new Error("Unsupported language")
  }
}

//Day 881
//review
const array881 = [1, 2, 3];
console.log(array881.includes(2)); // Expected output: true

const pets881 = ['cat', 'dog', 'bat'];
console.log(pets881.includes('cat')); // Expected output: true
console.log(pets881.includes('at')); // Expected output: false

//Day 882
//review
const array882 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue882 = 0;
const sumWithInitial882 = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue882,
);

console.log(sumWithInitial882);  // Expected output: 10

//Day 883
//review fizzbuzz
function fizzBuzz883(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log('Fizzbuzz')
    } else 
    if (i % 5 === 0) {
      console.log('Buzz')
    } else 
    if (i % 3 === 0) {
      console.log('Fizz')
    } else {
      console.log(i)
    }
  }
}

//Day 884
//7 - Decimal Time Conversion aka waste of time
function toIndustrial(time){
  return typeof time === "number" ? +(time / 60).toFixed(2) : +((Math.trunc(time.replace(":", ".")) + (time.replace(":", ".") % 1) / 0.6)).toFixed(2);
}

function toNormal(time){
  let hours = Math.trunc(Math.round(time * 60) / 60);
  let minutes = Math.round(time * 60) % 60;
  minutes < 10 ? minutes = `0${minutes}` : minutes;
  return `${hours}:${minutes}`;
}

//Day 845
//review
const str845 = 'The quick brown fox jumps over the lazy dog.';
const words845 = str845.split(' ');
console.log(words845);  // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

//Day 846
//review - Finite State Automata 1
class StateMachine846 {
  constructor({ init, transitions }) {
    this.state = init;
    for (let obj of transitions) {
      this[obj.method] = () => {
        if (this.state === obj.current) {
          this.state = obj.target
        }
      }
    }
  }
}

//Day 847
//review
let alphaArray = "abcdefghijklmnopqrstuvwxyz".split("")
let alphaArray2 = [..."abcdefghijklmnopqrstuvwxyz"]

//Day 848
//7 - Perpendicular lines
function maxBisectors(num) {
  return Math.floor(num / 2) * Math.ceil(num / 2)
}

//Day 849
//review, created obsidian vault

String.raw() 
String.fromCharCode(utf16CharCodeNumber)// - Static method 
String.fromCodePoint(UnicodeCodePointNumber)// - Static method
String.at(indexNumber)//- instance method

//Day 850
//review
class Dog850 extends Animal {
  constructor(species, breed) {
    super(species) 
    this.breed = breed
  }
}

//Day 851
//review - localeCompare
function lineupStudents(students){
  return students.split(" ").sort((a,b) => b.length - a.length || b.localeCompare(a))
}

//Day 852
//review
const sentence852 = 'The quick brown fox jumps over the lazy dog.';

const index852 = 6; 
console.log(`The character at index ${index852} is ${sentence852.charAt(index852)}`);
// Expected output: "The character at index 4 is i"

//Day 853
//Review - String.charCodeAt()
const sentence853 = 'The quick brown fox jumps over the lazy dog.';
const index853 = 4;
console.log(`Character code ${sentence853.charCodeAt(index853)} is equal to ${sentence853.charAt(index853)}`,);
// Expected output: "Character code 113 is equal to q"


//Day 854
//Leet Code - Course Schedule IV
function checkIfPrerequisite(numCourses, prerequisites, queries) {
  let prereqs = {}

  prerequisites.forEach((el) => prereqs[el[1]] ? prereqs[el[1]].push(el[0]) : prereqs[el[1]] = [el[0]])

  return queries.map((el) => prereqs[el[1]]?.includes(el[0]) || false)
};

//this works for a few of the test cases but not all; needs to be more robust.  I was introduced to the 'Floyd Warshall Algorithm"

//Day 855
//review - string scramble
function scramble(str, arr) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
}

//Day 856
//LeetCode 2620 - Counter  -  Closures
var createCounter = function(num) {
  let timesInvoked = 0
  return function() {
     return num + timesInvoked++
  };
};

//Day 857
//review - Finite State Automata
class StateMachine857 {
  constructor({ init, transitions }) {
    this.state = init;
    transitions.forEach(obj => {
      this[obj.method] = () => {
        if (this.state == obj.current) {
          this.state = obj.target
        }
      }
    })
  }
}

//Day 858
//review classes
class Dog858 extends Animal {
  constructor(parameterYoureStealingFromAnimal, parameter) {
    super(parameterYoureStealingFromAnimal)
    this.parameter = parameter
  }
}

//Day 859
//review
function hasScored(str) {
  let ballsHit = new Set()
  let cushionsHit = 0
  for (let letter of str) {
    if ('news'.includes(letter)) {
      cushionsHit++
    } else {
      ballsHit.add(letter)
    }
    if (ballsHit.size >= 2 && ballsHit.has("R")) {
      return cushionsHit >= 3
    }
  }
  return false;
}

//Day 860
//review - String.padEnd(targetLength, padString)
const str860 = 'Breaded Mushrooms';
console.log(str860.padEnd(25, '.'));
// Expected output: "Breaded Mushrooms........"

//Day 861
//review - split a sentence into an array with 1 word per element
"this is a test".split(" ")
//round a number to the nearest 10 value
Math.round(number * 10) / 10

//Day 862
//fizzbuzz review
function fizzBuzz862(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log('fizzBuzz')
    } else 
    if (i % 5 === 0) {
      console.log('buzz')
    } else 
    if (i % 3 === 0) {
      console.log('fizz')
    } else {
      console.log(i)
    }
  }
}

//Day 863
//review
class Cat extends Animal {
  constructor(species, breed) {
    super(species)
    this.breed = breed
  }
}

//Day 864
//review - PREP with leon
function sumTheArray(arr) {
  return arr.reduce((a,b) => a+ +b, 0)
}

//Day 865
//review - Object.fromEntries()
const entries865 = [
  ['foo', 'bar'],
  ['baz', 42],
];
const obj865 = Object.fromEntries(entries865);
console.log(obj865);  // Expected output: Object { foo: "bar", baz: 42 }

//Day 866
//Object.assign()
const target866 = { a: 1, b: 2 };
const source866 = { b: 4, c: 5 };

const returnedTarget866 = Object.assign(target866, source866);

console.log(target866);  // Expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget866 === target866);  // Expected output: true

//Day 867
function purchase(itemID, money) {
  return player.money -= itemID.cost
}

//Day 868
//Object.keys(obj)
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.keys(object1));// Expected output: Array ["a", "b", "c"]

//Day 869
//review classes
class Frog extends Animal {
  constructor(species, jumpDistance) {
    super(species)
    this.jumpDistance = jumpDistance
  }
}

//Day 870
//Object.values()
const object870 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object870));
// Expected output: Array ["somestring", 42, false]


//Day 871
//Class29

//BoulderBadge 
//variables
let bulbasaurCandies = 16-5
let caterpieCandies = 7-1
let weedleCandies = 7-1
let totalCandy = bulbasaurCandy + caterpieCandy + weedleCandy
console.log(totalCandy)

//conditionals & functions
function fahrenheitToCelcius(tempInF) {
  return (num - 32) * 5 / 9
}
function canHeFight(currentTempInF) {
  return fahrenheitToCelcius > 0 ? "He can fight!" : "It's too cold for him!"
}

//loops
function iChooseLoop(numOfEnemyPokemon) {
  for (let i = 0; i < numOfEnemyPokemon; i++) {
    console.log("Pikachu, I choose you!")
  }
}

//CascadeBadge
function reverseTheList(arr) {
  console.log(arr.reverse())
}

function greaterSum(arr1,arr2) {
  let sumOfArr1 = arr1.reduce((a,b) => a+ b**2, 0)
  let sumOfArr2 = arr2.reduce((a,b) => a+ b**3, 0)
  return sumOfArr1 > sumOfArr2
}

function filter(arr) {
  return arr.filter((el,i) => el % i === 0)
}

function addItUp(arr) {
  return arr.reduce((a,b) => a+ +b, 0)
}

//Day 872
//Class30
class EspressoMachine {
  constructor(make, model, color, price) {
    this.make = make 
    this.model = model
    this.color = color 
    this.price = price 
  }
  start() {
    console.log(`Starting...`)
  }
  stop() {
    console.log('Stopping...')
  }
}
let gaggia = new EspressoMachine('red','Gaggia', 'Classic Pro', 400)

//Day 873
//review - 6
class StateMachine873 {
  constructor({ init, transitions }) {
    this.state = init;
    transitions.forEach(obj => {
      this[obj.method] = () => {
        if (this.state == obj.current) {
          this.state = obj.target
        }
      }
    })
  }
}

//Day 874
//review - parseFloat() - argument is first coerced to a string and leading whitespace is ignored
function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));  // Expected output: 28.695307297889173
console.log(circumference("4.567abcdefgh"));  // Expected output: 28.695307297889173

///Day 875
//review
const months875 = ["Jan", "March", "April", "June"];
months875.splice(1, 0, "Feb");  // Inserts at index 1
console.log(months875);  // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

//Day 876
//7 - sum of integers in string
function sumOfIntegersInString(str) {
  let regex = /\d+/g
  let allNumbers = str.match(regex) || []
  return allNumbers.reduce((a,b) => a+ +b, 0)
}

//Day 877
//review - extending classes
class Cat877 extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

//Day 878
// code what-if:  if i combine my sandrock app's item and character data into one list
let items878 = []
fetch('items.json')
    .then(response => response.json())
    .then(data => {
        items878 = data
        updateSearchResults(); 
    })
    .catch(error => console.error("Error loading data:", error))
fetch('characters.json')
    .then(response => response.json())
    .then(data => {
        items878 = [...items878, data] //this would put the item data and character data into the same array, which I could then sort so it's all together alphabetically
        updateSearchResults(); 
    })
    .catch(error => console.error("Error loading data:", error))

//Day 879
//2704: To Be Or Not To Be
function expect(val) {
  return {
      toBe: function(val2) {
          if (val === val2) {return true} 
          else throw Error ("Not Equal")
      },
      notToBe: function(val2) {
          if (val !== val2) {return true} 
          else throw Error ("Equal")
      }
  }
};

//Day 880
//2665: Counter II
function createCounter(init) {
  let initialValue = init
  let currentValue = init
  return {
      increment: function() {
          return currentValue += 1
      },
      decrement: function() {
          return currentValue -= 1
      },
      reset: function() {
          return currentValue = initialValue
      }
  }
};

//Day 881
//2635:  Apply Transform Over Each Element in Array
function map(arr, fn) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i))
  }
  return result
};

//Day 882
//2634: Filter Elements from Array
function filter(arr, fn) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i],i)) {
          result.push(arr[i])
      }
  }
  return result
};

//Day 883
//review - custom sort
function sort883(arr) {
  let customSort = "A23456789TJQK"
  return arr.sort((a,b) => customSort.indexOf(a) - customSort.indexOf(b))
}

//Day 884
//review 
const months884 = ["Jan", "March", "April", "June"];
months884.splice(1, 0, "Feb");  // Inserts at index 1
console.log(months884);  // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

//Day 885
//2626:  Array Reduce Transformation
function reduce(arr, callback, init = 0) {
  for (let i = 0; i < arr.length; i++) {
    init = callback(init, arr[i])
  }
  return init
}

//Day 886
//review - class constructor
class gbfCharacterMaker886 {
  constructor(name, race, gender, element, ultName) {
    this.name = name 
    this.race = race 
    this.gender = gender, 
    this.element = element,
    this.ultName = ultName 
  }
  ult() {
    return `${this.ultName}!!`
  }
}

//Dau 887
//review class extension
class characterSkills extends gbfCharacterMaker886 {
  constructor (name, race, gender, element, ultName, skill1) {
    super(name, race, gender, element, ultName)
    this.skillOne = skill1
  }
  skill() {
    return this.skillOne
  }
}

//Day 888
//review
const items888 = [1, 2, 3];
console.log(items888); // [1, 2, 3]

const reversedItems888 = items888.toReversed();
console.log(reversedItems888); // [3, 2, 1]
console.log(items888); // [1, 2, 3]

//Day 889
//review
const months889 = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths889 = months889.toSorted();
console.log(sortedMonths889); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months889); // ['Mar', 'Jan', 'Feb', 'Dec']

const values889 = [1, 10, 21, 2];
const sortedValues889 = values889.toSorted((a, b) => a - b);
console.log(sortedValues889); // [1, 2, 10, 21]
console.log(values889); // [1, 10, 21, 2]

//Day 890
//review
function hasScored(str) {
  let cushionCounter = 0
  let ballsHit = new Set()
  for (let i = 0; i < str.length; i++) {
    if ("news".includes(str[i])) {
      cushionCounter++
    } else {
      ballsHit.add(str[i])
    }
    if (ballsHit.size == 2 && ballsHit.has("R")) {
      return cushionCounter >= 3
    }
  }
  return false;
}

//Day 891
//review
const months891 = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
const months891b = months891.toSpliced(1, 0, "Feb");
console.log(months891b); // ["Jan", "Feb", "Mar", "Apr", "May"]

//Day 892
//2629. Function Composition
function compose(functions) {
  return function(x) {
      let current = x
      for (let i = functions.length-1; i >= 0; i--) {
          current = functions[i](current)
      }
      return current
  }
};

//Day 893
//2703. Return Length of Arguments Passed
function argumentsLength(...args) {
  return args.length
};

//Day 894
//review
const array894 = [1, 2, 3];
console.log(array894.unshift(4, 5));// Expected output: 5
console.log(array894);// Expected output: Array [4, 5, 1, 2, 3]

//Day 895
//review - endsWith
function automorphic(num){
  return String(num * num).endsWith(num) ? "Automorphic" : "Not!!"
}

//Day 896
//2666. Allow One Function Call
function once(fn) {
  let hasBeenCalled = false
  let result

  return function(...args){
      if (!hasBeenCalled) {
          result = fn(...args)
          hasBeenCalled = true
          return result
      } else {
          return undefined
      }
  }
};

//Day 897
//review
function customSort897(arr) {
  let desiredOrder = "A23456789TJQK"
  return arr.sort((a,b) => desiredOrder.indexOf(a) - desiredOrder.indexOf(b))
}

//Day 898
//review 
class StateMachine898 {
  constructor({ init, transitions }) {
    this.state = init;
    transitions.forEach((obj) => {
      this[obj.method] = () => {
        if (this.state === obj.current) {
          this.state = obj.target
        }
      }
    })
  }
}

//Day 899
//review
const isBelowThreshold899 = (currentValue) => currentValue < 40;
const array899 = [1, 30, 39, 29, 10, 13];
console.log(array899.every(isBelowThreshold));// Expected output: true

//Day 900
//2623. Memoize
function memoize(fn) {
  let data = {}
  const memoizedFn = function(...args) {
      let key = JSON.stringify(args)
      if (!data.hasOwnProperty(key)) {
          data[key] = fn(...args)
      }
      return data[key]
  }
  return memoizedFn
}

//Day 901
//review
function letterTest(letter) {
  return letter.toUpperCase() !== letter.toLowerCase()
}

//Day 902
//review class extension
class Dog902 extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

//Day 903
//review React - create a component
function Heading(props) {
  return <div>
    <h1>Welcome!</h1>
  </div>
}

//Day 904
//2723. Add Two Promises
var addTwoPromises = async function(promise1, promise2) {
  return await promise1 + await promise2
};

//Day 905
//2621. Sleep
async function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis))
}

//Day 906
//2715
function cancellable(fn, args, t) {
  const cancelFn = function() { clearTimeout(timer) }
  const timer = setTimeout(() => fn(...args), t)
  return cancelFn
};

//Day 907
//review - 7
function lineupStudents(students){
  return students.split(" ").sort((a,b) => b.length - a.length || b.localeCompare(a))
}

//Day 908
//Closures - A closure is when a function "remembers" the variables from its outer scope even after that outer function has finished executing.  
//Closures allow for data encapsulation, private variables, and function factories.

function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
      console.log(`Count is now: ${count}`);
    },
    decrement: function () {
      count--;
      console.log(`Count is now: ${count}`);
    },
    getCount: function () {
      return count;
    },
  };
}
const counter = createCounter();

counter.increment(); // Count is now: 1
counter.increment(); // Count is now: 2
counter.decrement(); // Count is now: 1

console.log(counter.getCount()); // 1
console.log(counter.count); // undefined (can't access `count` directly!)

//Day 909
//review - closure counter
var createCounter = function(num) {
  let timesInvoked = 0
  return function() {
     return num + timesInvoked++
  };
};

//Day 910

const array910 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array910.fill(0, 2, 4));  // Expected output: Array [1, 2, 0, 0]
// Fill with 5 from position 1
console.log(array910.fill(5, 1));  // Expected output: Array [1, 5, 5, 5]

console.log(array910.fill(6));  // Expected output: Array [6, 6, 6, 6]

//Day 911
//review - filter()
const words911 = ["spray", "elite", "exuberant", "destruction", "present"];
const result911 = words911.filter((word) => word.length > 6);
console.log(result911);// Expected output: Array ["exuberant", "destruction", "present"]

//Day 912
//review - map()

const array912 = [1, 4, 9, 16];
const map912 = array912.map((x) => x * 2);
console.log(map912);  // Expected output: Array [2, 8, 18, 32]

//Day 913
//review
function gbfMake913(name, race) {
  this.name = name
  this.race = race
}

//Day 914
//review 
const double914 = (num) => num * 2

//Day 915
//review - reduce()
const array915 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const sumWithInitial915 = array915.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sumWithInitial);  // Expected output: 10

//Day 916
//review
const arr916 = [1,2,3]
arr916.reverse() //should return [3,2,1]

//Day 917
//review
const array917 = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even917 = (element) => element % 2 === 0;
console.log(array.some(even917));// Expected output: true

//Day 918
//review
function trim918(str) {
  return str.split(",").slice(1,-1).join(" ") || null
}

//Day 919
//Review - class extension
class Dog919 extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

//review - array.find() - best for an array of objects
list919.find(x => x.language === "Python")

//Day 920
//Class 31
class Animal920 {
  constructor(name, noise) {
    this.name = name 
    this.noise = noise
  }
  speak() {
    console.log( `${this.name} says ${this.noise}!`)
  }
}

class Wild extends Animal920 {
  constructor(name, noise, naturalHabitat) {
    super(name, noise)
    this.naturalHabitat = naturalHabitat
  }
  speak() {
    super.speak()
    console.log("Wild animal speaks.")
  }
}

class Domestic extends Animal920 {
  constructor(name, noise, job) {
    super(name, noise) 
    this.job = job
  }
}

//   "Why do they have to talk like this!?  Who writes this!?  Fuck it, I'm writin' a book.  This shit is gettin' on my nerves."
//   -Leon, Class 31, in regards to how Polymorphism is explained

//Day 921
//review - Finite State Automata
class StateMachine921 {
  constructor({ init, transitions }) {
    this.state = init;
    for (let obj of transitions) {
      this[obj.method] = () => {
      if (this.state === obj.current) {
        this.state = obj.target
      }
      }
    }
  }
}

//Day 922
//review
const array922 = [1, 2, 3];
const firstElement922 = array922.shift();
console.log(array922); // Expected output: Array [2, 3]
console.log(firstElement922); // Expected output: 1

//Day 923
//7 - Get the current hand
function getCurrentHand(arr) {
  return [...new Set(arr.slice(0, arr.length - 4))].filter(x => !arr.slice(-4).includes(x))
}

//Day 924
//review
function barista(coffees){
  coffees.sort((a,b) => a-b, 0)
  let times = []
  let sum = 0
  for (let i = 0; i < coffees.length; i++) {
    let current = coffees[i] + (i > 0 ? 2 : 0) + sum
    times.push(current)
    sum = current
  }
  return times.reduce((acc,curr) => acc+curr,0)
}

//Day 925
//review 
function hasScored(str) {
  let cushionCounter = 0
  let ballsHit = new Set()
  for (let letter of str) {
    if ("news".includes(letter)) {
      cushionCounter++
    } else {
      ballsHit.add(letter)
    }
    if (ballsHit.size >= 2) {
      return cushionCounter >= 3
    }
  }
  return false;
}

//Day 926
//review
const array926 = ["one", "two", "three"];
console.log(array926);  // ["one", "two", "three"]

const reversed926 = array926.reverse();
console.log(reversed926);  // ["three", "two", "one"]

//Day 927
//class 32 
class Contractor {
  constructor(name, role) {
    this._name = name 
    this._role = role 
  }
  get name() {
    return this._name
  }
  get role() {
    return this._role
  }

  sayHello() {
    console.log(`Hi my name is ${this._name} and I'm on the ${this._role} team!`)
  }
}

class frontEndContractor extends Contractor {
  constructor(name, role, frontEndUnique) {
    super(name,role)
    this.frontEndUnique = frontEndUnique
  }
}

class backEndContractor extends Contractor {
  constructor(name, role, backEndUnique) {
    super(name,role)
    this.backEndUnique = backEndUnique
  }
}

//Day 927
//review
function scramble927(str, arr) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join("")
};

//Day 928
//review - simple letter removal
function solve(str, num){
  let toBeRemoved = str.split("").sort().slice(0,num)
  return toBeRemoved.reduce((prev, curr) => prev.replace(curr, ""), str)
}

//Day 929
//review
const array929 = [1, 2, 3];
const firstElement929 = array929.shift();

console.log(array929);// Expected output: Array [2, 3]
console.log(firstElement929);// Expected output: 1


//Day 930
//2725 - Interval Cancellation
let cancellable = function(fn, args, t) {
  fn(...args)
  let timer = setInterval(() => fn(...args), t)
  function cancelFn() {
     clearInterval(timer) 
  }
  return cancelFn
};

//Day 931
//review - react props
function Card931(props){
  return <div>
    <img src={props.imageURL}></img>
  </div>
}
<Card931 imageURL = "assets/example.png"></Card931>

//Day 932
//review - promises 
function houseOne() {
  return new Promise((res,rej) => {
    setTimeout(() => {
      res(`Paper delivered to house 1`)
    } , 1000)
  })
}
function houseTwo() {
  return new Promise((res,rej) => {
    setTimeout(() => {
      res(`Paper delivered to house 2`)
    } , 5000)
  })
}
function houseThree() {
  return new Promise((res,rej) => {
    setTimeout(() => {
      res(`Paper delivered to house 3`)
    } , 2000)
  })
}
houseOne()
  .then(data => console.log(data))
  .then(houseTwo)
  .then(data => console.log(data))
  .then(houseThree)
  .then(data => console.log(data))
  .catch(err => console.log(err))

//Day 933
//review - classes & static
class Animal933 {
  static planet = "earth"
  constructor(genus, species) {
    this.genus = genus
    this.species = species
  }
}

let creature933 = new Animal933("Homo", "Sapien")
creature933.planet //should return undefined

//Day 934
//Leetcode - 1. Two Sum
//two passes
function twoSum(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], i)
  }
  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.has(complement) && map.get(complement) !== i) {
          return [i, map.get(complement)]
      }
  }
};
//one pass
function twoSum(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.has(complement) && map.get(complement) !== i) {
          return [i, map.get(complement)]
      } else {
        map.set(nums[i], i)
      }
  }
};

//Day 935
//review
function Heading935() {
  return <h1>Welcome!</h1>
}

//Day 936
//review - slice()
const animals936 = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals936.slice(2));// Expected output: Array ["camel", "duck", "elephant"]
console.log(animals936.slice(2, 4));// Expected output: Array ["camel", "duck"]
console.log(animals936.slice(1, 5));// Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals936.slice(-2));// Expected output: Array ["duck", "elephant"]
console.log(animals936.slice(2, -1));// Expected output: Array ["camel", "duck"]
console.log(animals936.slice());// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//Day 937 
function barista(coffees){
  coffees.sort((a,b) => a-b, 0)
  let individualWaitTimes = [coffees[0]]
  for (let i = 1; i < coffees.length; i++) {
    individualWaitTimes.push(coffees[i] + 2 + individualWaitTimes[i-1])
  }
  return individualWaitTimes.reduce((a,b) => a+b, 0) || 0
}

//Day 938
function contact(hallway) {
  const array = hallway.match(/>-*</g)
  return array ? Math.floor(Math.min(...array.map(el => el.length)) / 2) : -1
}

//Day 939
function greet(name) {
  return name ? `hello ${name}!` : null
}

//Day 940
function mostFrequentItemCount(arr) {
  if (arr.length === 0) return 0;
  let counter = {}
  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] = (counter[arr[i]] || 0) + 1
  }
  return Math.max(...Object.values(counter))
}

//Day 941
function distinct(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}

//alternate 

function distinct(arr) {
  let filter = new Set(a)
  return [...filter]
}

//Day 942
function betterThanAverage(classPoints, yourPoints) {
  return (classPoints.reduce((a,b) => a+b,0) / classPoints.length) < yourPoints
}

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

//Day 944
class Ball944 {
  constructor(ballType = "regular") {
    this.ballType = ballType
  }
}

//Day 945
function greet(nameStr) {
  let formattedName = nameStr[0].toUpperCase() + nameStr.slice(1).toLowerCase()
  return `Hello ${formattedName}!`
};

//Day 946
function removeEveryOther(arr){
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result.push(arr[i])
    }
  }
  return result
}

//Day 947
function square(num) {
  return num*num
}

//Day 948
function monkeyCount(n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr
}

//Day 949
class StateMachine949 {
  constructor({ init, transitions }) {
    this.state = init;
    transitions.forEach((el) => {
      this[el.method] = () => {
        if (this.state === el.current) {
          this.state = el.target
        }
      }
    })
  }
}

//Day 950
function getASCII(char){
  return char.charCodeAt(0)
}

//Day 951
function isRubyComing(list) {
  return list.some(entry => entry.language === "Ruby")
}

//Day 952
class Solution952 {
  static main() {
    console.log("Hello World!")
  }
}

//Day 953
function quote(fighter) {
  return fighter.toLowerCase() === "george saint pierre" ? "I am not impressed by your performance." : "I'd like to take this chance to apologize.. To absolutely NOBODY!"
}

//Day 954
function aliasGen(first, last){
  if (first[0].toUpperCase() == first[0].toLowerCase() || last[0].toUpperCase() == last[0].toLowerCase()) {
    return "Your name must start with a letter from A - Z."
  }
  
  return firstName[first[0].toUpperCase()] + " " + surname[last[0].toUpperCase()]
}

//Day 955
function newAvg(arr, newavg) {
  let result = (newavg * (arr.length+1)) - (arr.reduce((a,b) => a+b,0))
  if (result <= 0) {
    throw new Error('Expected New Average is too low')
  } else {
    return Math.ceil(result)
  }
}

//Day 956
function sumDigits(number) {
  return Math.abs(number)
   .toString()
   .split("")
   .map(Number)
   .reduce((a,b) => a+b, 0)
}

//Day 957
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

//Day 958
function findUniq(arr) {
  arr.sort((a,b) => a-b, 0)
  if (arr[0] !== arr[1]) {
    return arr[0]
  } else {
    return arr[arr.length-1]
  }
}

//Day 959
function monkeyCount(num) {
  let result = []
  for (let i = 1; i <= num; i++) {
    result.push(i)
  }
  return result
}

//Day 960
//review
function repVow960(str) {
  let vowels = "aeiouAEIOU"
  let arr = str.split("")
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) 
      arr[i] = "!"
  }
  return arr.join("")
}

//Day 961
function unscrambleEggs(word){
  return word.split("egg").join("")
}

//Day 962
function remove (string) {  
  let str = string.split("")
  for(let i = 0; i < string.length; i++) {
    if (str[str.length-1] === "!") {
      str.pop()
    }
  }
  return str.join("")
}

//Day 963
function sevenAte9(str) {
  let numbers = str.split("")
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 9 && numbers[i-1] == 7 && numbers[i+1] == 7) {
      numbers[i] = ""
    }
  }
  return numbers.join("")
}

//Day 964
class Cat964 extends Animal964 {
  speak() {
    return `${this.name} meows.`
  }
}

//Day 965
function encode(str) {
  //lowercase entire string
  let result = str.toLowerCase().split("")
  //loop through every element of array
  //convert letter to its character code, subtract 96
  result = result.map(el => el.toUpperCase() !== el.toLowerCase() ? el.charCodeAt(0) -96 : el)
  return result.join("")
}

//Day 966

// //P
// two strings, lowercase, no specChars
// //R 
// number - represents how many operations must be done to make the strings equal
// //E
// test, west -> 2 
// test, yes -> 7
// b, ab -> 1
// abc, wasdfetialkjsdabcalskdjfiajlkd -> 30
// were, here -> 2
// //P
// use a counter, starting at 0
// loop iterations = string lengths combined 
// check if strings are === 
// if so, return counter number
// if not, check if 1st string includes 2nd 
// if not, delete first letter of 2nd string 
// if so, delete first letter of first string


function shiftLeft(str1, str2){
  let counter = 0
  let maxIterations = str1.length + str2.length
  let first = str1
  let second = str2
  for (let i = 0; i < maxIterations; i++) {
    if (first === second) {return counter} 
    if (first.includes(second)) {
      first = first.slice(1)
      counter++
    } else {
      second = second.slice(1)
      counter++
    }
  }
  return counter
}

//Day 967
//review
function hasScored(str) {
  let cushionsHit = 0
  let ballsHit = new Set()
  for (let char of str) {
    if ("news".includes(char)) {cushionsHit++}
    else {ballsHit.add(char)}
    if (ballsHit.size == 2 && ballsHit.has("R")) {return cushionsHit >= 3}
  }
  return false
}

//Day 968
function killcount(counselors, jason){
  return counselors.filter((el) => el[1] < jason).map(el => el[0])
}

//Day 969
function comment(text, style) {
    switch (style) {
        case "Bash" : case "Python" : return `# ${text.replace(/\n/g, "\n# ")}`
        case "Bash Multiline"       : return `: "\n${text}\n"`
        case "JavaDoc"              : return `/**\n* ${text.replace(/\n/g, "\n* ")}\n*/`
        case "Python Multiline"     : return `"""\n${text}\n"""`
        case "Javascript"           : return `// ${text.replace(/\n/g, "\n// ")}`
        case "Javascript Multiline" : return `/*\n${text}\n*/`
        case "SGML"                 : return `<!-- ${text.replace(/\n/g, " -->\n<!-- ")} -->`
        case "SQL"                  : return `-- ${text.replace(/\n/g, "\n-- ")}`
        default                     : throw new Error("Unsupported language")
    }
}

//Day 970
function nthterm(first, n, c){
  return first + (n * c)
}

//Day 971
function seqlist(first, constant, length) {
  let result = []
  for (let i = 0; i < length; i++) {
    result.push(first + (i*constant))
  }
  return result
}

//Day 971
class Dog971 extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

//Day 972
function capMe(names) {
  return names.map(el => el[0].toUpperCase() + el.slice(1).toLowerCase())
}

//Day 973
function calculate(str) {

  return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
}

//Day 974
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

//Day 975
function customSort975(arr) {
  let desiredOrder = 'A23456789TJQK'
  return [...arr].sort((a,b) => desiredOrder.indexOf(a) - desiredOrder.indexOf(b))
}

//Day 976
function Heading976() {
  return <h1>Welcome</h1>
}

//Day 977
//7 - Quadrants 2
function quadrantSegment(A, B) {
  function whichQuadrant(coordinate) {
    if (coordinate.x > 0 && coordinate.y > 0) {
      return 1
    } 
    if (coordinate.x < 0 && coordinate.y > 0) {
      return 2
    } 
    if (coordinate.x < 0 && coordinate.y < 0) {
      return 3
    } 
    if (coordinate.x > 0 && coordinate.y < 0) {
      return 4
    } 
  }
  return whichQuadrant(A) !== whichQuadrant(B)
}

//Day 978
//review
function isAnagram978(test, original) {
  let firstWordArr = test.toLowerCase().split("").sort().join("")
  let secondWordArr = original.toLowerCase().split("").sort().join("")
  return firstWordArr === secondWordArr
}

//Day 979
//review
function duckDuckGoose(players, goose) {
  return players[(goose-1) % players.length].name
}

//Day 980
function countDevelopers(list) {
  return list.filter(x => x.continent === "Europe" && x.language === "JavaScript").length
}

//Day 981
function multiplyDigits981(num) {
  return num.toString().split("").map(Number).reduce((a,b) => a*b, 1)
}

//Day 982
//review
function saleHotdogs982(n){
  return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90
}

//Day 983
function greetDevelopers(list) {
  list.forEach(entry => entry.greeting = `Hi ${entry.firstName}, what do you like the most about ${entry.language}?`)
  return list
}

//Day 984
function getFirstPython(list) {
  let result = "There will be no Python developers"
  for (let entry of list) {
    if (entry.language === "Python") {
      result = `${entry.firstName}, ${entry.country}`
      break
    }
  }
  return result
}

//Day 985
//review
class GBFMaker985 {
  constructor(name, race, element, ultName) {
    this.name = name 
    this.race = race 
    this.element = element 
    this.ultName = ultName 
  }
  ult() {
    return `${this.ultName}!`
  }
}

//Day 986
//review 
function bottleCount(num)  {
  for (let i = num; i > 0; i--) {
    console.log(
      `${i} ${i == 1 ? "bottle" : "bottles"} of beer on the wall! ${i} ${i == 1 ? "bottle" : "bottles"} of beer!  Take one down, pass it around, ${i-1} ${i - 1 == 1? "bottle" : "bottles"} of beer on the wall!`
    )
  }
}

//Day 987
//review
function countItUp(arr) {
  let counter = {}
  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] = (counter[arr[i]] || 0) +1
  }
}

//Day 988
class StateMachine988 {
  constructor({ init, transitions }) {
    this.state = init;
    transitions.forEach((el) => {
      this[el.method] = () => {
        if (this.state === el.current) {
          this.state = el.target
        }
      }
    })
  }
}

//Day 989
//review
class Dog989 extends Animal{
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

//Day 990
//review
class StateMachine990 {
  constructor({ init, transitions }) {
    this.state = init;
      for (let obj of transitions) {
        this[obj.method] = () => {
        if (this.state === obj.current) {
          this.state = obj.target
        }
        }
      }
  }
}


//Day 991
class Ball991 {
  constructor(ballType = "regular") {
    this.ballType = ballType
  }
}

//Day 992
//Coding Meetup 5 - https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript
function countLanguages(list) {
  let counter = {}
  for (let i = 0; i < list.length; i++) {
    counter[list[i].language] = (counter[list[i].language] || 0) +1
  }
  return counter
}

//Day 993
//7 - You Complete Me - https://www.codewars.com/kata/63967eb85e54bd00237d2201/solutions/javascript
function complete(str){
  for (let i = 1; i <= str.length; i++) {
    if (str.slice(i) == [...str.slice(i)].reverse().join(''))
    return str + [...str.slice(0,i)].reverse().join('')
  }
}

//Day 994
//7 - Coding Meetup 6 - https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript
function isSameLanguage(list) {
  return list.every((el,i) => el.language === list[0].language)
}

//Day 995
//review 
class StateMachine {
  constructor({ init, transitions }) {
    this.state = init;
    for (let el of transitions) {
      this[el.method] = () => {
        if (this.state == el.current) {
          this.state = el.target
        }
      }
    }
  }
}

//Day 996
//7 - Welcome to the City - https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/javascript
function sayHello( name, city, state ) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}

//Day 997
//7 - https://www.codewars.com/kata/629e4d5f24b98110a83b2d0d/train/javascript
function robberEncode() {
  sentence
    .replace(/[bcdfghjklmnpqrstvwxyz]/g, '$&o$&')
    .replace(/[BCDFGHJKLMNPQRSTVWXYZ]/g, '$&O$&')
}

//Day 998
//8 - Remove Exclamation Marks - https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
function removeExclamationMarks(str) {
  return str.replace(/[!]/g, "");
}
function removeExclamationMarksAlt(str) {
  return str.split("!").join("")
}

//Day 999
//6 - Equal Sides of an Array - https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
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

//Day 1000
const digitRacers = str => {
  const stats =
        [...str]
          .reduce((acc, dgt, idx) =>
             (acc[dgt] = [acc[dgt][0] + 1, idx], acc), Array(10).fill([0]))
          .reduce((acc, [count, idx], dgt, arr) =>
             (acc[count] = [...(acc[count] ?? []), dgt].sort((a, b) => arr[b][1] - arr[a][1]), acc), {});
  
  const result =
        Object.entries(stats)
          .reverse()
          .map(([, dgts], idx, {length: len}) =>
             (idx === len - 1 && stats[0] ? 'Absent digits' : `${idx+1}${['st','nd','rd'][idx] ?? 'th'} place`) + `: ${dgts.join`, `}`); 
                            
  return result.join`\n` + (!stats[0] ? '\nAll digits present' : '');
}

//Day 1001
//7 - Shortest Word - https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
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

//Day 1002
class StateMachine1002 {
  constructor({ init, transitions }) {
    this.state = init;
    transitions.forEach((el) => {
      this[el.method] = () => {
        if (this.state == el.current) {
          this.state = el.target
        }
      }
    })
  }
}

//Day 1003
//review
let alphabetA = "abcdefghijklmnopqrstuvwxyz".split("")
//OR
let alphabetB = "abcdefghijklmnopqrstuvwxyz"
let alphabetArr = [...alphabetB]

//Day 1004
//8 - Lost Without a Map
function maps(x){
  return x.map((x) => x*2)
}

//Day 1005
//8 - Binary Addition - https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
function addBinary(a,b) {
  return (a+b).toString(2)
}

//Day 1006
//8 - Simple Multiplication - https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
function simpleMultiplication(number) {
    return number % 2 === 0 ? number *8 : number *9
}

//Day 1007
//8 - Beginner Series 2: Clock - https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s){
  return ((h*3600) + (m * 60) + s) * 1000
}

//Day 1008
//review 
class StateMachine1008 {
  constructor({ init, transitions }) {
    this.state = init;
    transitions.forEach((el) => {
      this[el.method] = () => {
        if (this.state == el.current) {
          this.state = el.target
        }
      }
    })
  }
}

//Day 1009
//7 - Ones and Zeroes - https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
const binaryArrayToNumber1009 = arr => {
  return parseInt(arr.join(""), 2)
}

//1010
class Dog1010 extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

//Day 1011
//7 - SillyCASE - https://www.codewars.com/kata/552ab0a4db0236ff1a00017a/train/javascript
function sillycase(str) {
  let mid = Math.round(str.length / 2);
  return str.substr(0, mid).toLowerCase() + str.substr(mid).toUpperCase();
}

//Day 1012
//8 - Stay Hydrated! - https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript
function litres(time) {
  return Math.floor(time / 2);
}

//Day 1013
//review - You Can't Code Under Pressure #1
function doubleInteger(i) {
  return i*2;
}

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

//Day 1015
//8 - CSV representation of array - https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/javascript
function toCsvText(array) {
   return array.join('\n');
}

//Day 1016
//8 - Sort My Textbooks - https://www.codewars.com/kata/5a07e5b7ffe75fd049000051/train/javascript
function sorter(textbooks) {
  return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : 
                                  a.toLowerCase() < b.toLowerCase() ? -1  : 0)
}

//Day 1017
//8 - Return the day - https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/javascript
function whatday(num) { 
  switch(num) {
      case 1: return "Sunday"; break;
      case 2: return "Monday"; break;
      case 3: return "Tuesday"; break;
      case 4: return "Wednesday"; break;
      case 5: return "Thursday"; break;
      case 6: return "Friday"; break;
      case 7: return "Saturday"; break;
      default: return "Wrong, please enter a number between 1 and 7"
  }
}

//Day 1018
function unusualFive() {
  return "fucku".length
}

//Day 1019
//8 - 8kyu interpreters: HQ9+ - https://www.codewars.com/kata/591588d49f4056e13f000001/train/javascript
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

//Day 1020
//8 - First non-consecutive number - https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/javascript
function firstNonConsecutive (arr) {
 if (arr.length === 1 || arr === []) {
  return null
 }
 for (let i = 0; i < arr.length -1; i++) {
    if (arr[i] === (arr[i+1]-1)) {
       // carry on
    } else {
      return arr[i+1]
    }
 }
  return null
}

//Day 1021
//String Scramble
function scramble(str, arr) {
  //variable to hold arr result
  let result = []
  //loop through given array
  for (let i = 0; i < arr.length; i++) {
    //put string element in result array at its specific new place
    result[arr[i]] = str[i]
  }
  //return the result array as a string
  return result.join("")
};

//Day 1022
//review
function hasScored1022(str) {
  let ballsHit = new Set()
  let cushionsHit = 0
  for (let i = 0; i < str.length; i++) {
    "news".includes(str[i]) ? cushionsHit++ : ballsHit.add(str[i])
    if (ballsHit.size == 2) {
      return cushionsHit > 2
    }
  }
  return false;
}

//Day 1023
//8 - Geometry Basics: Distance between 2 points - https://www.codewars.com/kata/58dced7b702b805b200000be/train/javascript
function distanceBetweenPoints(a, b) { 
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2)
}

//Day 1024
//review
class StateMachine1024 {
  constructor({ init, transitions }) {
    this.state = init;
    for (let el of transitions) {
      this[el.method] = () => {
        if (this.state == el.current) {
          this.state = el.target
        }
      }
    }
  }
}

//Day 1025 
//8 - find multiples of a number - https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
function findMultiples(integer, limit) {
  let result = []
  for (let i = 1; i <= limit/integer; i++) {
    result.push(integer * i)
  }
  return result
}

//Day 1026
//8 - Exclamation Series 11 - https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript
function replace(s){
  let str = s;
    str = str.replaceAll("a", "!")
    str = str.replaceAll("e", "!")
    str = str.replaceAll("i", "!")
    str = str.replaceAll("o", "!")
    str = str.replaceAll("u", "!")
    str = str.replaceAll("A", "!")
    str = str.replaceAll("E", "!")
    str = str.replaceAll("I", "!")
    str = str.replaceAll("O", "!")
    str = str.replaceAll("U", "!")
  return str
}

//alternate 
function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}

//Day 1027
//8 - Count by X - https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

//Day 1028
//8 - Sum Mixed Array - https://www.codewars.com/kata/57eaeb9578748ff92a000009/solutions/javascript
function sumMix(x){
  return x.reduce((a,b) => a + +b, 0)
}

//Day 1029
//review - basic API
//const express = require("express") or import express from express 
//const App = express()

//App.listen(port, optCallback) {}
//App.get("/api", callbackFunction)

//Day 1030
//8 - Merge two sorted arrays into one - https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript
function mergeArrays(arr1, arr2) {
  let combo = arr1.concat(arr2)
  combo = [...new Set(combo)]
  return combo.sort((a,b) => a-b)
}

//Day 1031
//8 - Switch it Up! - https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript
function switchItUp(number){
  return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][number]
}

//Day 1032
//8 - Remove first and last character - https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/solutions/javascript
function removeChar(str){
  return str.slice(1, -1)
};

//Day 1033
//8 - Surface Area and Volume of Box - https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript
function getSize(width, height, depth) {
  return [((width * depth * 2) + (height * depth * 2) + (width * height * 2)), width * height * depth]
}