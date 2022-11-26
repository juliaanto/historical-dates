import DATA from '../data/data';
import { Events } from '../../types/data';

const currentPointOffset = 360/DATA.length - 30;

export const getPointAngle = (item: Events) => (360/DATA.length)*(DATA.indexOf(item) + 1) - currentPointOffset;

export const getStartBasisPosition = (prevIndex: number) => -(360/DATA.length)*prevIndex;

export const getFinishBasisPosition = (prevIndex: number, currentIndex: number) => {
  const startPosition = getStartBasisPosition(prevIndex);
  let offset = 360/DATA.length*(prevIndex - currentIndex);
  
  if (offset > 180) {
    offset -= 360;
  } else if (offset < -180) {
    offset += 360;
  }

  return startPosition + offset;
}