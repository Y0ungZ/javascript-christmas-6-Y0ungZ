import { MENU_DISCOUNT } from '../../constants/discounts.js';
import { CONVERT_STRING, MENUS } from '../../constants/menus.js';

class MenuDiscount {
  constructor(type, menus) {
    this.type = type;
    this.menus = menus;
  }

  calculateBenefitPrice() {
    let price = 0;

    this.menus.forEach(menu => {
      if (MENUS[CONVERT_STRING[this.type]][menu]) {
        price += MENU_DISCOUNT;
      }
    });

    return price;
  }
}

export default MenuDiscount;
