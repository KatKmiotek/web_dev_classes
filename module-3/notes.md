# Module 3: Introduction to CSS

- [Module 3: Introduction to CSS](#module-3-introduction-to-css)
  - [What is CSS?](#what-is-css)
  - [Why Use CSS?](#why-use-css)
  - [How to Add CSS to Your HTML](#how-to-add-css-to-your-html)
    - [1. Inline CSS](#1-inline-css)
    - [2. Internal CSS](#2-internal-css)
    - [3. External CSS](#3-external-css)
  - [Basic CSS Syntax](#basic-css-syntax)
  - [Exercise: Style a Simple HTML Box](#exercise-style-a-simple-html-box)
  - [CSS Specificity](#css-specificity)
    - [What is Specificity?](#what-is-specificity)
  - [Colors in CSS](#colors-in-css)
    - [1. Color Names](#1-color-names)
    - [2. Hexadecimal Codes](#2-hexadecimal-codes)
    - [3. RGB and RGBA](#3-rgb-and-rgba)
    - [4. HSL and HSLA](#4-hsl-and-hsla)
  - [Units in CSS: px, em, rem, %](#units-in-css-px-em-rem-)
    - [1. px (Pixels)](#1-px-pixels)
    - [2. em](#2-em)
    - [3. rem (Root em)](#3-rem-root-em)
    - [4. % (Percent)](#4--percent)


## What is CSS?

**CSS** stands for **Cascading Style Sheets**. It is a language used to describe the style and layout of web pages — how HTML elements should look on the screen.

- CSS controls **colors**, **fonts**, **spacing**, **borders**, **layout**, and more.
- It separates content (HTML) from presentation (CSS), making websites easier to maintain and update.

---

## Why Use CSS?

- Makes your website look attractive and professional
- Allows you to apply consistent styles across multiple pages
- Makes it easy to update the look of your site without changing HTML

---

## How to Add CSS to Your HTML

There are three main ways to include CSS in your web pages:

### 1. Inline CSS

Add the `style` attribute directly to an HTML element. We mentioned it at the end of module 2

```html
<p style="color: blue;">This text is blue.</p>
```

### 2. Internal CSS

Add a `<style>` block inside the `<head>` section of your HTML file. Please see examples folder in this module for `one.html`

```html
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
```

### 3. External CSS

Create a separate `.css` file and link it in your HTML. This is allows sharing styles across multiple pages. In examples folder file `two.html` and `styles-two.css`

**index.html**
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

**styles.css**
```css
p {
  color: red;
}
```

---

## Basic CSS Syntax

```css
selector {
  property: value;
}
```

**Example:**
```css
h1 {
  color: purple;
  font-size: 36px;
}
```

Let's have a look at `three.html` - applying styles to HTML tag

---

## Exercise: Style a Simple HTML Box

**Task:**  
Create a simple HTML page with a box (a `<div>`) that contains some text.  
Use CSS to add the following styles to the box:
- A border
- Some padding inside the box
- A background color

**Example HTML:**
```html
<div class="my-box">
  <h2>Hello, CSS!</h2>
  <p>This is a styled box. Try changing the border, padding, or background color in the CSS.</p>
</div>
```

**Example CSS:**
```css
.my-box {
  border: 2px solid #2a5298;
  padding: 20px;
  background-color: #e3ecfa;
  border-radius: 8px;
}
```

**What to do:**
1. Copy the HTML and CSS into your own files. (use example `four.html`)
2. Change the border color, thickness, or style.
3. Try different padding values.
4. Experiment with different background colors.
5. Add more content or try changing the border radius.

**Bonus:**  
Try adding a hover effect that changes the background color when you move your mouse over the box!
```css
.my-box:hover {
  background-color: #b3c6e7;
}
```


## CSS Specificity

Why CSS is difficult?  

CSS specificity can be tricky because multiple rules can apply to the same element, and it’s not always obvious which rule will "win." The browser uses a system called **specificity** to decide which styles to apply.

### What is Specificity?

**Specificity** is a set of rules browsers use to determine which CSS selector has the most "weight" and should be applied when multiple selectors target the same element.

**Order of specificity (from lowest to highest):**
1. **Element selectors** (e.g. `p`, `h1`)
2. **Class selectors** (e.g. `.my-class`)
3. **Attribute selectors** (e.g. `[type="text"]`)
4. **ID selectors** (e.g. `#my-id`)
5. **Inline styles** (e.g. `<div style="color: red;">`)
6. **!important** (overrides almost everything, but should be avoided if possible)

Let's have a look at `five.html` in examples folder and guess what will be the colour of paragraph.

---

## Colors in CSS

CSS allows you to set colors for text, backgrounds, borders, and other elements. There are several ways to specify colors in CSS:

### 1. Color Names

You can use predefined color names like `red`, `blue`, `green`, `orange`, etc.

```css
p {
  color: blue;
  background-color: yellow;
}
```

### 2. Hexadecimal Codes

Hex codes start with `#` and are followed by 3 or 6 hexadecimal digits.

```css
h1 {
  color: #2a5298;
}
```

### 3. RGB and RGBA

RGB stands for Red, Green, Blue. You can also use RGBA, where the "A" stands for alpha (opacity).

```css
div {
  color: rgb(255, 0, 0);
  background-color: rgba(0, 0, 255, 0.2);
}
```

### 4. HSL and HSLA

HSL stands for Hue, Saturation, Lightness. HSLA adds alpha (opacity).

```css
button {
  background-color: hsl(120, 60%, 70%);
  color: hsla(0, 100%, 50%, 0.7);
}
```

---

**Tip:**  
- Use `color` for text color.
- Use `background-color` for the background of an element.
- You can experiment with different color formats to get the exact look you want!


---

## Units in CSS: px, em, rem, %

When you set sizes in CSS (like font size, width, margin, or padding), you need to specify a unit. Here are the most common ones:

### 1. px (Pixels)
- **Absolute unit** — always the same size, regardless of screen or parent element.
- Example: `font-size: 16px;` sets the font to 16 pixels high.

### 2. em
- **Relative unit** — based on the font size of the element’s parent.
- Example: If the parent has `font-size: 20px;`, then `font-size: 2em;` will be 40px.
- Useful for scaling elements together.

### 3. rem (Root em)
- **Relative unit** — based on the font size of the root element (`<html>`).
- Example: If `html { font-size: 16px; }`, then `font-size: 1.5rem;` is 24px, no matter where it’s used.

### 4. % (Percent)
- **Relative unit** — based on the size of the parent element.
- Example: `width: 50%;` makes the element half as wide as its parent.

---

**Tip:**  
- Use `px` for precise, fixed sizes.
- Use `em` and `rem` for scalable, responsive designs.
- Use `%` for layouts that adapt to their container.
