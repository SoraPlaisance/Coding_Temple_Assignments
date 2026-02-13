// Think of components like functions in math: they take input and return output.
// In React, that input is called props (short for properties).

// 👉 Props are how we give a component information it needs to render.

// Imagine you built a TodoItem component that shows a single task:

// Without props, it could only ever show one hard-coded todo.
// With props, we can pass different text each time → reusable and flexible.
// Analogy: Props are like ingredients you give to a chef.

// The chef = the component.
// The recipe = the component’s code.
// The ingredients = props you pass in.

// Step 1: A simple component (no props yet)

function Welcome() {
  return <h2>Hello, Student!</h2>;
}

// Every time you use <Welcome />, it shows the same thing.

// Step 2: Add props

function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

// Instead of props.name, we can destructure:

function Welcome({ name }) {
  return <h2>Hello, {name}!</h2>;
}