import { MENUS } from '../constants/menus.js';
import { ERROR_MESSAGE } from '../constants/messages.js';
import ValidationError from './ValidationError.js';

const Validator = {
  checkValidDay(day) {
    if (Number(day) < 1 || Number(day) > 31 || Number.isNaN(Number(day))) {
      throw new ValidationError(ERROR_MESSAGE.invalidDay);
    }
  },

  checkValidMenus(menus) {
    menus.forEach(menu => {
      const [name, count] = menu.split('-');
      let flag = false;
      MENUS.types.forEach(type => {
        if (MENUS[type][name]) {
          flag = true;
        }
      });
      if (!flag) throw new ValidationError(ERROR_MESSAGE.invalidOrder);
      this.checkValidMenuCount(count);
    });
  },

  checkValidMenuCount(count) {
    if (Number(count) < 1 || Number.isNaN(Number(count))) {
      throw new ValidationError(ERROR_MESSAGE.invalidOrder);
    }
  },
};

export default Validator;
