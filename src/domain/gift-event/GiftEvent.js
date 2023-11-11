import { GIFT_PRICE, STANDARD_PRICE } from '../../constants/gift.js';

class GiftEvent {
  constructor(totalPrice) {
    this.totalPrice = totalPrice;
  }

  calculateBenefitPrice() {
    if (this.totalPrice < STANDARD_PRICE) {
      return 0;
    }
    return GIFT_PRICE;
  }
}

export default GiftEvent;
