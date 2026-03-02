import { Routes, Route, Link } from 'react-router-dom';
import Characters from './pages/Characters'
import CharacterDetails from './pages/CharacterDetails'


function App() {
  return (
  <div className="container">
    <header className="navbar">
      <Link to='/' className="brand" >
        Rick & Morty Explorer
      </Link>
    </header>
    <Routes>
      <Route path="/" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
    </Routes>
  </div>
  )
}

export default App;