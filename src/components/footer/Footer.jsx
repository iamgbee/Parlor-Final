import React from 'react'
import Logo from '../../assets/logo.png'
import Fb from '../../assets/Fb.png'
import Tw from '../../assets/Tw.png'
import Ig from '../../assets/Ig.png'
import Ln from '../../assets/Ln.png'
import { useNavigate } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    const navigate = useNavigate();
  return (
    <footer>
        <div className="footer">
          <div className="container">
            <p className='small'>CONVINCED?</p>
            <p>Let’s create magic together</p>
            <p>
              Let us unleash our creativity and
              expertise to create designs that deliver
              extraordinary results.
            </p>
            <button className='btn btn-primary' onClick={() => navigate('/contact_us')}>Shoot us a DM</button>
            <div className='links'>
              <img src={Logo} alt="" className='logo' onClick={() => navigate('/')}/>
              <span>
                <a href="https://www.facebook.com/Parlordigital" target="_blank"><img src={Fb} alt="" /></a>
                <a href="https://twitter.com/ParlorD10576" target="_blank"><img src={Tw} alt="" /></a>
                <a href="https://www.instagram.com/parlor_digital/" target="_blank"><img src={Ig} alt="" /></a>
                {/* <a href="" target="_blank"><img src={Ln} alt="" /></a> */}
              </span>
            </div>
            <p className='small'>© 2023 Parlor Digital. All rights reserved.</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer