import React from 'react'
import avatarImg from '../../assets/avatar.png'
import './question.css'
import { useNavigate } from 'react-router-dom'

const Question = () => {
    const navigate = useNavigate();
  return (
    <section className='question section' data-aos="fade-down">
        <div className="container">
            <img src={avatarImg} alt="" />
            <h1>Still have questions?</h1>
            <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
            <button className='btn btn-primary' onClick={() => navigate('/contact_us')}>Get in Touch</button>
        </div>        
    </section>
  )
}

export default Question