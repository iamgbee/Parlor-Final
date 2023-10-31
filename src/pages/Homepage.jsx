import React, { useEffect } from 'react'
import Herosection from '../components/herosection/Herosection'
import { Services } from '../components/services/Services';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Herosection/>
      <Services/>
    </>
  )
}

export default Homepage