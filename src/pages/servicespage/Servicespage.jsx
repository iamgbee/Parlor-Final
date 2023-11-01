import React, { useEffect } from 'react'
import Topsection from '../../components/topsection/Topsection';
import GridSection from '../../components/gridsection/GridSection';
import Contact from '../../components/contact/Contact';

const Servicespage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div>    
        <Topsection/>   
        <GridSection/>
        <Contact title='Schedule a Free Consultation'
            subtitle='Kindly chat with our friendly team for all your enquiries'/>         
    </div>
  )
}

export default Servicespage