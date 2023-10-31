import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import SlideComponent from '../slidecomponent/SlideComponent';
import { slideContents } from '../../data'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swipercomponent.css'

const SwiperComponent = () => {
  return (
    <Swiper        
       // install Swiper modules
       modules={[Navigation, Pagination, A11y]}
       spaceBetween={24}
       slidesPerView={1}
       loop
      //  centeredSlides={ true  }
       autoplay={
        {
          delay: 2500,
          disableOnInteraction: false
        }
       }
       navigation={{
        prevEl: '#nav-left',
        nextEl: '#nav-right',
        clickable: true
       }}
       keyboard={
        { enabled: true }
       }
       breakpoints={
        {
          700: {
            slidesPerView: 2
           },
           1062: {
            slidesPerView: 3
           }
        }
       }
       pagination={
        { 
          el:'.swiper-custom-pagination',
          clickable: true,
          renderBullet: function(index, className){
            return `<div class="${className}">
            <span class="number">${index+1}</span>
            <span class ="line"></span>
            </div>`
          }
        }
      }       
      //  onSwiper={(swiper) => console.log(swiper)}
      //  onSlideChange={() => console.log('slide change')}
    className='inner__container'
    >
      {
        slideContents.map(slideContent => (
          <SwiperSlide key={slideContent.id} >  
            <SlideComponent image={slideContent.imgURL} title={slideContent.title} moreInfo={slideContent.moreInfo}/>         
          </SwiperSlide>            
          ))
      }
      <div className='custom__navigation'>
        <div className="custom-arrow" id='nav-left'><AiOutlineArrowLeft className='icon'/>Previous</div>        
        <div className="custom-arrow" id='nav-right'>Next<AiOutlineArrowRight className='icon icon-2'/></div>
      </div>
      <div className="swiper-custom-pagination">
      </div>      
    </Swiper>
  )
}

export default SwiperComponent