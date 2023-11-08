import React, { useEffect, useState } from 'react'
import HeroImg from '../../assets/image.png'
import HeroImg2 from '../../assets/three_strokes.png'
import HeroImg3 from '../../assets/orange_img.png'
import HeroImg4 from '../../assets/black_img.png'
import HeroImg5 from '../../assets/broken.png'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'boxicons/css/boxicons.min.css'
import './herosection.css'

const Herosection = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    // https://script.google.com/macros/s/AKfycbxc40_VYgYTM6aYfZm5hrsBZ3ddi31LH2WdnunWD8oih4AKkb57kkkqtvsPvOo2C-EU/exec
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setIsLoading(true);       
    
        const currentDateTime = new Date();
        const formattedDateTime = currentDateTime.toLocaleString();
    
        // Set the submissionTime directly in the form data
        const formDataObject = new FormData();        
        formDataObject.append('email', email);        
        formDataObject.append('submissionTime', formattedDateTime);// Set the submissionTime here
        // https://script.google.com/macros/s/AKfycbyNV6780P2vQeym5oC9-LRyaqztDsVa2PGndZ0I-MPAS0VyfTnlkac6KbDbV7Qzt0HK/exec
        fetch(
          'https://script.google.com/macros/s/AKfycbyoWd3y6NMUR0ipsyCRZ7djy4bIw0-YXtjxMbKh2bxPAGkDa9IZK4Jo8b3ZBj944B45/exec',
          {
            method: 'POST',
            body: formDataObject,
          }
        )
          .then((resp) => resp.text())
          .then((data) => {
            setMessage('Thanks for Contacting us!');
            toast.success('Thanks for Contacting us!');
            setIsLoading(false);
            setEmail('');
    
             // Clear the message after 5 seconds
             setTimeout(() => {
              setMessage('');          
            }, 5000);
          });
      };

  return (
    <section className='section'>
        <div className=" container ">
            <div className="inner__container grid hero__container">
                <div className="hero__images">                    
                    <div className='hero__img-1'>
                        <img src={HeroImg} alt="Hero Image" />
                    </div>                  
                    <img src={HeroImg2} alt="" className='hero__img-2'/>
                    <img src={HeroImg3} alt="" className='hero__img-3'/>
                    <img src={HeroImg4} alt="" className='hero__img-4'/>
                </div>
                <div className="hero__data">
                    <h1 className='hero__title'>Effortless Ideas For Your Online Marketing</h1>
                    <div className="dashed">
                        <img src={HeroImg5} alt=""/>
                    </div>
                    <p className='hero__description'>Never Worry About Booking More Appointments For Your Local Business</p>
                    <form onSubmit={(e) => handleSubmit(e)}> 
                        <input
                            type="text"
                            placeholder='Enter email address'
                            id='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button className='btn-primary btn'>{isLoading && <i className='bx bx-loader-alt bx-spin'></i>}{isLoading ? 'Contacting...' : 'Contact Us'}</button>
                    </form>
                    {message && <p className='messenger'>{message}</p>} 
                    <div className='hero__stats'>
                        <div className='stat__card'>
                            <span>12K</span>
                            <div>
                                <p>Ads</p>
                                <p>Generated</p>
                            </div>
                        </div>
                        <div className='stat__card'>
                            <span>Over 6K</span>
                            <div>
                                <p>Booked </p>
                                <p>Appointments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Herosection