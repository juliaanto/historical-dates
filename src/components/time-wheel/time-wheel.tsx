import { getBeginningYear, getEndingYear, sortTopics } from "../../common/utils/sort-data";
import { getFinishBasisPosition, getStartBasisPosition } from "../../common/utils/angle";
import { useLayoutEffect, useRef } from "react";

import Block from "./time-wheel.styled";
import DATA from "../../common/data/data";
import Point from "../point/point";
import gsap from "gsap";
import useViewport from "../../common/hooks/useViewport";
import usePreviousValue from "../../common/hooks/usePreviousValue";

type WheelProps = {
  currentIndex: number;
  handleChangeCurrentIndex: (index: number) => void;
}

function Wheel({currentIndex, handleChangeCurrentIndex}: WheelProps) {
  const data = sortTopics(DATA);
  const basisRef = useRef<any>();
  const isMobile = useViewport();
  const prevIndex = usePreviousValue(currentIndex) || 0;
  
  useLayoutEffect(() => {
    const basisRotation = gsap.context(() => {
      if (!basisRef.current) {
        return;
      }
      
      gsap.fromTo(basisRef.current, {
        rotation: getStartBasisPosition(prevIndex)
      },
      {
        duration: 1, 
        rotation: getFinishBasisPosition(prevIndex, currentIndex)
      })
    }, basisRef);

    return () => basisRotation.revert();
  }, [currentIndex, prevIndex]);

  return (
    <Block>
      {!isMobile &&
        <Block.Basis ref={basisRef}>
          {data.map((item, index) => (
            <Point key={index} item={item} currentIndex={currentIndex} handleChangeCurrentIndex={handleChangeCurrentIndex} />
          ))}
        </Block.Basis>
      }
      <Block.Years>
          <Block.Year $isBegining>{getBeginningYear(data, currentIndex)}</Block.Year>
          <Block.Year>{getEndingYear(data, currentIndex)}</Block.Year>
        </Block.Years>
    </Block>
  )
}

export default Wheel;