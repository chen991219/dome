import React from "react";

import imger from '../image/11.png'
import imgers from '../image/22.jpg'
import imgerss from '../image/33.jpg'
import imgersss from '../image/44.jpg'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,EffectFade]);

export default class carousel extends React.Component {
  render() {
    return (
      <div>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={{height:280,width:720}}
      loop={true}
      EffectFade={true }
    >
      <SwiperSlide><img src={imger}/></SwiperSlide>
      <SwiperSlide><img src={imgers}/></SwiperSlide>
      <SwiperSlide><img src={imgerss}/></SwiperSlide>
      <SwiperSlide><img src={imgersss}/></SwiperSlide>
      <SwiperSlide><img src={imger}/></SwiperSlide>
      <SwiperSlide><img src={imgers}/></SwiperSlide>
      <SwiperSlide><img src={imgerss}/></SwiperSlide>
      <SwiperSlide><img src={imgersss}/></SwiperSlide>
    </Swiper>
      </div>
    );
  }
}
