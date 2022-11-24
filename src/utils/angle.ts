import DATA from '../data/data';
import { Events } from '../types/data';

const CURRENT_POINT_OFFSET = 30;

export const getAngle = (item: Events, currentIndex: number) => (360/DATA.length)*(DATA.indexOf(item) + 1) - (360/DATA.length)*currentIndex + CURRENT_POINT_OFFSET;