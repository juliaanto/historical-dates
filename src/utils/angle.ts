import DATA from '../data/data';
import { Events } from '../types/data';

const CURRENT_POINT_OFFSET = 30;

export const getAngle = (item: Events) => (360/DATA.length)*(DATA.indexOf(item) + 1) - CURRENT_POINT_OFFSET;