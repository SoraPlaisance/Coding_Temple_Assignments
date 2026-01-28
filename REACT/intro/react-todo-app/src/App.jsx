// import { useState } from 'react'
import './App.css'
import Welcome from './Welcome.jsx'

function App() {

  const name = "Monika";
const age = 16;
console.log(`My name is ${name} and I am ${age} years old.`);

const numbers = [1, 2, 3];
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers: ", squaredNumbers);

const arr = [1, 2];
const newArr = [...arr, 3];
console.log("New Array", newArr); // Output: [1, 2, 3]
  return (
    <div>
      <h1>My Todo App 🎉</h1> 
      <p>React is ready, let’s go 🚀</p>
      <Welcome />
    </div>
  );
}



export default App;
