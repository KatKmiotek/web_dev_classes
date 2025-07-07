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

**Practice**  
Visit [airbnb website](https://www.airbnb.co.uk/) and name frontend elements

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
- Returning search results

**Practice**  
Visit [airbnb website](https://www.airbnb.co.uk/) and identify what functionality is provided by backend

---

## 3. Frontend and Backend Communication

**Client vs Server Relationship**
- **Client:** The user's device (computer, phone, tablet) running a web browser
- **Server:** A powerful computer that stores and serves website files
- **Communication:** The client requests information, the server responds

**Finding Servers on the Internet**
- **IP Addresses:** Every device on the internet has a unique address (e.g., `192.168.1.1` or `216.58.194.174`) – like a postal address for computers [check your IP](https://www.whatsmyip.org/)
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
  
### Cloud Infrastructure

Cloud infrastructure refers to **resources** like 
- servers 
- storage 
- databases
- networking

### Web Development Roles

- **Frontend Developer:**  
  Focuses on user interface and experience. Works with HTML, CSS, JavaScript. Ensures websites look good and work well.
- **Backend Developer:**  
  Focuses on server-side logic and data. Works with databases and server technologies. Ensures websites function properly behind the scenes.
- **Full-Stack Developer:**  
  Works on both frontend and backend. Understands the complete web development process. Can build entire web applications.
- **UI/UX Designer:**  
  Designs user interfaces and experiences. Creates mockups and prototypes. Focuses on usability and aesthetics.
- **DevOps engineer**
  Configures infrastructure for application
- **Project Manager**
  Communicates with clients regarding required features

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
  View and debug JavaScript code.

**Practical Exercise:**  
1. Open any website, press `F12`, and explore the Elements tab. Try changing some text or colors!
2. Visit [demo website](https://thinking-tester-contact-list.herokuapp.com/addUser) and try sign up with 3 letters password
3. Navigate to [gov website](https://www.gov.uk/) and observe how it changes in the mobile viewport

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
  - Bracket Pair Colorizer: Colors matching brackets
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

**VS Code:**
- Install VS Code and the recommended extensions
- Create a new folder for your web development practice
- Open that folder in VS Code
- Create a new file called `notes.txt` and write down 3 things you learned today
