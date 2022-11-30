import Block from './main.styled';
import Slider from '../slider/slider';
import TimeWheel from '../time-wheel/time-wheel';
import { useState } from "react";
import useViewport from '../../common/hooks/useViewport';
import Controls from '../controls/controls';

function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useViewport();

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
    
  return (
    <Block>
      <Block.Heading>Исторические даты</Block.Heading>
      <TimeWheel 
        currentIndex={currentIndex}
        handleChangeCurrentIndex={(index: number) => setCurrentIndex(index)}
      />
      {!isMobile &&
        <Controls 
          currentIndex={currentIndex}
          handleChangeCurrentIndex={(index: number) => setCurrentIndex(index)}
        />}
      <Slider currentIndex={currentIndex} />
      {isMobile &&
        <Controls 
          currentIndex={currentIndex}
          handleChangeCurrentIndex={(index: number) => setCurrentIndex(index)}
        />}
    </Block>
  )
}

export default Main;