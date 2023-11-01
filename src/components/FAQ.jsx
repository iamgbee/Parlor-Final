import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const FAQ = ({ question, answer }) => {
    const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <article className="faq" onClick={() => setIsAnswerShowing(prev => !prev)}>
        <div>
            <h4>{question}</h4>
            <button className="faq__icon">
                {isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlusCircle/>}
            </button>
        </div>
        {isAnswerShowing && <p>{answer}</p>}  
    </article>
  )
}

export default FAQ