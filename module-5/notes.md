# Module 5: Introduction to JavaScript

---

## Table of Contents

- [Module 5: Introduction to JavaScript](#module-5-introduction-to-javascript)
  - [Table of Contents](#table-of-contents)
  - [What is JavaScript?](#what-is-javascript)
  - [JavaScript Runtime](#javascript-runtime)
  - [How to Add JavaScript to a Web Page](#how-to-add-javascript-to-a-web-page)
  - [Variables and Data Types](#variables-and-data-types)
  - [Basic Operators and Expressions](#basic-operators-and-expressions)
  - [Functions](#functions)
  - [Conditional Statements](#conditional-statements)
  - [Loops](#loops)
  - [Other data types - Arrays](#other-data-types---arrays)
    - [Function Example: Print All Items in an Array](#function-example-print-all-items-in-an-array)
  - [Exercises](#exercises)
  - [Events and Event Handling](#events-and-event-handling)
  - [The Document Object Model (DOM)](#the-document-object-model-dom)
  - [Practice Exercise](#practice-exercise)

---

## What is JavaScript?

- JavaScript is a programming language that makes web pages interactive.
- It works alongside HTML (structure) and CSS (style) to add dynamic behavior to websites (muscles).
- Examples: responding to button clicks, showing/hiding content, validating forms.

---

## JavaScript Runtime

- **JavaScript runtime** is the environment where your JavaScript code runs.
- In the browser, the runtime includes the JavaScript engine (like Chrome’s V8) and provides access to the web page (DOM), events, and browser APIs.
- JavaScript can also run outside the browser, for example with **Node.js**, which lets you use JavaScript for server-side programming.

---

## How to Add JavaScript to a Web Page

- Use the `<script>` tag in your HTML.
- You can write JavaScript directly in your HTML file or link to an external `.js` file.

**Inline Example:**
```html
<script>
  alert('Hello, JavaScript!');
</script>
```

**External File Example:**
```html
<script src="script.js"></script>
```
- Example in [module-5/examples/variables/index.html](https://github.com/KatKmiotek/web_dev_classes/blob/main/module-5/examples/variables/index.html)
---

## Variables and Data Types

- Variables store information you want to use later.
- Declare variables with `let` or `const`.
- notice naming convention `camelCase`

`**Example:**
```js
let userName = "Sarah";
```
- `let` – keyword to declare a variable (can also use `const` for values that don’t change)
- `name` – variable userName (should be descriptive, uses camelCase)
- `=` – assignment operator (assigns the value on the right to the variable)
- `"Sarah"` – value (in this case, a string)

**More examples:**
```js
const myAge = 38;      // number
let isLoggedIn = true; // boolean
```

- Common data types: string, number, boolean

---

## Basic Operators and Expressions

- Arithmetic: `+`, `-`, `*`, `/`
- Assignment: `=`, `+=`, `-=`
- Comparison: `==`, `===`, `!=`, `>`, `<`

```js
let total = 5 + 3;
let isEqual = (total === 8);
const a = 2;
const b = 1;
const result = a + b; // adding values of variables
```

Example [module-5/examples/variables/script.js](https://github.com/KatKmiotek/web_dev_classes/blob/main/module-5/examples/variables/script.js)

---

## Functions

- Functions are reusable blocks of code.
- Are keys element of programming, allow manipulate data
- Examples [module-5/examples/function/script.js](https://github.com/KatKmiotek/web_dev_classes/blob/main/module-5/examples/function/script.js)

```js
function add() {
  1 + 2; // do operation
}

function add(a, b) { // pass parameters
  a + b; 
}

function add(a, b) {
   const result = a + b;
   return result; // do operation and return value
}

function add(a, b) {
   const result = a + b;
   console.log("results is " + result) // print message
   return result;
}

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alan");

add(1,2)

```
---
## Conditional Statements

- Use `if`, `else if`, and `else` to make decisions.

```js
let age = 18;

function checkAge() {
  if (age > 18) {
    console.log("You are an adult.");
  } else if (age == 18) {
    console.log("You are 18.");
  } else {
    console.log("You are a minor.");
  }
}

checkAge();
```

---

## Loops

- Loops let you repeat actions.

```js
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}
```

---

## Other data types - Arrays

- An **array** is a special variable that can hold more than one value at a time.
- Arrays are useful for storing lists of items, like numbers, names, or objects.
- You can access each item in an array by its index (starting from 0).



**Example:**
```js
let fruits = ["apple", "banana", "orange"];


console.log(fruits[0]); // prints "apple"
console.log(fruits[2]); // prints "orange"
```

### Function Example: Print All Items in an Array

```js
function printArrayItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArrayItems(fruits); // prints each fruit in the array
```
- `arr` is the parameter (the array you pass in)
- `arr.length` gives the number of items in the array
- `arr[i]` accesses each item by its index

---

## Exercises
To be able to run javascript locally we will need to install the runtime - NodeJS.  
Use this link to download or install https://nodejs.org/en/download (again, its free)

1. 

## Events and Event Handling

- Events are actions like clicks, typing, or page load.
- You can make your website respond to events.

```html
<button id="myButton">Click Me!</button>
<script>
  document.getElementById("myButton").onclick = function() {
    alert("Button was clicked!");
  };
</script>
```

---

## The Document Object Model (DOM)

- The DOM represents your web page so JavaScript can change it.
- You can select and modify elements.

```js
document.getElementById("myHeading").textContent = "New Heading!";
```

---

## Practice Exercise

1. Exercise — Inspect variables and console output

- Open the folder `module-5/examples/variables/` and locate `index.html` and `script.js`.
- Read `script.js` and identify examples of the three basic data types: string, number, and boolean. Write down one variable for each type.
- Notice the `console.log()` calls in the file — this is how the script prints messages to the browser Console for debugging.
- In VS Code, open `index.html`, then open it in your default browser (right-click -> "Open in Default Browser").
- Open the browser DevTools and switch to the Console tab.
- Reload the page if needed and observe the messages printed by `script.js` in the Console.

2. Exercise — Explore functions and console output

- Open the folder `module-5/examples/function/` and locate `index.html` and `script.js`.
- Read `script.js` and identify the functions defined there, the parameters they accept, and where `console.log()` is used inside those functions.
- Notice how the functions are called (what arguments are passed) and the order in which the log messages appear.
- In VS Code, open `index.html`, then open it in your default browser.
- Open the browser DevTools and switch to the Console tab.
- Reload the page if needed and observe the console messages printed by `script.js` — these demonstrate function calls, parameters, and accumulated values.
- Try a quick modification: change a number argument in `script.js`, save, and reload the page to see how the Console output changes.
- Add new console log or change functionality of function to multiply instead of adding parameter passed.

