// import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

function App () {
  return <Dashboard/>
}

function Profile() {
  const name = <h2>Monika</h2>
  const hobby = <h2>Piano</h2>
  return (
    <div>
      <h2>Profile:</h2>
      <h2>Name: {name}</h2>
      <h2>Hobby: {hobby}</h2>
    </div>
      
  )
}

function Dashboard () {
  const name = <h2>Monika</h2>
  const hobby = <h2>Piano</h2>
  return (
    <div>
      <Profile/>
      <p>{name} is learning {hobby}</p>
      <button>Click Me</button>
    </div>
  )
}

export default App;
