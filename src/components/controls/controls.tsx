import Block from "./controls.styled";
import DATA from "../../data/events";
import { useState } from "react";

function Controls() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrevButtonClick = () => {
    if (currentIndex !== 1) {
      setCurrentIndex(currentIndex - 1)
    }
  };

  const handleNextButtonClick = () => {
    if (currentIndex !== DATA.length) {
      setCurrentIndex(currentIndex + 1)
    }
  };
  
  return (
    <Block>
      <Block.Index>
        {new Intl.NumberFormat('en-IN', { minimumIntegerDigits: 2 }).format(currentIndex)}/
        {new Intl.NumberFormat('en-IN', { minimumIntegerDigits: 2 }).format(DATA.length)}
      </Block.Index>
      <Block.Button onClick={handlePrevButtonClick} $isDisabled={currentIndex === 1} />
      <Block.Button onClick={handleNextButtonClick} $isDisabled={currentIndex === DATA.length} $isNext/>
    </Block>
  )
}

export default Controls;