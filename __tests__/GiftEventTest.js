import GiftEvent from '../src/domain/gift-event/GiftEvent.js';

describe('증정 이벤트 테스트', () => {
  // given
  const inputs = [
    [119999, 0],
    [120000, 25000],
  ];

  test.each([...inputs])(
    '총주문 금액이 12만원 이상이라면 샴페인 1개를 증정한다.',
    (totalPrice, benefitPrice) => {
      // when
      const giftEvent = new GiftEvent(totalPrice);
      // then
      expect(giftEvent.calculateBenefitPrice()).toBe(benefitPrice);
    },
  );
});
