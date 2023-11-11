import { DAY_DISCOUNT } from '../../constants/discounts.js';

class DayDiscount {
  constructor(day) {
    this.day = day;
  }

  calculateBenefitPrice() {
    const price = 0;
    if (this.day > DAY_DISCOUNT.endDay) {
      return price;
    }
    return DAY_DISCOUNT.basePrice + DAY_DISCOUNT.increasePrice * (this.day - 1);
  }
}

export default DayDiscount;
