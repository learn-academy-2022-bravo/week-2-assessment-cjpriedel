// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// // a) Create a test with expect statements for each of the variables provided.

// const numArr1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numArr2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// // b) Create the function that makes the test pass.

// it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
//     const numArr1 = [6, 7, 8, 9, 10]
//     const numArr2 = [24, 27, 30, 33, 36]
//      expect(multBy3(numArr1)).toEqual([18, 21, 24, 27, 30])
//      expect(multBy3(numArr2)).toEqual([72, 81, 90, 99, 108])
//    })
 
// const multBy3 = (array) => {
//    return array.map(value => value * 3)
// } 


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("numberDivisibleBy3", () => {
    it("takes a number as an argument and decides if the number is evenly divisible by three or not.", () => {
        expect(numberDivisibleBy3("is divisible by three")).toEqual("is not divisible by three")
        const num1 = 15
        const num2 = 0
        const num3 = -7
        })
}) 
// // Expected output: "15 is divisible by three"
// // Expected output: "0 is divisible by three"
// // Expected output: "-7 is not divisible by three"


// // b) Create the function that makes the test pass.

//PseudoCode
    //create function to evaluate each numbers remainder after dividing by 3
        // conditional statement, IF number % 3 = 0 then return true (divisible by 3)
        // if not, return false  
            //include speicific case for 0, cannot divide by 0

const numberDivisibleBy3 = (number) => {
    if (number === 0){
      return "you cannot divide by zero"
    } else if(number % 3 === 0 ){
    return " is divisible by 3"
     } else {
        return "is not divisible by three"
    }
  }
const num1 = 15
const num2 = 0
const num3 = -7
console.log(numberDivisibleBy3(num1))
console.log(numberDivisibleBy3(num2))
console.log(numberDivisibleBy3(num3))


// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capitalString", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
      const randomNouns1 = []
      const randomNouns2 = []
      expect(capitalString(randomNouns1))
      expect(capitalString(randomNouns2))
    })
  })

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// // b) Create the function that makes the test pass.

//PseudoCode
  //create function to map new array with the first letter of each word capitalized
    // use .map to evaluate the array
        //use .map to create new array by returning the 1st character of each word with .toUpperCase()
        // concat that return value with remainder of string.


const capitalString = (string) => {
    return string.map(value=> {
      return value.charAt(0).toUpperCase() + value.substring(1);
    })
  }

console.log(capitalString(randomNouns1))


// // b) Create the function that makes the test pass.

// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
    it("takes in a string and logs the index of the first vowel", () => {
      const vowelTester1 = []
      const vowelTester2 = []
      const vowelTester3 = []
      expect(firstVowel(vowelTester2))
      expect(firstVowel(vowelTester3))
      expect(firstVowel(vowelTester1))
    })
  })

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// // b) Create the function that makes the test pass.

//PseudoCode
  //create array for all vowels
  // create a function that examines an array at each index value
  // test each index value T/F if = vowel
    // .map to evaluate the array at each index 
    // edit - use for loop
    // use .push to return the index value of the first vowel
    // .sort to sort elements as strings in order and return the index 0

const vowels = ['a', 'e', 'i', 'o', 'u'];

const firstVowel = (value) => {
  let numberOfVowels = []
  for(let i = 0; i <= value.length ; i++) {
    if (vowels.indexOf(value[i]) >= 0){
      numberOfVowels.push(i);
    }
  } 
  return numberOfVowels.sort()[0]
}