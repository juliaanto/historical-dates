
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useSwiper } from "swiper/react";
import useViewport from "../../common/hooks/useViewport";
import Block from "./event.styled";

type EventProps = {
  year: number;
  description: string;
  currentIndex: number;
}

function Event({year, description, currentIndex}: EventProps) {
  const swiper = useSwiper();
  const slideRef = useRef<any>();
  const isMobile = useViewport();

  useEffect(() => {
    swiper?.slideTo(0, 0);
  }, [currentIndex, swiper])

  useLayoutEffect(() => {
    const eventAppearance = gsap.context(() => {
      if (!slideRef.current) {
        return;
      }
      gsap.from(slideRef.current, {
        y: isMobile ? 10 : 5,
        opacity: 0,
        duration: 0.3,
        delay: 0.3
      })
    }, slideRef);

    return () => eventAppearance.revert();
  }, [currentIndex, isMobile]);

  return (
    <Block ref={slideRef}>
      <Block.Year>{year}</Block.Year>
      <Block.Description>{description}</Block.Description>
    </Block>
  )
}

export default Event;