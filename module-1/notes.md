# Module 1: Introduction to Web Development
[slides for Module 1](https://docs.google.com/presentation/d/1S7UAtsIWeH-Jw4yvoYcIB1abePk_Ln07ZGi-VyrONro/edit?usp=sharing)

---

## 1. Frontend of the Application

**What is Frontend?**  
The frontend (also called "client-side") is everything users see and interact with in their web browser. Think of it as the "face" of a website or web application.

**Key Characteristics:**
- Runs in the user's web browser
- Handles user interactions (clicks, typing, scrolling)
- Displays content, images, and interface elements
- Responds to user actions immediately

**Examples of Frontend Elements:**
- Buttons you click
- Forms you fill out
- Navigation menus
- Images and text you see
- Animations and visual effects

---

## 2. Backend of the Application

**What is the Backend?**  
The backend (also called "server-side") is the behind-the-scenes part that users never see directly. It handles data processing, storage, and business logic.

**Key Responsibilities:**
- Stores and manages data (user accounts, content, etc.)
- Processes user requests
- Handles security and authentication
- Manages business rules and logic
- Communicates with databases

**Examples of Backend Tasks:**
- User login verification
- Saving form data to a database
- Processing payments
- Sending emails
- Managing user permissions

---

## 3. Frontend and Backend Communication

**Client vs Server Relationship**
- **Client:** The user's device (computer, phone, tablet) running a web browser
- **Server:** A powerful computer that stores and serves website files
- **Communication:** The client requests information, the server responds

**Finding Servers on the Internet**
- **IP Addresses:** Every device on the internet has a unique address (e.g., `192.168.1.1` or `216.58.194.174`) – like a postal address for computers
- **Domain Names:** Human-friendly names like `google.com` or `amazon.com`
- **DNS (Domain Name System):** Translates domain names into IP addresses
- **The Connection Process:**  
  When you type `facebook.com`, your browser asks DNS "what's the IP address for facebook.com?" then connects to that server

**How They Work Together**
Frontend and backend communicate through **HTTP requests** – think of it like sending letters back and forth.

**The Communication Process:**
1. **User Action:** User clicks a button or submits a form
2. **Frontend Request:** The frontend sends a request to the backend
3. **Backend Processing:** Backend processes the request (checks database, calculates, etc.)
4. **Backend Response:** The backend sends data back to the frontend
5. **Frontend Update:** Frontend displays the results to the user

**Common Communication Scenarios:**
- **Login:** Frontend sends username/password → Backend verifies → Responds with success/failure
- **Loading Content:** Frontend requests articles → Backend retrieves from the database → Sends article data
- **Saving Data:** Frontend sends form data → Backend saves to database → Confirms success

---

## 4. Technologies and Roles Overview

### Frontend Technologies

- **HTML (HyperText Markup Language):**  
  The skeleton/structure of web pages. Defines content and layout. Like the frame of a house.
- **CSS (Cascading Style Sheets):**  
  Controls appearance and styling (colours, fonts, layouts, animations). Like the paint and decoration of a house.
- **JavaScript:**  
  Adds interactivity and dynamic behaviour. Responds to user actions. Like the electrical system that makes things work.

### Backend Technologies (Examples)

- **Programming Languages:**
  - Python: Beginner-friendly, versatile
  - JavaScript (Node.js): Same language as the frontend
  - Java: Enterprise-focused, robust
  - PHP: Web-focused, widely used
- **Databases:**
  - MySQL: Popular relational database
  - MongoDB: Document-based database
  - PostgreSQL: Advanced relational database

### Web Development Roles

- **Frontend Developer:**  
  Focuses on user interface and experience. Works with HTML, CSS, JavaScript. Ensures websites look good and work well.
- **Backend Developer:**  
  Focuses on server-side logic and data. Works with databases and server technologies. Ensures websites function properly behind the scenes.
- **Full-Stack Developer:**  
  Works on both frontend and backend. Understands the complete web development process. Can build entire web applications.
- **UI/UX Designer:**  
  Designs user interfaces and experiences. Creates mockups and prototypes. Focuses on usability and aesthetics.

---

## 5. Developer Tools (DevTools)

**What are DevTools?**  
Built-in browser tools that help developers inspect, debug, and understand web pages. Every modern browser has them.

**How to Access DevTools:**
- **Chrome/Edge:** Right-click on page → "Inspect" OR press `F12`
- **Firefox:** Right-click on page → "Inspect Element" OR press `F12`
- **Safari:** Enable in preferences first, then right-click → "Inspect Element"

**Key DevTools Features:**
- **Elements Tab:**  
  View and edit HTML structure. Modify CSS styles in real-time. See how changes affect the page immediately.
- **Console Tab:**  
  View error messages. Test JavaScript code. Debug problems.
- **Network Tab:**  
  See all requests between the frontend and the backend. Monitor loading times. Identify slow or failed requests.
- **Sources Tab:**  
  View and debug JavaScript code. Set breakpoints to pause execution. Step through the code line by line.

**Practical Exercise:**  
Open any website, press `F12`, and explore the Elements tab. Try changing some text or colours!

---

## 6. Installing and Setting Up VS Code

**What is VS Code?**  
Visual Studio Code is a free, powerful code editor developed by Microsoft. It's the most popular choice among web developers.

**Why VS Code?**
- Free and open-source
- Lightweight but powerful
- Excellent for beginners
- Great extension ecosystem
- Built-in Git support
- Integrated terminal

**Installation Steps**

- **Windows:**
  1. Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
  2. Click "Download for Windows"
  3. Run the downloaded installer
  4. Follow the installation wizard
  5. Launch VS Code from the Start Menu

- **Mac:**
  1. Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
  2. Click "Download for Mac"
  3. Open the downloaded `.zip` file
  4. Drag VS Code to the Applications folder
  5. Launch from Applications

**Essential VS Code Setup**

- **Recommended Extensions for Web Development:**
  - Live Server: Automatically refreshes the browser when files change
  - Prettier: Automatically formats code to look neat
  - Auto Rename Tag: Automatically renames paired HTML tags
  - Bracket Pair Colorizer: Colours matching brackets
  - HTML CSS Support: Better HTML and CSS completion

- **Installing Extensions:**
  1. Click the Extensions icon in the sidebar (four squares)
  2. Search for extension name
  3. Click "Install"
  4. Restart VS Code if prompted

**Basic VS Code Interface**

- **Key Areas:**
  - Activity Bar: Left sidebar with icons
  - Side Bar: Shows files, search, extensions, etc.
  - Editor: Where you write code
  - Terminal: Command line interface (`View → Terminal`)
  - Status Bar: Shows file information at bottom

- **Essential Shortcuts:**
  - `Ctrl+S` (`Cmd+S` on Mac): Save file
  - `Ctrl+Shift+P` (`Cmd+Shift+P` on Mac): Command palette

---

**Questions for Discussion:**
- What websites do you use daily? Can you identify frontend vs backend features?
- What aspects of web development interest you most?
- Have you noticed any websites that work particularly well or poorly? Why?

---

## Practical Exercise for Next Class

**Website Analysis Exercise:**
1. Choose 3 different websites you use regularly
2. For each website, identify:
   - 3 frontend features (things you can see/interact with)
   - 3 backend features (things happening behind the scenes)
   - How they might communicate (what happens when you click buttons)
3. Open DevTools and explore the Elements tab
4. Try to find where the website's main heading is defined in HTML

**VS Code:**
- Install VS Code and the recommended extensions
- Create a new folder for your web development practice
- Open that folder in VS Code
- Create a new file called `notes.txt` and write down 3 things you learned today
