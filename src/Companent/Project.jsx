import './Project.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useEffect, useState } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css'




function Project() {

    useEffect(()=>{
              Aos.init();
    },[]);

  return (
    
    <div  data-aos="zoom-out-up" className='container projectcontainer py-5'>
      <h1 className='pb-5'>Projects</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >



        <SwiperSlide>
        <div  >
           <div>
           <img src="src\assets\me\1748088490718.jpg" alt="" />
         </div>
          <h1>Slide 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
          </SwiperSlide>
        <SwiperSlide>
         <div>
           <img src="src\assets\me\1748088490718.jpg" alt="" />
         </div>
          <h1>Slide 1</h1>
        </SwiperSlide>
        <SwiperSlide>    
         <div>
           <img src="src\assets\me\1748088490718.jpg" alt="" />
         </div>
          <h1>Slide 1</h1>
          </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Project