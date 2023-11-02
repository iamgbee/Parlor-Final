import React, { useEffect, useState } from 'react'
import Herosection from '../components/herosection/Herosection'
import { Services } from '../components/services/Services';
import Contact from '../components/contact/Contact';
import LogosSlide from '../components/logosslide/LogosSlide';
import Loading from '../components/loading/Loading';

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const delay = 2000; // 2 seconds delay
      setTimeout(() => {
        setIsLoading(false);
      }, delay);
    }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    {
      isLoading ? (
        <Loading/>
      ) : (
        <>
          <Herosection/>
          <Services/>      
          <LogosSlide title='Portfolio'/>
          <Contact title='Contact Us' subtitle='Chat with our friendly team'/>
        </>
      )
    }      
    </>
  )
}

export default Homepage