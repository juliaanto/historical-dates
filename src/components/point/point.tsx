import { getFinishBasisPosition, getPointAngle, getStartBasisPosition } from "../../common/utils/angle";
import { useLayoutEffect, useRef } from "react";

import Block from "./point.styled";
import DATA from "../../common/data/data";
import { Events } from "../../types/data";
import gsap from "gsap";
import usePreviousValue from "../../common/hooks/usePreviousValue";

type PointProps = {
  item: Events;
  currentIndex: number;
  handleChangeCurrentIndex: (index: number) => void;
}

function Point({item, currentIndex, handleChangeCurrentIndex}: PointProps) {
  const pointRef = useRef<any>();
  const topicPrevRef = useRef<any>();
  const topicCurrentRef = useRef<any>();
  const prevIndex = usePreviousValue(currentIndex) || 0;

  useLayoutEffect(() => {
    const pointRotation = gsap.context(() => {
      if (!pointRef.current) {
        return;
      }
      
      gsap.fromTo(pointRef.current, 
      {
        rotation: -(getStartBasisPosition(prevIndex) + getPointAngle(item))
      },
      {
        duration: 1,
        rotation: -(getFinishBasisPosition(prevIndex, currentIndex) + getPointAngle(item))
      })
    }, pointRef);

    const topicAppearance = gsap.context(() => {
      if (!topicCurrentRef.current) {
        return;
      }

      gsap.from(topicCurrentRef.current, 
      {
        duration: 0.1,
        delay: 1,
        color: "transparent"
      })
    }, topicCurrentRef);

    return () => {
      pointRotation.revert();
      topicAppearance.revert();
    }
  }, [currentIndex, item, prevIndex]);
  
  return (
    <Block $angle={getPointAngle(item)}>
      <Block.PointWrapper $isActive={DATA.indexOf(item) === currentIndex}>
        <Block.Point
          onClick={() => handleChangeCurrentIndex(DATA.indexOf(item))}
          ref={pointRef}
        >
          <Block.Index>{DATA.indexOf(item) + 1}</Block.Index>
          {(DATA.indexOf(item) === prevIndex || DATA.indexOf(item) === currentIndex) && 
            <Block.Topic ref={DATA.indexOf(item) === currentIndex ? topicCurrentRef : topicPrevRef}>{item.topic}</Block.Topic>
          }
        </Block.Point>
      </Block.PointWrapper>
    </Block>
  )
}

export default Point;