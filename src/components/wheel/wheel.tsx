import Block from "./wheel.styled";
import DATA from "../../data/data";
import { getAngle } from "../../utils/angle";

type WheelProps = {
  currentIndex: number;
  handleChangeCurrentIndex: (index: number) => void;
}

function Wheel({currentIndex, handleChangeCurrentIndex}: WheelProps) {
  return (
    <Block>
      <Block.Basis>
        {DATA.map((item, index) => (
          <Block.Segment $angle={getAngle(item, currentIndex)} key={index}>
            <Block.Point 
              $angle={getAngle(item, currentIndex)}
              $isCurrent={DATA.indexOf(item) + 1 === currentIndex}
              onClick={() => handleChangeCurrentIndex(DATA.indexOf(item) + 1)}
            >
              {DATA.indexOf(item) + 1 === currentIndex &&
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