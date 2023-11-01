import React, { useEffect } from 'react'
import { Services } from '../../components/services/Services'
import './aboutpage.css'
import OurStory from '../../components/ourstory/OurStory';
import Engage from '../../components/engage/Engage';
import { useNavigate } from 'react-router-dom';
import FAQs from '../../components/faqs/FAQs';
import Question from '../../components/question/Question';

const Aboutpage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className='about-page'>        
    <div className="container section">       
      <div className="top">
        <span className="blue-span">About Us</span>
        <h1>At <span>Parlor Digital</span>, we believe that opportunity doesn't knock</h1>
        <p>We eliminate guesswork by providing clear insights into marketing performance, enabling clients to focus on their core business priorities</p>
        <button className="btn btn-secondary" onClick={() => navigate('/contact_us') }>Talk to Us</button>
      </div>       
    </div>
    <OurStory/>
    <Services/>
    <Engage/>
    <FAQs/>
    <Question/>    
  </div>
  )
}

export default Aboutpage