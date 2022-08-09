import React from 'react'
import '../css/industries.css'
import {   A11y , Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Swipper = () => {
  return (
    <div>
<Swiper  className="swiper"
      // install Swiper modules
      modules={[ Pagination , A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
     
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide
>
          <div className="col-md-8 col-8 mx-auto pt-5">
          <p className='swipper_para'>
          ESAD connects people and assets with technology that improves efficiency,
     safety, and reliability. When industry leaders leverage a comprehensive digital transformation
      strategy that uses real-time data to optimize operations, predict outcomes, and provide risk-based 
      guidance, they can ensure business continuity, maximize return on capital and, enhance customer
       experiences.
          </p>
          </div>

      </SwiperSlide>
      <SwiperSlide> 
      <div className="col-md-8 col-8 mx-auto pt-5">
      <p className='swipper_para'>
      ESAD’s capabilities in engineering, monitoring & control, asset performance,
     and operations optimization is a perfect fit for the power industry operators seeking to digitally
      transform their operations to reduce risk, save costs, optimize performance, and speed crisis response.

      </p>
      </div>
      </SwiperSlide>
      <SwiperSlide> 
      <div className="col-md-8 col-8 mx-auto pt-5">
     <p className='swipper_para'>
     Our energy systems based portfolio of Performance solutions and Asset Performance Management, 
combined with deep domain expertise have led to proven success with customers.
     </p>
</div>
     </SwiperSlide>
    </Swiper>

        
    </div>
  )
}

export default Swipper