import { useEffect } from "react";
import { useSwiper } from "swiper/react";
import Block from "./event.styled";

type EventProps = {
  year: number;
  description: string;
  currentIndex: number;
}

function Event({year, description, currentIndex}: EventProps) {
  const swiper = useSwiper();

  useEffect(() => {
    swiper?.slideTo(0, 0);
  }, [currentIndex, swiper])

  return (
    <Block>
      <Block.Year>{year}</Block.Year>
      <Block.Description>{description}</Block.Description>
    </Block>
  )
}

export default Event;