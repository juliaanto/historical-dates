import DATA from '../data/data';
import { Events } from '../../types/data';

const currentPointOffset = 360/DATA.length - 30;

export const getPointAngle = (item: Events) => (360/DATA.length)*(DATA.indexOf(item) + 1) - currentPointOffset;

export const getStartBasisPosition = (prevIndex: number) => -(360/DATA.length)*prevIndex;

export const getFinishBasisPosition = (prevIndex: number, currentIndex: number) => Math.abs((360/DATA.length)*(prevIndex - currentIndex)) < 180 ? -(360/DATA.length)*currentIndex : (360 - Math.abs((360/DATA.length)*currentIndex)) % 360;