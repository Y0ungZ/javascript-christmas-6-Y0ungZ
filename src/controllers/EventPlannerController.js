import {
  DAY_DISCOUNT,
  STANDARD_PRICE,
  WEEKDAY_DISCOUNT_TITLE,
  WEEKDAY_TEXT,
  WEEKEND_DISCOUNT_TITLE,
  WEEKEND_TEXT,
} from '../constants/discounts.js';
import { GIFT_TITLE } from '../constants/gift.js';
import { MENUS } from '../constants/menus.js';
import DayDiscount from '../domain/discount-event/DayDiscount.js';
import GiftEvent from '../domain/gift-event/GiftEvent.js';
import MenuDiscount from '../domain/discount-event/MenuDiscount.js';
import DayDeterminator from '../utils/DayDeterminator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class EventPlannerController {
  async main() {
    OutputView.printStartText();
    const day = await InputView.readDay();
    const menus = await InputView.readMenus();
    OutputView.printEventText(day);
    OutputView.printMenu(menus);
    const totalPrice = this.getSumPrice(menus);
    OutputView.printBeforeDiscountPrice(totalPrice);
    OutputView.printGiftMenu(totalPrice);
    OutputView.printBenefitTitle(totalPrice);
    const benefitPrices = this.showBenefitList(day, menus, totalPrice);
    OutputView.printTotalBenefitPrice(benefitPrices.benefit);
    OutputView.printAfterDiscountPrice(totalPrice - benefitPrices.discount);
    OutputView.printEventBadge(benefitPrices.benefit);
  }

  getSumPrice(menus) {
    let sum = 0;

    menus.forEach(menu => {
      const [name, count] = menu.split('-');
      MENUS.types.forEach(type => {
        if (MENUS[type][name]) {
          sum += Number(MENUS[type][name]) * Number(count);
        }
      });
    });
    return sum;
  }

  showBenefitList(day, menus, totalPrice) {
    if (totalPrice < STANDARD_PRICE) {
      return {
        benefit: 0,
        discount: 0,
      };
    }
    return this.caclulateBenefitPrices(day, menus, totalPrice);
  }

  caclulateBenefitPrices(day, menus, totalPrice) {
    const dayBenefitPrice = this.getDayDiscountPrice(day);
    const menuBenefitPrice = this.getMenuDiscountPrice(day, menus);
    const giftEventPrice = this.getGiftEventPrice(totalPrice);
    return {
      benefit: dayBenefitPrice + menuBenefitPrice + giftEventPrice,
      discount: dayBenefitPrice + menuBenefitPrice,
    };
  }

  getDayDiscountPrice(day) {
    const dayDiscount = new DayDiscount(Number(day));
    const dayBenefitPrice = dayDiscount.calculateBenefitPrice();
    if (dayBenefitPrice) {
      OutputView.printBenefit(DAY_DISCOUNT.title, dayBenefitPrice);
    }
    const daySpecialBenefitPrice = dayDiscount.calculateSpecialBenefitPrice();
    if (daySpecialBenefitPrice) {
      OutputView.printBenefit(
        DAY_DISCOUNT.specialTitle,
        daySpecialBenefitPrice,
      );
    }
    return dayBenefitPrice + daySpecialBenefitPrice;
  }

  getMenuDiscountPrice(day, menus) {
    const dayType = DayDeterminator.getDayType(day);
    const menuDiscount = new MenuDiscount(dayType, menus);
    const menuBenefitPrice = menuDiscount.calculateBenefitPrice();
    if (dayType === WEEKDAY_TEXT) {
      OutputView.printBenefit(WEEKDAY_DISCOUNT_TITLE, menuBenefitPrice);
    }
    if (dayType === WEEKEND_TEXT) {
      OutputView.printBenefit(WEEKEND_DISCOUNT_TITLE, menuBenefitPrice);
    }
    return menuBenefitPrice;
  }

  getGiftEventPrice(totalPrice) {
    const giftEvent = new GiftEvent(totalPrice);
    const giftEventPrice = giftEvent.calculateBenefitPrice();
    if (giftEventPrice) {
      OutputView.printBenefit(GIFT_TITLE, giftEventPrice);
    }
    return giftEventPrice;
  }
}

export default EventPlannerController;
