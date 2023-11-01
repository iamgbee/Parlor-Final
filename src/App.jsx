import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Homepage from './pages/Homepage';
import { ToastContainer } from 'react-toastify';
import Aboutpage from './pages/aboutpage/Aboutpage';
import Contactpage from './pages/contactpage/Contactpage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  path='/' Component={Homepage}/>
        <Route  path='/about_us' Component={Aboutpage}/>
        <Route  path='/our_services' Component={Aboutpage}/>
        <Route  path='/contact_us' Component={Contactpage}/>
        <Route  path='*' Component={Homepage}/>
        <Route/>
      </Routes>
      <ToastContainer theme='light'/>
      <Footer/>
    </Router>
  )
}

export default App
