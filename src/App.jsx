import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route/>
      </Routes>
    </Router>
  )
}

export default App
