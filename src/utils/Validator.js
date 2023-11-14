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
    if (
      Number(count) < 1
      || Number(count) > 20
      || Number.isNaN(Number(count))
    ) {
      throw new ValidationError(ERROR_MESSAGE.invalidOrder);
    }
  },

  checkDuplicateMenus(menus) {
    const menuSet = new Set();
    menus.forEach(menu => {
      const [name, count] = menu.split('-');
      if (menuSet.has(name))
        throw new ValidationError(ERROR_MESSAGE.invalidOrder);
      menuSet.add(name);
    });
  },

  checkOnlyDrinkMenus(menus) {
    const typeSet = new Set();
    menus.forEach(menu => {
      const [name, count] = menu.split('-');
      MENUS.types.forEach(type => {
        if (MENUS[type][name]) {
          typeSet.add(type);
        }
      });
    });
    if (typeSet.size === 1 && Array.from(typeSet)[0] === 'drink')
      throw new ValidationError(ERROR_MESSAGE.invalidOrder);
  },

  checkSumMenusCount(menus) {
    let sum = 0;
    menus.forEach(menu => {
      const [name, count] = menu.split('-');
      sum += Number(count);
    });
    this.checkValidMenuCount(sum);
  },
};

export default Validator;
