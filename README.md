# 🚀 Tech Stack Builder

### Build Your Ideal Development Stack

Tech Stack Builder is a responsive web application that allows users to explore modern web technologies, build a personalized tech stack, and manage their selections easily.

**Live Link:** [Tech Stack Builder](https://tech-stack-builder.netlify.app)

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React Hot Toast

## ✨ Features

- Explore modern web technologies with their details and ratings.
- Build and customize your own technology stack.
- Add and remove technologies with interactive toast notifications.
- Enjoy a responsive experience across mobile, tablet, and desktop devices.

## 📁 Project Structure

```text
tech-stack-builder/
├── public/
│   ├── data.json
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AllIssues.tsx
│   │   ├── Card.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Loading.tsx
│   │   ├── Navbar.tsx
│   │   ├── Technologies.tsx
│   │   ├── Type.ts
│   │   └── YourStack.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig*.json
```

## ❓ Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a JavaScript syntax extension that allows us to write HTML-like code inside JavaScript. It makes React components easier to read and understand.

### 2. What is the difference between props and state?

Props pass data from a parent component to a child component. State stores data that can change over time and updates the UI when it changes.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook manages data that can change over time. I used it to manage selected technologies in the stack and control the mobile navbar menu.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook handles side effects in React components, such as fetching data from an API. It can be used to load JSON data when a component mounts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify which items have changed, been added, or been removed, allowing it to update lists efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering displays UI elements based on a condition. In my project, the message **"No technology selected"** appears when the stack is empty, while selected technologies appear after the user adds them.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. To communicate back, the parent passes a callback function as a prop, which the child can call when an action occurs.

---

## 👩‍💻 Author

**Nushrath Jahan Monima**

**GitHub:** [@monima40](https://github.com/monima40)
