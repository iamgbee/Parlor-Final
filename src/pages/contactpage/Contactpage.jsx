import React, { useEffect } from 'react'
import Contact from '../../components/contact/Contact'
import './contactpage.css'

const Contactpage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className='contact-page'>
      <section className="container">
        <div className="top-section">
          <span className='blue-span'>Contact Us</span>
          <h1>Join <span>100+</span> Thriving Businesses</h1>
          <p className='sub-heading'>Entrust us with Google Ads, Performance Marketing, Social Media Ads, and Ecommerce strategies. Elevate Your Online Presence.</p>
        </div>
      </section>
      <Contact/>
    </div>
  )
}

export default Contactpage