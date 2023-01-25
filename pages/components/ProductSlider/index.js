// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { swiperImage } from './swiperImage';
import React, { useState } from 'react';
// Import Swiper styles
import 'swiper/css';

export default function ProductSlider() {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
  return (
    <>
    <div className="mx-auto bg-regal-blue px-40  pt-20 pb-32 sm:pt-10 sm:pb-30 text-center "> 
    <div className="max-w-7xl m-auto border-t-2 border-font-gray border-t-solid">
        <div className=' pt-20 pb-20 sm:pt-34'>
            <h2 class="text-font-green font-medium font-Montserrat  leading-tight text-4xl mt-0 mb-2 uppercase font-semibold">Product Images</h2>
        </div>
        <div>
            <Swiper
            spaceBetween={10}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {swiperImage.map((swiperImages, i) => (
                    <SwiperSlide key={i}   onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                        <img className='w-full' src={swiperImages.src} />
                        {isHovering ? (
                    <p className='text-red-600'>hovered</p>
                    ) : (
                        <p className='text-yellow-600'>not hovered</p>
                    )}
                    </SwiperSlide>
                ))}
          </Swiper>
        </div>
        </div>
    </div>
</>
  );
}