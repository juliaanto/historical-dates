import { getFinishBasisPosition, getPointAngle, getStartBasisPosition } from "../../common/utils/angle";
import { useLayoutEffect, useRef } from "react";

import Block from "./point.styled";
import DATA from "../../common/data/data";
import { Events } from "../../types/data";
import gsap from "gsap";
import usePreviousValue from "../../common/hooks/usePreviousValue";
import theme from "../../theme/theme";

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
        rotation: -(getFinishBasisPosition(prevIndex, currentIndex) + getPointAngle(item)),
        duration: 1
      })
    }, pointRef);

    const topicDisappearance = gsap.context(() => {
      if (!topicPrevRef.current) {
        return;
      }

      gsap.fromTo(topicPrevRef.current, 
      {
        rotation: -(getStartBasisPosition(prevIndex) + getPointAngle(item)),
      },
      {
        rotation: -(getFinishBasisPosition(prevIndex, currentIndex) + getPointAngle(item)),
        x: -(getFinishBasisPosition(prevIndex, currentIndex) + getPointAngle(item)) > 0 ? 60 : -100,
        y: -(getFinishBasisPosition(prevIndex, currentIndex) + getPointAngle(item)) > 0 ? -20 : -220,
        duration: 1,
      })

      gsap.to(topicPrevRef.current, 
        {
          color: "transparent",
          duration: 0.3
        })
    }, topicPrevRef);

    const topicAppearance = gsap.context(() => {
      if (!topicCurrentRef.current) {
        return;
      }

      gsap.fromTo(topicCurrentRef.current, 
      {
        rotation: -(getStartBasisPosition(prevIndex) + getPointAngle(item)),
      },
      {
        rotation: -(getFinishBasisPosition(prevIndex, currentIndex) + getPointAngle(item)),
        duration: 1,
      })

      gsap.fromTo(topicCurrentRef.current, 
        {
          color: "transparent"
        },
        {
          color: theme.color.basicDark,
          duration: 0.1,
          delay: prevIndex !== currentIndex ? 1 : 0
        })
    }, topicCurrentRef);

    return () => {
      pointRotation.revert();
      topicDisappearance.revert();
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
        </Block.Point>
      </Block.PointWrapper>
      <Block.Topic 
        $isPrev={(DATA.indexOf(item) === prevIndex)} 
        $isCurrent={(DATA.indexOf(item) === currentIndex)}
        ref={DATA.indexOf(item) === currentIndex ? topicCurrentRef : topicPrevRef}
      >
        {item.topic}
      </Block.Topic>
    </Block>
  )
}

export default Point;