
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useSwiper } from "swiper/react";
import usePreviousValue from "../../common/hooks/usePreviousValue";
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
  const prevSlideRef = useRef<any>();
  const isMobile = useViewport();
  const prevYear = usePreviousValue(year);
  const prevDescription = usePreviousValue(description);

  const ANIMATION_DURATION = 0.3;

  useEffect(() => {
    const timer = setTimeout(() => {
      swiper?.slideTo(0, 0);
    }, ANIMATION_DURATION * 1000)

    return () => clearTimeout(timer);
  }, [currentIndex, swiper])

  useLayoutEffect(() => {
    const eventDisappearance = gsap.context(() => {
      if (!prevSlideRef.current) {
        return;
      }
      
      gsap.to(prevSlideRef.current, {
        opacity: 0,
        duration: ANIMATION_DURATION,
      })
    }, prevSlideRef);

    const eventAppearance = gsap.context(() => {
      if (!slideRef.current) {
        return;
      }

      gsap.from(slideRef.current, {
        y: isMobile ? 10 : 5,
        opacity: 0,
        duration: ANIMATION_DURATION,
        delay: ANIMATION_DURATION + 0.2
      })
    }, slideRef);

    return () => {
      eventDisappearance.revert();
      eventAppearance.revert();
    }
  }, [currentIndex, isMobile]);

  return (
    <Block>
      <Block.PrevEvent ref={prevSlideRef}>
        <Block.Year>{prevYear}</Block.Year>
        <Block.Description>{prevDescription}</Block.Description>
      </Block.PrevEvent>
      <Block.CurrentEvent ref={slideRef}>
        <Block.Year>{year}</Block.Year>
        <Block.Description>{description}</Block.Description>
      </Block.CurrentEvent>
    </Block>
  )
}

export default Event;