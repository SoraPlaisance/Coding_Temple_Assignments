// React is an open-source JavaScript library developed by Facebook for building fast and interactive user interfaces. Unlike traditional ways of building websites, React allows you to break the UI into reusable, self-contained components, making it easier to build and maintain complex interfaces.
    // Declarative: React allows you to write declarative code, meaning you describe what you want, not how to achieve it. This is different from imperative programming, where you specify every single step needed to update the UI.
    // Component-Based: The core idea of React is that your UI can be broken into components, which are small, reusable pieces of code responsible for rendering parts of your interface.



// React vs. Traditional Javascript

// In tradidtional JavaScript, you manually update the DOM whenever the state of your application changes. For example, you might listen to user input events and then directly manipulate HTML elements in the DOM to reflect these changes.
// React takes a different approach:
    // Component-Based Architecture: Rather than manipulating the DOM directly, you build components that React efficiently updates and renders when needed.
    // Virtual DOM: React maintains a virtual DOM, an in-memory representation of the real DOM. When something changes in your UI, React compares the new version of the virtual DOM to the old one. React then updates the real DOM only where changes occured, making updates more efficient.



// How to set up your React App with Vite

// * Before you start, make sure you open the terminal in the folder you want your project to be created *
    // 1. Create a new React Project:
        // npx create-vite project-name -- template react
    // 2. Navigate into the Project Folder
        // cd project-name
    // 3. Install the Project Dependencies:
        // npm install

// Visual Command Map

// npx
//  └── create-vite
//       ├── todo-list-app (project folder created)
//       │    ├── public (static assets like favicon)
//       │    └── src (your React code lives here)
//       │         ├── App.jsx (main React component)
//       │         └── main.jsx (entry point for the app)
//       └── --template react (sets it up with React-specific starter files)



// Understanding the Anatomy of a React Application

// When you first open your Vite-generated React project, you'll see several files and folders. Here are some of the key parts:
    // index.html: This is the main HTML file, and it has a single <div> with an ID of 'root'. React will render the entire app into this <div>
    // src/index.js: This is where your app starts. It uses ReactDOM.render() to inject your React components into the HTML.
    // App.jsx: This is your main component, where you'll define the overall structure of your UI. It's a functional component that can contain other components.



// Components

// React applications are built using components. A component is a JavaScript function or class that renders a portion of the UI. Components can be as small as a button or as large as an entire page.



// Rendering Components
// DISCLAIMER!!! MAY BE DATED!!!

// In React, when we want to display a component on the page, we first need a special area in our HTML where React can place that component. This is done using a root element, which is usually a <div> with a unique ID like "root"
    // Root Element: In the basic setup that Vite provides, the root element is alreadt in your HTML file. It's the <div id="root"></div>. This is where React will insert your components.
    // Rendering a Component: In the JavaScript file (where you write your React code), we use the ReactDOM.render() method to take a React component and mount it inside the root element.



