import Block from "./controls.styled";
import DATA from "../../data/data";
import { sortTopics } from "../../utils/sort-data";

type ControlsProps = {
  currentIndex: number;
  handleChangeCurrentIndex: (index: number) => void;
}

function Controls({currentIndex, handleChangeCurrentIndex}: ControlsProps) {
  const data = sortTopics(DATA);

  const handlePrevButtonClick = () => {
    if (currentIndex !== 0) {
      handleChangeCurrentIndex(currentIndex - 1)
    }
  };

  const handleNextButtonClick = () => {
    if (currentIndex !== data.length - 1) {
      handleChangeCurrentIndex(currentIndex + 1)
    }
  };
  
  return (
    <Block>
      <Block.Index>
        {new Intl.NumberFormat('en-IN', { minimumIntegerDigits: 2 }).format(currentIndex + 1)}/
        {new Intl.NumberFormat('en-IN', { minimumIntegerDigits: 2 }).format(data.length)}
      </Block.Index>
      <Block.Button onClick={handlePrevButtonClick} $isDisabled={currentIndex === 0} />
      <Block.Button onClick={handleNextButtonClick} $isDisabled={currentIndex === data.length - 1} $isNext/>
    </Block>
  )
}

export default Controls;