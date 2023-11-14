import { ERROR_MESSAGE } from '../constants/messages';
import ValidationError from './ValidationError.js';

const Validator = {
  checkValidDay(day) {
    if (Number(day) < 1 || Number(day) > 31 || Number.isNaN(Number(day))) {
      throw new ValidationError(ERROR_MESSAGE.invalidDay);
    }
  },
};

export default Validator;
