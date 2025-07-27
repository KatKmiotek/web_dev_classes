# Module 2: Intro to HTML

---
- [Module 2: Intro to HTML](#module-2-intro-to-html)
  - [Learning Objectives](#learning-objectives)
    - [1. Introduction to HTML](#1-introduction-to-html)
    - [2. What is an HTML Tag?](#2-what-is-an-html-tag)
      - [How Does an HTML Tag Work?](#how-does-an-html-tag-work)
      - [What Constructs an HTML Tag?](#what-constructs-an-html-tag)
    - [3. HTML Document Structure](#3-html-document-structure)
    - [4. Essential HTML Elements](#4-essential-html-elements)
    - [5. Inputs](#5-inputs)
    - [6. Buttons](#6-buttons)
    - [7. Links and Navigation](#7-links-and-navigation)
    - [8. Images and Media](#8-images-and-media)
    - [9. HTML Attributes](#9-html-attributes)
    - [10. Other Common HTML Tags](#10-other-common-html-tags)
    - [11. What is Semantic HTML?](#11-what-is-semantic-html)
    - [12. Accessibility in HTML](#12-accessibility-in-html)

---

## Learning Objectives
- Understand what HTML is and its role in web development
- Create basic HTML documents with proper structure
- Use common HTML elements effectively
- Implement semantic HTML for better accessibility and SEO
- Validate and debug HTML code

### 1. Introduction to HTML
- What is HTML? (HyperText Markup Language)
- HTML's role in the web development stack (structure vs styling vs behavior)

**Practice**:
1. Create folder on Desktop called web-dev
2. Open folder in VS Code
3. In VS Code create folder module-2

### 2. What is an HTML Tag?

An **HTML tag** is a special code used to tell the web browser how to display content on a web page. Tags are the building blocks of every HTML document.

#### How Does an HTML Tag Work?

- **Tags are written inside angle brackets:** `< >`
- Most tags come in pairs: an **opening tag** and a **closing tag**
  - The opening tag starts the element, e.g. `<p>`
  - The closing tag ends the element, e.g. `</p>` (note the `/`)
- The content goes between the opening and closing tags

**Example:**
```html
<p>This is a paragraph.</p>
```
- `<p>` is the opening tag for a paragraph
- `</p>` is the closing tag
- `This is a paragraph.` is the content

#### What Constructs an HTML Tag?

- **Tag name:** The type of element (e.g. `h1`, `p`, `img`)
- **Attributes (optional):** Extra information inside the opening tag, like `src` for images or `href` for links

**Example with attributes:**
```html
<img src="cat.jpg" alt="A cute cat">
```
- `<img>` is the tag name for images
- `src` and `alt` are attributes that give more details

**Summary:**  
HTML tags tell the browser what each part of your page is and how it should look or behave. Every visible thing on a web page—headings, paragraphs, images, links—is created using HTML tags.


### 3. HTML Document Structure
**Practice**:
1. In VS Code in folder module-2 create file called index.html
2. Type **!** and press return
3. This should populate file with boilerplate of HTML file.

   
- DOCTYPE declaration
- HTML element and lang attribute
- Head section and its contents
  - Title element
  - Meta tags (charset, viewport)
  - Link tags for external resources
- Body section - content will go here
- Proper document structure and nesting

### 4. Essential HTML Elements

**Practice**:
1. Add text in index.html file
2. Open index.html file in the default browser
3. Right-click on file > Open in default browser


  - Headings (h1-h6) 
```html
<h1>My heading</h1>
```
  - Paragraphs (p)
```html
<p>a little text here</p>
```
  - Line breaks (br) - self closing tag

```html
</br>
```
- Text formatting
  - Bold (strong) and italic (em)
```html
<strong>Important text here</strong>
<em>Italic text</em>
```
- Lists
  - Unordered lists (ul)
  - Ordered lists (ol)
  - List items (li)

```html
<p>Shopping list</p>
<ul>
  <li>fruits </li>
  <li>water</li>
</ul>  


<p>Shopping list</p>
<ol>
  <li>fruits </li>
  <li>water</li>
</ol> 
```
### 5. Inputs
- Input elements allow users to enter data into forms.
- Common types: text, email, password, number, etc.

A **label** in HTML is used to describe what an input field is for. Labels make forms easier to use and more accessible, especially for screen readers.

**How to use a label with an input:**
- Use the `<label>` tag to describe the input.
- Connect the label to the input using the `for` attribute on the label and the `id` attribute on the input.  
- When you click the label, the corresponding input is focused.

```html
<label for="name">What is your name?</input>
<input id="name" type="text" placeholder="Your name">

<label for="fruit">Choose a fruit:</label>
<select id="fruit" name="fruit">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="orange">Orange</option>
</select>
```
- `type="email"` ensures the input is a valid email address.
- `type="number"` ensures valid number is provided as an input.
- `select` creates a dropdown menu with options.

### 6. Buttons

- Button elements are used to create clickable buttons in forms or on web pages.

```html
<button>Click Me</button>

<button type="submit">Submit</button>

<button>Save</button>
```
- `type="submit"` is used to submit a form.


### 7. Links and Navigation
- Anchor elements (a)
- Linking to external sites
- Internal page navigation with anchors
- Email and phone links
```html
<a href="https://www.example.com" target="_blank">Visit Example Website</a>
```
- `href` specifies the URL.
- `target="_blank"` opens the link in a new tab.

```html
<!-- Link to a section with id="about" -->
<a href="#about">Go to About Section</a>

<!-- Somewhere else in your HTML -->
<h2 id="about">About Us</h2>
<p>This is the about section.</p>
```

```html
<a href="mailto:someone@example.com">Send Email</a>
```

### 8. Images and Media
- Image element (img)
- Alt text for accessibility

```html
<img src="http://www.fillster.com/images/pictures/183h.jpg" alt="Dog">
```
- `src` specifies the image URL or file path.
- `alt` provides alternative text for accessibility.
- `width` and `height` set the image size (optional)



### 9. HTML Attributes

- **Attributes** provide extra information about HTML elements.
- They are always included in the opening tag and usually come in name/value pairs like `name="value"`.
- Common attributes:  
  - `href` for links  
  - `src` for images  
  - `alt` for images  
  - `id` and `class` for identifying and styling elements
- You can use the `style` attribute to add CSS directly to an element (inline styling), but it’s better to use separate CSS for larger projects.

**Example:**
```html
<p class="highlight" id="intro" style="color: blue;">This is a highlighted paragraph.</p>
```
- `class` and `id` are often used with CSS to style elements.

---

### 10. Other Common HTML Tags

- `<div>`: Generic container for grouping content
- `<span>`: Inline container for text
- `<hr>`: Horizontal rule (line)
- `<table>`, `<tr>`, `<td>`, `<th>`: For tables
- `<form>`, `<input>`, `<textarea>`, `<button>`: For forms
- `<nav>`: Navigation links
- `<header>`, `<footer>`, `<main>`, `<section>`, `<article>`: Semantic containers

**Example:**
```html
<div>
  <h2>Contact Info</h2>
  <p>Email: <a href="mailto:someone@example.com">someone@example.com</a></p>
</div>
```

---

### 11. What is Semantic HTML?

- **Semantic HTML** means using HTML tags that describe the meaning of the content, not just how it looks.
- Examples:  
  - `<header>` for page or section headers  
  - `<nav>` for navigation menus  
  - `<main>` for the main content  
  - `<section>` for thematic grouping  
  - `<article>` for independent content  
  - `<footer>` for page or section footers

**Why use semantic HTML?**
- Makes your code easier to read and maintain
- Helps search engines understand your content (better SEO)
- Improves accessibility for screen readers and assistive technologies

**Example:**
```html
<main>
  <article>
    <h2>News Story</h2>
    <p>This is an article about something important.</p>
  </article>
</main>
```

---

### 12. Accessibility in HTML

- **Accessibility** means making your website usable for everyone, including people with disabilities.
- Use semantic tags so assistive technologies can interpret your content correctly.
- Always provide `alt` text for images.
- Use labels for form inputs.
- Ensure good color contrast and keyboard navigation.
- Use headings (`<h1>`, `<h2>`, etc.) in a logical order.
- Good accessibility helps everyone and is often required by law for public websites.
