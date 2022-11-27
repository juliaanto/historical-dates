import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from 'swiper/react';

import Block from './slider.styled';
import DATA from '../../common/data/data';
import Event from '../event/event';
import { Navigation } from "swiper";
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
        slidesPerView={isMobile ? 1.5 : 3}
        navigation={!isMobile}
        modules={[Navigation]}
        grabCursor
        style={{ marginLeft: '80px', marginRight: '80px', position: 'unset' }}
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