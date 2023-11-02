import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Homepage from './pages/Homepage';
import { ToastContainer } from 'react-toastify';
import Aboutpage from './pages/aboutpage/Aboutpage';
import Contactpage from './pages/contactpage/Contactpage';
import Servicespage from './pages/servicespage/Servicespage';
import ScrollReveal from 'scrollreveal';

function App() {
  useEffect(() => {
    // Create a ScrollReveal configuration object
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    });

    // Apply ScrollReveal to your elements
    sr.reveal('.hero__images, .services-section, .footer__description, .footer__content, .footer__info');
    sr.reveal('.hero__data, .footer', { origin: 'bottom' });
    sr.reveal('.about__data, .recently__data', { origin: 'left' });
    sr.reveal('.about__img, .recently__img', { origin: 'right' });
    sr.reveal('.slide', { interval: 100 });
  }, []); // The empty dependency array ensures this effect runs once after component mounting.

  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
        <Route  path='/' Component={Homepage}/>
        <Route  path='/about_us' Component={Aboutpage}/>
        <Route  path='/our_services' Component={Servicespage}/>
        <Route  path='/contact_us' Component={Contactpage}/>
        <Route  path='*' Component={Homepage}/>
        <Route/>
      </Routes>
      <ToastContainer theme='light'/>
      <Footer/>
    </Router>
    </>
    
  )
}

export default App
