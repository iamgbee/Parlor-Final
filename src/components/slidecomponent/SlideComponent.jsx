import React, { useState, useRef, useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import './slidecomponent.css'

const SlideComponent = ({image, title, moreInfo}) => {
    const [isMoreInfoShowing, setIsMoreInfoShowing] = useState(false);
    const navRef = useRef(null);
  
    const closeNav = (e) => {
      // Check if the click occurred outside the navigation menu and toggle button
      if (
          navRef.current &&
          !navRef.current.contains(e.target) &&
          e.target.className !== 'nav__toggle'
      ) {
        setIsMoreInfoShowing(false);
      }
    };
    useEffect(() => {  
      document.addEventListener('click', closeNav);
      return () => {      
        document.removeEventListener('click', closeNav);
      }       
    },[]);

  return (
    <div className='slide' >
        <div className='img-wrap'>
            <img src={image} alt="" />
        </div>
        <div className={`content ${isMoreInfoShowing ? 'show' : ""}`} ref={navRef}>
          <div className="flex">
            <h3>{title}</h3>
            <AiOutlinePlus className='logo' onClick={() => {setIsMoreInfoShowing(!isMoreInfoShowing)}}/>
          </div>
          {moreInfo && <ul>{moreInfo.map((info, index) => <li key={index}>{info}</li>)}</ul>}
        </div>   
    </div>
  )
}

export default SlideComponent