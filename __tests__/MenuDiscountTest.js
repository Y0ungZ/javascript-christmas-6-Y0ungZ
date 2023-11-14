import { WEEKDAY_TEXT, WEEKEND_TEXT } from '../src/constants/discounts.js';
import MenuDiscount from '../src/domain/discount-event/MenuDiscount.js';

describe('메뉴 할인 테스트', () => {
  // given
  const dessertInputs = [
    [['시저샐러드-1', '티본스테이크-1', '바비큐립-1'], 0],
    [['해산물파스타-1'], 0],
    [['초코케이크-2'], 4046],
    [['초코케이크-1', '크리스마스파스타-1'], 2023],
    [['아이스크림-2', '초코케이크-1'], 6069],
  ];

  test.each([...dessertInputs])(
    '평일에는 디저트 메뉴 1개당 2,023원이 할인된다.',
    (input, benefitPrice) => {
      // when
      const menuDiscount = new MenuDiscount(WEEKDAY_TEXT, input);
      // then
      expect(menuDiscount.calculateBenefitPrice()).toBe(benefitPrice);
    },
  );

  // given
  const mainInputs = [
    [['시저샐러드-1', '티본스테이크-1', '바비큐립-1'], 4046],
    [['해산물파스타-1'], 2023],
    [['해산물파스타-2'], 4046],
    [['초코케이크-1', '크리스마스파스타-1'], 2023],
    [['아이스크림-1', '초코케이크-1'], 0],
  ];

  test.each([...mainInputs])(
    '주말에는 메인 메뉴 1개당 2,023원이 할인된다.',
    (input, benefitPrice) => {
      // when
      const menuDiscount = new MenuDiscount(WEEKEND_TEXT, input);
      // then
      expect(menuDiscount.calculateBenefitPrice()).toBe(benefitPrice);
    },
  );
});
