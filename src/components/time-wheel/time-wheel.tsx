import Block from "./time-wheel.styled";
import Controls from "../controls/controls";
import Wheel from "../wheel/wheel";

type TimeWheelProps = {
  currentIndex: number;
  handleChangeCurrentIndex: (index: number) => void;
}

function TimeWheel({currentIndex, handleChangeCurrentIndex}: TimeWheelProps) {
  return (
    <Block>
      <Wheel
        currentIndex={currentIndex}
        handleChangeCurrentIndex={handleChangeCurrentIndex}
      />
      <Controls
        currentIndex={currentIndex}
        handleChangeCurrentIndex={handleChangeCurrentIndex}
      />
    </Block>
  )
}

export default TimeWheel;