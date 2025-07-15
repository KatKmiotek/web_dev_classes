# Module 2: Intro to HTML

---
- [Module 2: Intro to HTML](#module-2-intro-to-html)
  - [Learning Objectives](#learning-objectives)
    - [1. Introduction to HTML](#1-introduction-to-html)
    - [2. HTML Document Structure](#2-html-document-structure)
    - [3. Essential HTML Elements](#3-essential-html-elements)
    - [Text elements](#text-elements)
    - [4. Links and Navigation](#4-links-and-navigation)
    - [5. Images and Media](#5-images-and-media)
    - [6. HTML Forms Basics](#6-html-forms-basics)
    - [7. Tables](#7-tables)
    - [8. Semantic HTML](#8-semantic-html)
    - [9. HTML Attributes](#9-html-attributes)
    - [10. Best Practices and Validation](#10-best-practices-and-validation)

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

### 2. HTML Document Structure
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

### 3. Essential HTML Elements

**Practice**:
1. Add text in index.html file
2. Open index.html file in the default browser
3. Right-click on file > Open in default browser


### Text elements
  - Headings (h1-h6) 
```html
<h1>My heading</h1>
```
  - Paragraphs (p)
```html
<p>a little text here</p>
```
  - Line breaks (br) and horizontal rules (hr)
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

### 4. Links and Navigation
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

### 5. Images and Media
- Image element (img)
- Alt text for accessibility

```html
<img src="http://www.fillster.com/images/pictures/183h.jpg" alt="Dog">
```
- `src` specifies the image URL or file path.
- `alt` provides alternative text for accessibility.
- `width` and `height` set the image size (optional)

### 6. HTML Forms Basics
- Form element and basic structure
- Input types (text, email, password, submit)
- Labels and their importance
- Textarea and select elements
- Form validation basics

### 7. Tables
- When to use tables (data, not layout)
- Table structure (table, tr, td, th)
- Table headers and accessibility
- Caption element

### 8. Semantic HTML
- Importance of semantic markup
- Structural elements
  - Header, nav, main, article, section, aside, footer
- Why semantic HTML matters for SEO and accessibility
- Div vs semantic elements

### 9. HTML Attributes
- Common global attributes (id, class, style)
- Element-specific attributes
- Boolean attributes
- Custom data attributes (data-*)

### 10. Best Practices and Validation
- Code organization and indentation
- Commenting in HTML
- HTML validation tools
- Accessibility considerations
