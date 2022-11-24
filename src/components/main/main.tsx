import Block from './main.styled';
import TimeWheel from '../time-wheel/time-wheel';
import { useState } from "react";

function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
    
  return (
    <Block>
      <Block.Heading>Исторические даты</Block.Heading>
      <TimeWheel 
        currentIndex={currentIndex}
        handleChangeCurrentIndex={(index: number) => setCurrentIndex(index)}
      />
    </Block>
  )
}

export default Main;