import {useState} from 'react'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import './App_custom.css'
// import './App.css'

function App() {

  const [darkMode,setDarkMode] = useState(true)
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  } 
  return (
      <div className="container">
        <Navbar 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode} 
        />
        <Main darkMode={darkMode} />
      </div>
  )
}

export default App
