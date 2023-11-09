import React, { useState, useRef, useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import './imageholder.css'

const ImageHolder = ({Image, title, slideContent}) => {
    const [showContent, setShowContent] = useState(false);
    const [isMoreInfoShowing, setIsMoreInfoShowing] = useState(false);
    const [visibleItems, setVisibleItems] = useState(1);
    const CellRef = useRef(null);

    const closeNav = (e) => {
        // Check if the click occurred outside the navigation menu and toggle button
        if (
            CellRef.current &&
            !CellRef.current.contains(e.target) &&
            e.target.className !== 'icon'
        ) {
          setVisibleItems(1);
        }
      };

      const handleShowMoreClick = () => {
        setIsMoreInfoShowing(!isMoreInfoShowing); // Toggle the state
      
        if (visibleItems === 1) {
          setVisibleItems(slideContent.length); // Display all items when showing more
        } else {
          setVisibleItems(1); // Reset to display only the first item when showing less
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
        <div className={`content-wrapper ${visibleItems !== 1 ? 'content-wrapper slide' : 'content-wrapper'}`} ref={CellRef} >
          <div>
            <h3>{title}</h3>            
          </div>          
          <div className="contents">
            {
              slideContent &&
              <ul>
                {slideContent.slice(0, visibleItems).map((info, index) => (<li key={index}>{info}</li>))}
              </ul>
            }
            </div> 
                    {slideContent.length > 1 ? (
                    <button onClick={handleShowMoreClick}>
            {visibleItems < 2 ? 'Learn More' : 'Show  Less'}
                    </button>
                  ) : (
                    <span></span>
                  )}
          </div>                      
    </div>   
  )
}

export default ImageHolder