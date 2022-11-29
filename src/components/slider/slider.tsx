import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from 'swiper/react';

import Block from './slider.styled';
import DATA from '../../common/data/data';
import Event from '../event/event';
import { Navigation, Pagination } from "swiper";
import { sortTopics } from '../../common/utils/sort-data';
import useViewport from '../../common/hooks/useViewport';

type SliderProps = {
  currentIndex: number;
}

function Slider({currentIndex}: SliderProps) {
  const data = sortTopics(DATA);
  const isMobile = useViewport();
  
  return (
    <Block>
      <Swiper
        spaceBetween={isMobile ? 25 : 80}
        slidesPerView={"auto"}
        modules={[Navigation, Pagination]}
        navigation={!isMobile}
        pagination={isMobile ? {clickable: true} : false}
        grabCursor
        initialSlide={0}
      >
        {data[currentIndex].events.map((item, index) => (
          <SwiperSlide key={index}>
            <Event year={item.year} description={item.description} currentIndex={currentIndex} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Block>
  )
}

export default Slider;