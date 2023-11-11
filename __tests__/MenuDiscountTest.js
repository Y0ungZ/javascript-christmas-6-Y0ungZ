import MenuDiscount from '../src/domain/discount-event/MenuDiscount.js';

describe('메뉴 할인 테스트', () => {
  // given
  const dessertInputs = [
    ['시저샐러드,티본스테이크,바비큐립', 0],
    ['해산물파스타', 0],
    ['초코케이크,초코케이크', 4046],
    ['초코케이크,크리스마스파스타', 2023],
    ['아이스크림,초코케이크', 4046],
  ];

  test.each([...dessertInputs])(
    '디저트 메뉴 1개당 2,023원이 할인된다.',
    (input, benefitPrice) => {
      // when
      const menuDiscount = new MenuDiscount('디저트', input.split(','));
      // then
      expect(menuDiscount.calculateBenefitPrice()).toBe(benefitPrice);
    },
  );

  // given
  const mainInputs = [
    ['시저샐러드,티본스테이크,바비큐립', 4046],
    ['해산물파스타', 2023],
    ['해산물파스타,해산물파스타', 4046],
    ['초코케이크,크리스마스파스타', 2023],
    ['아이스크림,초코케이크', 0],
  ];

  test.each([...mainInputs])(
    '메인 메뉴 1개당 2,023원이 할인된다.',
    (input, benefitPrice) => {
      // when
      const menuDiscount = new MenuDiscount('메인', input.split(','));
      // then
      expect(menuDiscount.calculateBenefitPrice()).toBe(benefitPrice);
    },
  );
});
