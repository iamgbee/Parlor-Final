import React from 'react'
import { useNavigate } from 'react-router-dom'
import './topsection.css'

const Topsection = () => {
  const navigate = useNavigate();

  return (
    <section className='section top-section'>
        <div className="container">    
            <span className="blue-span">Our Services</span>        
            <h1>Connect with Your Customers Instantly on Their Preferred Platforms</h1>
            <p>Join 100+ Thriving Businesses Trusting Parlor for Unmatched Online Marketing. Elevate Your Presence - Act Now!</p>
            <button className="btn btn-secondary" onClick={() => navigate('/contact_us')}>Talk to Us</button>
        </div>
    </section>
  )
}

export default Topsection