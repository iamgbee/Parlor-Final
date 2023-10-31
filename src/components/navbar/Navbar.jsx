import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiApps2Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false); 
    const [show, setShow] = useState(false);

    const navRef = useRef(null);

    const changeNavbar = () => {
        if(window.scrollY > 100){
          setShow(true)
        }else{
          setShow(false)
        }
    }

    const toggleNav = () => {
        setIsNavShowing(!isNavShowing);
    };

    const closeNav = (e) => {
        // Check if the click occurred outside the navigation menu and toggle button
        if (
            navRef.current &&
            !navRef.current.contains(e.target) &&
            e.target.className !== 'nav__toggle'
        ) {
            setIsNavShowing(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar);
        document.addEventListener('click', closeNav);
        return () => {
            window.removeEventListener('scroll', changeNavbar);
            document.removeEventListener('click', closeNav);
        }       
    },[show]);


  return (
    <header className={`header ${show ? 'shadow' : ''}`}>
        <nav className='nav container' ref={navRef}>
            <Link to='/' className='nav__logo'>
                <img src={logo} alt="logo" />
            </Link>
            <div className={`nav__menu ${isNavShowing ? 'show-menu' : ''}`} id="nav-menu" >
                <ul className="nav__list">
                    <li className='nav__item'>
                        <NavLink to='/' className='nav__link' onClick={toggleNav}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about_us' className='nav__link' onClick={toggleNav}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/our_services' className='nav__link' onClick={toggleNav}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact_us' className='nav__link' onClick={toggleNav}>Contact Us</NavLink>
                    </li>
                    <div className="nav__close" id="nav-close">
                        <RiCloseLine onClick={() => setIsNavShowing(false)}/>
                    </div>
                </ul>
            </div>
            <div className="nav__toggle">
                <RiApps2Line onClick={() => setIsNavShowing(true)}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar