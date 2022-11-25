import { getFinishBasisPosition, getPointAngle, getStartBasisPosition } from "../../utils/angle";
import { useEffect, useLayoutEffect, useRef } from "react";

import Block from "./point.styled";
import DATA from "../../data/data";
import { Events } from "../../types/data";
import gsap from "gsap";

type PointProps = {
  item: Events;
  currentIndex: number;
  handleChangeCurrentIndex: (index: number) => void;
}

function Point({item, currentIndex, handleChangeCurrentIndex}: PointProps) {
  const pointRef = useRef<any>();

  function usePreviousValue(value: any) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevIndex = usePreviousValue(currentIndex) || 0;

  useLayoutEffect(() => {
    const pointCorrection = gsap.context(() => {
      gsap.fromTo(pointRef.current, 
      {
        rotation: -(getStartBasisPosition(prevIndex) + getPointAngle(item))
      },
      {
        duration: 1,
        rotation: -(getFinishBasisPosition(prevIndex, currentIndex) + getPointAngle(item))
      })
    }, pointRef);

    return () => pointCorrection.revert();
  }, [currentIndex, item, prevIndex]);
  
  return (
    <Block 
      $angle={getPointAngle(item)}
    >
      <Block.Point 
        $isCurrent={DATA.indexOf(item) === currentIndex}
        onClick={() => handleChangeCurrentIndex(DATA.indexOf(item))}
        ref={pointRef}
      >
        {DATA.indexOf(item) === currentIndex &&
          <>
            <Block.Index>{DATA.indexOf(item) + 1}</Block.Index>
            <Block.Topic>{item.topic}</Block.Topic>
          </>
        }
      </Block.Point>
    </Block>
  )
}

export default Point;