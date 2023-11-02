import React, { useEffect, useState } from 'react'
import Topsection from '../../components/topsection/Topsection';
import GridSection from '../../components/gridsection/GridSection';
import Contact from '../../components/contact/Contact';
import LogosSlide from '../../components/logosslide/LogosSlide';
import Loading from '../../components/loading/Loading';

const Servicespage = () => {
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
          <div>    
            <Topsection/>   
            <GridSection/>
            <LogosSlide title='Portfolio'/>
            <Contact title='Schedule a Free Consultation'
              subtitle='Kindly chat with our friendly team for all your enquiries'/>         
          </div>
        )
      }
    </>    
  )
}

export default Servicespage