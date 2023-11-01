import React, { useEffect } from 'react'
import Herosection from '../components/herosection/Herosection'
import { Services } from '../components/services/Services';
import Contact from '../components/contact/Contact';
import LogosSlide from '../components/logosslide/LogosSlide';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Herosection/>
      <Services/>      
      <LogosSlide title='Portfolio'/>
      <Contact title='Contact Us' subtitle='Chat with our friendly team'/>
    </>
  )
}

export default Homepage