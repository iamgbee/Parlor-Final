import React, { useEffect } from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import sparkle from '../../assets/sparkle.png'
import { useNavigate } from 'react-router-dom'
import SwiperComponent from '../swiperComponent/SwiperComponent'
import './services.css'

export const Services = () => {
    const navigate = useNavigate();

  return (
    <section className='section services-section'>
        <div className="container">
            <h2 className='section__title sparkle-wrap'>
              Our Services
              <img src={sparkle} alt="sparkle image" className='sparkle'/>
            </h2>            
            <p className='section__description'>
              Connect with Your Customers 
            </p>
            <p className='section__description'>
              Instantly on Their Preferred Platforms with Our Effortless Digital Advertising Services.
            </p>
            <a href="#contact-form"><button className='send-mail'>Send Us an email <AiOutlineArrowRight className='icon'/></button></a>
            <SwiperComponent/>
        </div>
    </section>
  )
}
