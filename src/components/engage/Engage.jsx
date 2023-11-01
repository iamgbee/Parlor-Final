import React from 'react'
import './engage.css'
import { useNavigate } from 'react-router-dom';

const Engage = () => {
    const navigate = useNavigate();

  return (
    <section className='engage section'>
        <div className="container">
            <h3>Try Parlor Digital Today</h3>
            <h1 className='section__title'>Connect in Real-Time: Meet Your Customers Where They Search Online</h1>
            <p>Join over 100+ talented creatives to start building with <span>Parlor</span></p>
            <div className="btn__group">              
            <button className='btn btn-primary' onClick={() => navigate('/contact_us')}>Contact Us</button>
            </div>
        </div>
    </section>
  )
}

export default Engage