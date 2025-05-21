import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Config from './pages/Config'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>


      <div className="card">
        <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
          <Link to="/config" style={{ marginRight: '1rem' }}>Config</Link>
        </nav>
        <h2> Vite DataViz</h2>
        <Routes>
          <Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/config' element={<Config />}></Route>
          </Route>
        </Routes>
      </div>
      <p className="read-the-docs">
        Copyright swapnil - @2025
      </p>
    </>
  )
}

export default App
