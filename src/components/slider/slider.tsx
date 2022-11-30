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
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

type SliderProps = {
  currentIndex: number;
}

function Slider({currentIndex}: SliderProps) {
  const data = sortTopics(DATA);
  const isMobile = useViewport();
  const lineRef = useRef<any>();

  useLayoutEffect(() => {
    const eventAppearance = gsap.context(() => {
      if (!lineRef.current) {
        return;
      }
      
      gsap.from(lineRef.current, {
        y: 10,
        opacity: 0,
        duration: 0.3,
        delay: 0.3
      })
    }, lineRef);

    return () => eventAppearance.revert();
  }, [currentIndex, isMobile]);

  
  return (
    <Block>
      {isMobile &&
        <Block.Line ref={lineRef} />
      }
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