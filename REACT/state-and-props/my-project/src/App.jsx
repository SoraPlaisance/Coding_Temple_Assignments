import { useState } from 'react'
import './App.css'

function MessageDisplay(props) {
  return <p>{props.message}</p>;
}

function AnotherMessage(props) {
  return <p>{props.another}</p>
}

function App() {
  const [message, setMessage] = useState("Click this button!");
  const [another, setAnother] = useState("Click this button!");

  return (
    <div>
      <MessageDisplay message={message} />
      <button onClick={() => setMessage("You freed 7 kidnapped orphans.")}>
        Update Message
      </button>
      <AnotherMessage another={another} />
      <button onClick={() => setAnother("You sold the orphans.")}>
        Update Message
      </button>
    </div>
  );
}

export default App
