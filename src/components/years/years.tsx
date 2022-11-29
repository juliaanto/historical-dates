import { useEffect, useState } from "react";
import DATA from "../../common/data/data";
import usePreviousValue from "../../common/hooks/usePreviousValue";
import { getBeginningYear, getEndingYear, sortTopics } from "../../common/utils/sort-data";
import { animateYear } from "../../common/utils/year";
import Block from "./years.styled";

type YearsProps = {
  currentIndex: number;
}

function Years({currentIndex}: YearsProps) {
  const data = sortTopics(DATA);
  const prevIndex = usePreviousValue(currentIndex) || 0;
  
  const beginningYearPrev = getBeginningYear(data, prevIndex);
  const beginningYearCurrent = getBeginningYear(data, currentIndex);
  const endingYearPrev = getEndingYear(data, prevIndex);
  const endingYearCurrent = getEndingYear(data, currentIndex);

  const [beginningYear, setBeginningYear] = useState(beginningYearPrev);
  const [endingYear, setEndingYear] = useState(endingYearPrev);

  useEffect(() => {
    animateYear(beginningYearCurrent, beginningYearPrev, setBeginningYear);
    animateYear(endingYearCurrent, endingYearPrev, setEndingYear);
  }, [beginningYearCurrent, beginningYearPrev, currentIndex, endingYearCurrent, endingYearPrev])

  return (
    <Block>
      <Block.Year $isBegining>{beginningYear}</Block.Year>
      <Block.Year>{endingYear}</Block.Year>
    </Block>
  )
}

export default Years;