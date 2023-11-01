import React, { useState, useRef, useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import './imageholder.css'

const ImageHolder = ({Image, title, slideContent}) => {
    const [showContent, setShowContent] = useState(false);
    const CellRef = useRef(null);

    const closeNav = (e) => {
        // Check if the click occurred outside the navigation menu and toggle button
        if (
            CellRef.current &&
            !CellRef.current.contains(e.target) &&
            e.target.className !== 'icon'
        ) {
            setShowContent(false);
        }
      };

      useEffect(() => {  
        document.addEventListener('click', closeNav);
        return () => {      
          document.removeEventListener('click', closeNav);
        }       
      },[]);

  return (
    <div className='img-holder' key={slideContent.id} >  
        <div className="img">
            <img src={Image} alt="grid-image" />
        </div>
        <div className={`content ${showContent ? "show" : ''}`} ref={CellRef}>
            <div className='flexy'>{title} <AiOutlinePlus onClick={() => setShowContent(!showContent)} className='icon'/></div>
            <ul>
                {slideContent.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>                    
    </div>   
  )
}

export default ImageHolder