import { useEffect, useLayoutEffect, useRef } from "react";

import Block from "./wheel.styled";
import DATA from "../../data/data";
import { getAngle } from "../../utils/angle";
import gsap from "gsap";

type WheelProps = {
  currentIndex: number;
  handleChangeCurrentIndex: (index: number) => void;
}

function Wheel({currentIndex, handleChangeCurrentIndex}: WheelProps) {
  const segmentRef = useRef<any>();

  function usePreviousValue(value: any) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevIndex = usePreviousValue(currentIndex) || 0;
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(segmentRef.current, {
        rotation: -(360/DATA.length)*prevIndex
      },
      {
        duration: 1, 
        rotation: Math.abs((360/DATA.length)*(prevIndex - currentIndex)) < 180 ? -(360/DATA.length)*currentIndex : 360 - Math.abs((360/DATA.length)*currentIndex)
      })
    }, segmentRef);

    return () => ctx.revert();
  }, [currentIndex, prevIndex]);
  
  return (
    <Block>
      <Block.Basis ref={segmentRef}>
        {DATA.map((item, index) => (
          <Block.Segment 
            $angle={getAngle(item)} 
            key={index}
          >
            <Block.Point 
              $angle={getAngle(item)}
              $isCurrent={DATA.indexOf(item) === currentIndex}
              onClick={() => handleChangeCurrentIndex(DATA.indexOf(item))}
            >
              {DATA.indexOf(item) === currentIndex &&
                <>
                  <Block.Index>{DATA.indexOf(item) + 1}</Block.Index>
                  <Block.Topic>{item.topic}</Block.Topic>
                </>
              }
            </Block.Point>
          </Block.Segment>
        ))}
      </Block.Basis>
    </Block>
  )
}

export default Wheel;