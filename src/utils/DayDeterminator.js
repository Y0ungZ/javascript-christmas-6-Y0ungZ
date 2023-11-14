import { WEEKDAY_TEXT, WEEKEND_TEXT } from '../constants/discounts.js';

const DayDeterminator = {
  getDayType(day) {
    if (Number(day) % 7 === 1 || Number(day) % 7 === 2) {
      return WEEKEND_TEXT;
    }
    return WEEKDAY_TEXT;
  },
};

export default DayDeterminator;
