import React, { useEffect } from 'react'
import Herosection from '../components/herosection/Herosection'

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Herosection/>
    </>
  )
}

export default Homepage