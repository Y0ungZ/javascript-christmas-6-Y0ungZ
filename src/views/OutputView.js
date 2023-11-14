import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';
import { GIFT_COUNT, GIFT_MENU } from '../constants/gift.js';
import GiftEvent from '../domain/gift-event/GiftEvent.js';

const OutputView = {
  printStartText() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printEventText(day) {
    Console.print(OUTPUT_MESSAGE.event(day));
  },

  printMenu(menus) {
    Console.print(OUTPUT_MESSAGE.titleMenu);
    menus.forEach(menu => {
      const [name, count] = menu.split('-');
      Console.print(OUTPUT_MESSAGE.menuTemplate(name, count));
    });
  },

  printBeforeDiscountPrice(price) {
    Console.print(OUTPUT_MESSAGE.titleBeforeDiscount);
    Console.print(OUTPUT_MESSAGE.positivePrice(price));
  },

  printGiftMenu(totalPrice) {
    Console.print(OUTPUT_MESSAGE.titleGift);
    const giftEvent = new GiftEvent(totalPrice);
    if (giftEvent.calculateBenefitPrice() === 0) {
      Console.print(OUTPUT_MESSAGE.noneText);
    } else {
      Console.print(OUTPUT_MESSAGE.menuTemplate(GIFT_MENU, GIFT_COUNT));
    }
  },
};

export default OutputView;
