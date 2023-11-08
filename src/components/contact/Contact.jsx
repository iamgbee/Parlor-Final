import React, { useState } from 'react'
import { PiWechatLogoBold } from 'react-icons/pi'
import { FaLocationDot } from 'react-icons/fa6'
import { AiOutlineMail } from 'react-icons/ai'
import { BiPhone } from 'react-icons/bi'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'boxicons/css/boxicons.min.css'
import './contact.css'

const Contact = ({ title, subtitle }) => {
    //states
  const [formData, setFormData] = useState({ 
    firstName:'',
    lastName:'', 
    email:"", 
    message:"",
    isChecked: false, 
  });
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);  
  
//   setMessage('Thanks for Contacting us!');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString();
    // https://script.google.com/macros/s/AKfycbwRgxRXt2gRNDzpXCgA7b0-qEUfc_vLVXThHVeWqZeuB3dcBP6IhV64UhT7iI7nBs4u/exec
    // https://script.google.com/macros/s/AKfycbyPyKblYE9jxSCnU0REmwYcPnnrUrA0CQfafc3RIY_b201VdhSomNNE4ubyUIdNWiA6/exec
    // Set the submissionTime directly in the form data
    const formDataObject = new FormData();
    formDataObject.append('firstname', formData.firstName);
    formDataObject.append('lastname', formData.lastName);
    formDataObject.append('email', formData.email);
    formDataObject.append('message', formData.message);
    formDataObject.append('submissionTime', formattedDateTime);// Set the submissionTime here

    // https://script.google.com/macros/s/AKfycbw5vRyxlopvG9B6aHYfV4yb_ZFnWPWKL7mzCyi_3Ltx8dqTuSw1MbXC2jCqG9QoJaU/exec
    fetch(
      'https://script.google.com/macros/s/AKfycbwRgxRXt2gRNDzpXCgA7b0-qEUfc_vLVXThHVeWqZeuB3dcBP6IhV64UhT7iI7nBs4u/exec',
      {
        method: 'POST',
        body: formDataObject,
      }
    )
      .then((resp) => resp.text())
      .then((data) => {
        setMessage('Thanks for Contacting us!');
        toast.success('Thanks for Contacting us!');
        setSubmitting(false);
        formData.firstName ='';
        formData.lastName ='';
        formData.email ='';
        formData.message ='';

         // Clear the message after 5 seconds
         setTimeout(() => {
          setMessage('');          
        }, 5000);
      });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;    
    // Handle checkbox differently
    if (type === 'checkbox') {
      console.log('checked:', checked)
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
        }));
      } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }    
  }
  return (
    <section className='section contact-section' id='contact-form'>
        <div className="top container">
          {title && <span className='blue-span'>{title}</span>}
          {subtitle && <p className="section__description">{subtitle}</p>}
        </div>
            <div className="inner__container">
              <div className="form__wrapper grid">
                  <div className="contact__desc">
                    <div className='row'>
                      <PiWechatLogoBold className='icon'/>
                      <div>
                        <p className='big__paragraph'>Chat with Us</p>
                        <p className='small__paragraph'>Use our contact form to get a reply</p>
                      </div>
                    </div>
                    <div className='row'>
                      <BiPhone className='icon'/>
                      <div>
                        <p className='big__paragraph'>Call on Us</p>
                        <p className='small__paragraph'>+21 08 510 290</p>
                      </div>
                    </div>
                    <div className='row'>
                      <AiOutlineMail className='icon'/>
                      <div>
                        <p className='big__paragraph'>Email Us</p>
                        <p className='small__paragraph'>parlor@parlordigital.net</p>
                      </div>
                    </div>
                    <div className='row'>
                      <FaLocationDot className='icon'/>
                      <div>
                        <p className='big__paragraph'>Address</p>
                        <p className='small__paragraph'>San Antonio, Texas 78247</p>
                      </div>
                    </div>
              
                  </div>
                  <form  onSubmit={(e) => handleSubmit(e)} className='form'>
                    <div className="name">
                      <div>
                        <label htmlFor="first-name">First name</label>
                        <input
                          type="text"
                          placeholder='First name'
                          id='first-name'
                          name='firstName'
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="last-name">Last name</label>
                        <input
                          type="text"
                          placeholder='Last name'
                          id='last-name'
                          name='lastName'
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="email">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        placeholder='you@company.com'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="message">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        id="message"
                        cols="30"
                        rows="5"
                        placeholder='Leave us a message...'
                        required
                      ></textarea>
                    </div>                   
                    <button
                      className={`btn btn-primary`}
                    >
                      {submitting && <i className='bx bx-loader-alt bx-spin'></i>}
                      {submitting ? 'Submitting...' : 'Send Message'}                      
                    </button>
                    {message && <p className='success__msg'>{message}</p>}
                  </form>
              </div>
            </div>        
    </section>
  )
}

export default Contact