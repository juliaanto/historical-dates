import Block from "./time-wheel.styled";
import Controls from "../controls/controls";
import Wheel from "../wheel/wheel";

function TimeWheel() {
  return (
    <Block>
      <Wheel />
      <Controls />
    </Block>
  )
}

export default TimeWheel;