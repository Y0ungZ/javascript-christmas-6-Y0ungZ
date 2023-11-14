import {
  MENU_DISCOUNT,
  WEEKDAY_DISCOUNT_TYPE,
  WEEKDAY_TEXT,
  WEEKEND_DISCOUNT_TYPE,
  WEEKEND_TEXT,
} from '../../constants/discounts.js';
import { CONVERT_STRING, MENUS } from '../../constants/menus.js';

class MenuDiscount {
  constructor(type, menus) {
    this.type = type;
    this.menus = menus;
  }

  convertToMenu() {
    if (this.type === WEEKDAY_TEXT) {
      return WEEKDAY_DISCOUNT_TYPE;
    }
    if (this.type === WEEKEND_TEXT) {
      return WEEKEND_DISCOUNT_TYPE;
    }
  }

  calculateBenefitPrice() {
    let price = 0;

    this.menus.forEach(menu => {
      const [name, count] = menu.split('-');
      if (MENUS[CONVERT_STRING[this.convertToMenu()]][name]) {
        price += MENU_DISCOUNT * Number(count);
      }
    });

    return price;
  }
}

export default MenuDiscount;
