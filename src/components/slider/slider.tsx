import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from 'swiper/react';

import Block from './slider.styled';
import DATA from '../../data/data';
import Event from '../event/event';
import { Navigation } from "swiper";
import { sortTopics } from '../../utils/sort-data';

type SliderProps = {
  currentIndex: number;
}

function Slider({currentIndex}: SliderProps) {
  const data = sortTopics(DATA);
  
  return (
    <Block>
      <Swiper
        spaceBetween={80}
        slidesPerView={3}
        navigation
        modules={[Navigation]}
        grabCursor
      >
        {data[currentIndex].events.map((item, index) => (
          <SwiperSlide key={index}>
            <Event year={item.year} description={item.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Block>
  )
}

export default Slider;