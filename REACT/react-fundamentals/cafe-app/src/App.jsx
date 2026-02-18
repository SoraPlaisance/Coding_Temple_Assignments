import Coffees from "./Coffees"
import Teas from "./Teas"
import Pastries from "./Pastries"
import './MenuStyles.css';

function App() {


  return (
      <div className="menu-board">
        <Coffees />
        <Teas />
        <Pastries />
      </div>
  )
}

export default App
