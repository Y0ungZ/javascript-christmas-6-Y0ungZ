import { Console } from '@woowacourse/mission-utils';
import { STANDARD_PRICE } from '../constants/discounts.js';
import { GIFT_COUNT, GIFT_MENU } from '../constants/gift.js';
import { OUTPUT_MESSAGE } from '../constants/messages.js';
import BadgeEvent from '../domain/gift-event/BadgeEvent.js';
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

  printAfterDiscountPrice(price) {
    Console.print(OUTPUT_MESSAGE.titleAfterDiscount);
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

  printBenefitTitle(totalPrice) {
    Console.print(OUTPUT_MESSAGE.titleBenefitList);
    if (totalPrice < STANDARD_PRICE) {
      Console.print(OUTPUT_MESSAGE.noneText);
    }
  },

  printBenefit(name, price) {
    Console.print(OUTPUT_MESSAGE.benefitTemplate(name, price));
  },

  printTotalBenefitPrice(totalPrice) {
    Console.print(OUTPUT_MESSAGE.titleTotalBenefit);
    if (totalPrice > 0) {
      Console.print(OUTPUT_MESSAGE.negativePrice(totalPrice));
    } else {
      Console.print(OUTPUT_MESSAGE.positivePrice(totalPrice));
    }
  },

  printEventBadge(totalBenefitPrice) {
    Console.print(OUTPUT_MESSAGE.titleEventBadge);
    const badgeEvent = new BadgeEvent(totalBenefitPrice);
    Console.print(badgeEvent.calculateBadgeType());
  },
};

export default OutputView;
