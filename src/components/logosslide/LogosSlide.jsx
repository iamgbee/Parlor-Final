import React, { useEffect } from 'react';
import './logoslide.css';
import logo1 from '../../assets/logo-1.png';
import logo2 from '../../assets/logo-8.png';
import logo3 from '../../assets/logo-3.png';
import logo4 from '../../assets/logo-4.png';
import logo5 from '../../assets/logo-5.png';
// import logo6 from '../../assets/logo-6.png';
import logo7 from '../../assets/logo-7.png';
import logo8 from '../../assets/logo-2.png';
import logo9 from '../../assets/logo-9.png';
import logo10 from '../../assets/logo-10.png';
import logo11 from '../../assets/logo-11.png';
import logo12 from '../../assets/logo-12.png';
import logo13 from '../../assets/logo-13.png';

const LogosSlide = ({ title }) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller-inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <section className="section logo_portfolio">
      <div className="container">
        <h2 className="section__title">{title}</h2>
        <p className="section__description">Join 100+ companies already growing</p>
        <div className="scroller">
          <div className="scroller-inner">
            <img src={logo1} alt="logo" className="_logo" />
            <img src={logo2} alt="logo" className="_logo" />
            <img src={logo3} alt="logo" className="_logo" />
            <img src={logo4} alt="logo" className="_logo" />
            <img src={logo5} alt="logo" className="_logo" />
            {/* <img src={logo6} alt="logo" className="_logo" /> */}
            <img src={logo7} alt="logo" className="_logo" />
            <img src={logo8} alt="logo" className="_logo" />
            <img src={logo9} alt="logo" className="_logo" />
            <img src={logo10} alt="logo" className="_logo" />
            <img src={logo11} alt="logo" className="_logo" />
            <img src={logo12} alt="logo" className="_logo" />
            <img src={logo13} alt="logo" className="_logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSlide;




// import React from 'react'
// import logo1 from '../../assets/logo-1.png'
// import logo2 from '../../assets/logo-8.png'
// import logo5 from '../../assets/logo-3.png'
// import logo7 from '../../assets/logo-4.png'
// import logo6 from '../../assets/logo-5.png'
// import logo4 from '../../assets/logo-6.png'
// import logo8 from '../../assets/logo-7.png'
// import logo3 from '../../assets/logo-2.png'
// import logo9 from '../../assets/logo-9.png'
// import logo10 from '../../assets/logo-10.png'
// import logo11 from '../../assets/logo-11.png'
// import logo12 from '../../assets/logo-12.png'
// import logo13 from '../../assets/logo-13.png'
// import './logoslide.css'

// const LogosSlide = ({title}) => {
//     const scrollers = document.querySelectorAll('.scroller');
//     if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
//         addAnimation();
//     }

//     function addAnimation () {
//         scrollers.forEach(scroller => {
//             scroller.setAttribute('data-animated', true);

//             const scrollerInner = scroller.querySelector('.scroller-inner');
//             const scrollerContent = Array.from(scrollerInner.children);

//             scrollerContent.forEach(item => {
//                 const duplicatedItem = item.cloneNode(true);
//                 duplicatedItem.setAttribute('aria-hidden', true);
//                 console.log(duplicatedItem);
//                 scrollerInner.appendChild(duplicatedItem);
//             })
//         })
//     }
//   return (
//     <section className="section logo_portfolio">
//         <div className="container">
//         <h2 className="section__title">{title}</h2>
//         <p className="section__description">Join 100+ companies already growing</p>
//         <div className="scroller">
//             <div className="scroller-inner">
//                 <img src={logo1} alt="logo" className='_logo'/>   
//                 <img src={logo2} alt="logo" className='_logo'/>   
//                 <img src={logo3} alt="logo" className='_logo'/>   
//                 <img src={logo4} alt="logo" className='_logo'/>   
//                 <img src={logo5} alt="logo" className='_logo'/>   
//                 <img src={logo6} alt="logo" className='_logo'/>   
//                 <img src={logo7} alt="logo" className='_logo'/>   
//                 <img src={logo8} alt="logo" className='_logo'/>
//                 <img src={logo9} alt="logo" className='_logo'/>
//                 <img src={logo10} alt="logo" className='_logo'/>
//                 <img src={logo11} alt="logo" className='_logo'/>
//                 <img src={logo12} alt="logo" className='_logo'/>
//                 <img src={logo13} alt="logo" className='_logo'/>
//             </div>         
//         </div>
//         </div>
//     </section>
//   )
// }

// export default LogosSlide