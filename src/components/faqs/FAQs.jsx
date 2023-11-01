import React from 'react'
import { faqs } from '../../data'
import FAQ from '../FAQ'
import './faqs.css'

const FAQs = () => {
  return (
    <section className='faqs section'>
        <div className="container">
            <h1>Frequently asked questions</h1>
            <p>Everything you need to know about the product and billing.</p>            
            <div className="faqs__wrapper">
                {
                    faqs.map((faq) => {
                        return(
                            <FAQ key={faq.id} question={faq.question} answer={faq.answer}/>
                        )
                    }) 
                }
            </div>            
        </div> 
    </section>
  )
}

export default FAQs