# Module 5: Introduction to JavaScript

---

## Table of Contents

- [Module 5: Introduction to JavaScript](#module-5-introduction-to-javascript)
  - [Table of Contents](#table-of-contents)
  - [What is JavaScript?](#what-is-javascript)
  - [How to Add JavaScript to a Web Page](#how-to-add-javascript-to-a-web-page)
  - [Variables and Data Types](#variables-and-data-types)
  - [Basic Operators and Expressions](#basic-operators-and-expressions)
  - [Functions](#functions)
  - [Events and Event Handling](#events-and-event-handling)
  - [The Document Object Model (DOM)](#the-document-object-model-dom)
  - [Conditional Statements](#conditional-statements)
  - [Loops (Optional)](#loops-optional)
  - [Practice Exercise](#practice-exercise)

---

## What is JavaScript?

- JavaScript is a programming language that makes web pages interactive.
- It works alongside HTML (structure) and CSS (style) to add dynamic behaviour to websites (muscles).
- Examples: responding to button clicks, showing/hiding content, validating forms.

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

---

## Variables and Data Types

- Variables store information you want to use later.
- Declare variables with `let` or `const`.

```js
let name = "Sarah";
const age = 38;
let isLoggedIn = true;
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
```

---

## Functions

- Functions are reusable blocks of code.

```js
function greet(name) {
  alert("Hello, " + name + "!");
}

greet("Alan");
```

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

## Conditional Statements

- Use `if`, `else if`, and `else` to make decisions.

```js
let age = 18;
if (age >= 18) {
  alert("You are an adult.");
} else {
  alert("You are a minor.");
}
```

---

## Loops (Optional)

- Loops let you repeat actions.

```js
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}
```

---

## Practice Exercise

1. Add a button to your HTML page. Write JavaScript to show an alert when it’s clicked.

