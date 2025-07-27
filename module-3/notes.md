# Module 3: Introduction to CSS

- [Module 3: Introduction to CSS](#module-3-introduction-to-css)
  - [What is CSS?](#what-is-css)
  - [Why Use CSS?](#why-use-css)
  - [How to Add CSS to Your HTML](#how-to-add-css-to-your-html)
    - [1. Inline CSS](#1-inline-css)
    - [2. Internal CSS](#2-internal-css)
    - [3. External CSS](#3-external-css)
  - [Basic CSS Syntax](#basic-css-syntax)
  - [Practice](#practice)


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

---

## Practice

1. Create a new file called `styles.css` in your project folder.
2. Link it to your HTML file using the `<link>` tag.
3. Try changing the background color, text color, and font size of your headings and paragraphs.

---

