// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer: The string will be turned into an array of each character. 
// b) Verify and explain: The argument in the .split method was ("") telling the method to split each string by individual characters into an array


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Undefined, the console is logging the function greeter. The function does not have a return statement inside it so it will not result when an argument is given to it.

// b) Verify and explain: The function greeter takes an argument of name as its parameter, that name entered is then referenced by the function to be inserted into a fixed message with a name variable. The console log is undefined because the function it was requested to log does not return an output. 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: This will return a new array of [8, 10, 12, 14, 16]
// b) Verify and explain: The .map method will perform an action on each index resulting in a new array. 


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: This will return an array of the numbers that are not divisible by two, therefore being odd. 
// b) Verify and explain: Using % 2 !== 0 the filter method checks if the current value is divisible by two, if there is no remainder it is = 0 (being even), if there is a remainder it is now implied to be an odd number. 


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: This will log the string "JavaScript"
// b) Verify and explain: The console returns Javascript because it is calling up the object myCodingSkills and referring to the subcategory of languages by adding (.languages) and finally referencing what index value in the 'languages' array will return by 0 being the first position.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: This will create an instance of the class Learn by making a new object called learnStudent returning { George, Bravo, 2022 } 
// b) Verify and explain: using the command "new Learn" when declaring the variable learnStudent will force a new instance of that class' object to be created, by adding an argument of ("George") will command the class to inherit the new value for the key this.student in the original class "Learn"



                            // // JEST \\ \\
// PASS  ./code-challenges.test.js
// numberDivisibleBy3
//   ✓ takes a number as an argument and decides if the number is evenly divisible by three or not. (1 ms)
// capitalString
//   ✓ takes in an array of words and returns an array with all the words capitalized.
// vowelCounter
//   ✓ takes in a string and logs the index of the first vowel

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.141 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.84s.