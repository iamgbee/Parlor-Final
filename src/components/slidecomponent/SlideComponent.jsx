import React, { useState, useRef, useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import './slidecomponent.css'

const SlideComponent = ({image, title, moreInfo}) => {
    const [isMoreInfoShowing, setIsMoreInfoShowing] = useState(false);
    const [visibleItems, setVisibleItems] = useState(1);
    const navRef = useRef(null);
    console.log('mORE ', moreInfo);
    console.log(moreInfo.slice(0, visibleItems));
  
    const closeNav = (e) => {
      // Check if the click occurred outside the navigation menu and toggle button
      if (
          navRef.current &&
          !navRef.current.contains(e.target) &&
          e.target.className !== 'nav__toggle'
      ) {
        setVisibleItems(1);
      }
    };
    useEffect(() => {  
      document.addEventListener('click', closeNav);
      return () => {      
        document.removeEventListener('click', closeNav);
      }       
    },[]);

    const handleShowMoreClick = () => {
      setIsMoreInfoShowing(!isMoreInfoShowing); // Toggle the state
    
      if (visibleItems === 1) {
        setVisibleItems(moreInfo.length); // Display all items when showing more
      } else {
        setVisibleItems(1); // Reset to display only the first item when showing less
      }
    };
    

  return (
    <div  className={visibleItems !== 1 ? 'slide h-auto' : 'slide'} >
        <div className='img-wrap'>
            <img src={image} alt="" />
        </div>        
        <div className={`content-wrapper`} ref={navRef}>
          <div>
            <h3>{title}</h3>            
          </div>          
          <div className="contents">
            {
              moreInfo &&
              <ul>
                {moreInfo.slice(0, visibleItems).map((info, index) => (<li key={index}>{info}</li>))}
              </ul>
            }
            </div> 
                    {moreInfo.length > 1 ? (
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

export default SlideComponent