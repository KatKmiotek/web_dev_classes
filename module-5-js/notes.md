# Module 5: Introduction to JavaScript

---

## Table of Contents

- [Module 5: Introduction to JavaScript](#module-5-introduction-to-javascript)
  - [Table of Contents](#table-of-contents)
  - [What is JavaScript?](#what-is-javascript)
  - [JavaScript Runtime](#javascript-runtime)
  - [How to Add JavaScript to a Web Page](#how-to-add-javascript-to-a-web-page)
  - [Variables and Data Types](#variables-and-data-types)
  - [Using the Console (console.log)](#using-the-console-consolelog)
  - [String interpolation](#string-interpolation)
  - [Basic Operators and Expressions](#basic-operators-and-expressions)
  - [Functions](#functions)
  - [Conditional Statements](#conditional-statements)
  - [Other data types - Arrays](#other-data-types---arrays)
    - [Key characteristics:](#key-characteristics)
  - [Loops](#loops)
  - [NodeJS](#nodejs)
  - [Getting data from backend](#getting-data-from-backend)
    - [JSON — data from the backend](#json--data-from-the-backend)
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

## Using the Console (console.log)

The browser Console is where JavaScript can print messages while a page runs. The most common method is `console.log()` — use it to show values, debug code, and verify program flow.

Basic usage:
```js
console.log('Hello world');           // prints a message
const x = 5;
console.log('value of x is', x);     // prints text and variable
console.log(`x doubled is ${x * 2}`); // template literal interpolation
```

- Use `console.log('label', value)` to keep output readable and show multiple values.

## String interpolation

- JavaScript provides *template literals* (strings wrapped in backticks `) that allow embedding expressions directly inside a string using `${...}`. This is often called string interpolation.

**Examples:**
```js
const name = 'Alex';
const score = 42;

console.log(`Hello, ${name}! Your score is ${score}.`);

console.log(`${name} doubled is ${score * 2}`);

```


Short exercise:
- Convert this concatenation into a template literal:  
```js
const a = 'Maria';
const b = 7;
console.log('Student ' + a + ' received ' + b + ' points.');
```
into
```js
console.log(`Student ${a} received ${b} points.`);
```


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
Have a look at example in in module-5/examples/conditions/script.js

---

## Other data types - Arrays

- An **array** is a special variable that can hold more than one value at a time.
- Arrays are useful for storing lists of items, like numbers, names, or objects.

### Key characteristics:

**Elements**: An array is a list of values, known as elements.
```js
let fruits = ["apple", "banana", "orange"];
let names = ["Sam", "Julia", "Helen"]
```

**Ordered**: Array elements are ordered based on their index.

**Zero indexed**: The first element is at index 0, the second at index 1, and so on.
```js
let fruits = ["apple", "banana", "orange"];


console.log(fruits[0]); // prints "apple"
console.log(fruits[2]); // prints "orange"
```

**Dynamic size**: Arrays can grow or shrink as elements are added or removed.
```js
let fruits = ["apple", "banana", "orange"];
fruits.push("pear") // push add at the end or array
console.log("fruits - pear is added", fruits)
fruits.pop() // removes last element of array
```

**Array methods**: There are many array in-build functions like length that give us number of elements in the array
```js
let size = fruits.length;
```
(Optional) For more arrays methods please see [W3Schools](https://www.w3schools.com/js/js_array_methods.asp) materials.  

If you wish to practice example script is located [module-5-js/examples/iterator/array](https://github.com/KatKmiotek/web_dev_classes/blob/main/module-5-js/examples/iterator/array/script.js)


---

## Loops

- Loops let you repeat actions multiple times
- `for` loop has below parts:
```js
// expression 1 - declares variable like let = 0;
// expression 2 - defines condition like i < 5;
// expression 3 - is executed every time i++ ( or i + 1);
// notice ; at the end of each expression
for (exp 1; exp 2; exp 3) {
  // code block to be executed like: console.log("hello")
}
```
Example:  
```js
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}
```

When we don't use index (in example above `i`) we can use use `for of` loop:
```js
let fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log("The fruit is: ", fruit)
}
```


Have a look at example 1 and 2 in file: [module-5-js/examples/iterator/loop/](https://github.com/KatKmiotek/web_dev_classes/blob/main/module-5-js/examples/iterator/loop/script.js)

---

## NodeJS
To be able to run javascript locally we will need to install the runtime - NodeJS.  
Use this link to download or install https://nodejs.org/en/download (again, its free)

---

## Getting data from backend
Frontend is about getting data and displaying data. Data was our array of fruits that we were printing in the console, data was state of our wallet with money collected from 5 people. Its rarely that website uses `static` / `hardcoded` data as we did so far instead of it gets it from data source that usually is a backend of application. In module 1 we were talking about frontend and backend of website and what is responsible for what. Now we look into how Frontend connects with backend. 

### JSON — data from the backend

When a web server sends data to your browser it usually uses the JSON format. JSON stands for JavaScript Object Notation.  

Key points:
- JSON uses double quotes for keys and string values: `{ "title": "Hello" }`.
- The two most common top-level JSON shapes are:
  - An object (curly braces) — a collection of named fields:
    ```json
    { "id": 1, "title": "A short walk", "distance": "short" }
    ```
  - An array (square brackets) — an ordered list of items (often an array of objects):
    ```json
    [
      {
        "id": 1,
        "title": "A short walk",
        "distance": "short"
      },
      {
        "id": 2,
        "title": "The Cobbler",
        "distance": "long"
      },
      {
        "id": 3,
        "title": "The 3 Loch Way",
        "distance": "long"
      }
    ]
    ```
This allows are grouping relevant data into one object.  

Let's look at examples:
**Local data example**  
1. Have a look at `examples/fetch/script.js`
2. From top nav in VS Code select Terminal -> New Terminal
3. Note: we execute this script in terminal not in the browser as `require` function is available only in NodeJS runtime
4. Type in terminal `node module-5-js/examples/fetch/script.js`
5. Let's see where we get data from?

**Data from Backend**  
1. Have a look at `examples/fetch/advanced.js`
2. Use the url included there and paste it in the browser
3. There is data and has shape of JSON
4. Now open index.html in default browser and see console output
5. What we can print there? What keys we have available?  

**Exercise:**
Have a look at `module-5-js/examples/fetch/practice/local/script.js`. You will find a exercise there with detailed description of steps. Please expand on requirements yourself as you go through the task. 

**Backend API**
Let's look at backend data, we will call it API (Application Programming Interface), we will look at two free APIs and go through its documentation to understand how to build URL to query data and then we will use it in `module-5-js/examples/fetch/practice/backend/script.js`

Trivia API: https://opentdb.com/  
REST Countries API: https://restcountries.com/


---

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

1. **Exercise — Inspect variables and console output**

- Open the folder `module-5/examples/variables/` and locate `index.html` and `script.js`.
- Read `script.js` and identify examples of the three basic data types: string, number, and boolean. Write down one variable for each type.
- Notice the `console.log()` calls in the file — this is how the script prints messages to the browser Console for debugging.
- In VS Code, open `index.html`, then open it in your default browser (right-click -> "Open in Default Browser").
- Open the browser DevTools and switch to the Console tab.
- Reload the page if needed and observe the messages printed by `script.js` in the Console.

2. **Exercise — Explore functions and console output**

- Open the folder `module-5/examples/function/` and locate `index.html` and `script.js`.
- Read `script.js` and identify the functions defined there, the parameters they accept, and where `console.log()` is used inside those functions.
- Notice how the functions are called (what arguments are passed) and the order in which the log messages appear.
- In VS Code, open `index.html`, then open it in your default browser.
- Open the browser DevTools and switch to the Console tab.
- Reload the page if needed and observe the console messages printed by `script.js` — these demonstrate function calls, parameters, and accumulated values.
- Try a quick modification: change a number argument in `script.js`, save, and reload the page to see how the Console output changes.
- Add new console log or change functionality of function to multiply instead of adding parameter passed.

