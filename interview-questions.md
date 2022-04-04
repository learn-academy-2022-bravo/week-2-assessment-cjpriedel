# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: A parameter can server as the guidelines for a function when defining it. The parameters tell the function what to do with variable values inside the function

  Researched answer: A parameter is listed as a variable inside the () of a function when defining it. A argument is the value given to the () to run in place of the parameter variable.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer:  .map takes predefined parameters to initiate its built in iteration. Function and Current Value are required parameters, the optional parameters are Index, Array, or This Value.

  Researched answer: .map syntax is typically : array.map(function(currentValue, index, arr), thisValue). The only required parameters being Function and Current Value. 

  Function: Performs a function on each element 
  Current Value: current value of an element
  Index: index of current element
  Arr: array of current element
  This Value: Default = undefined, a value give to the function for this parameter will be used as "thisValue"



3. What is the difference between map and filter?

  Your answer: filter returns an array of values that are true based on the parameters given to the original array. Map takes a function/action for the argument and returns a new array after applying the action to each value in the original array

  Researched answer: A filter method only produces a subset array containing desired elements from the original array. The map method produces a new array, resulting from an action taken on each element in the original array.



4. What is the difference between a function and a method?

  Your answer: A function is a block of code that executes on an object/creates an object where a method is similar to a function but specifically for applying functions onto functions. 

  Researched answer: A function is a block of code made to perform a certain task(s) and a method is a property of an object that is a function 



5. What is object destructuring?

  Your answer: object destructuring is taking the values out of an object by assigning them to a variable that can be recalled

  Researched answer: A unique way to create variables in javascript by extracting and objects values as recallable variables.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I would guess it refers to the way JavaScript code interacts with 'React Hooks' because it is being 'hoisted' onto React hooks?

  Researched answer: "JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared." (from developer.mozilla.org)

  My understanding is that hoisting means taking all the globally defined variables and giving them to whatever Javascript is being hoisted on so they are stored 'locally' to reduce run errors.




## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: Class inheritance refers to the process of creating a new class that calls up an earlier class, using its values and adding to them using extend. 

2. React: React is a JavaScript library created by Facebook for User Interface and component creation

3. React state: A React state is an object where a components property is stored

4. React lifecycle methods: The lifecycle of Mounting -> Updating -> Unmounting is in three phases, each where you can monitor/manipulate a react component. Using the methods : 

constructor()
- called with props, as an argument, start with super(props)

getDerivedStateFromProps()
- called prior to rendering elements in DOM, takes state as an argument and returns the object with changes to the state

render()
- the method that outputs HTML to the DOM 

componentDidMount()
- called after Render, requires component already to be in the DOM

5. DOM: This is the document object model, it lays out how a documents content is accessed through a hierarchical structure. 
