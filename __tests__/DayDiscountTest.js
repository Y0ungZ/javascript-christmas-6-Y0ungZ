import DayDiscount from '../src/domain/discount-event/DayDiscount';

describe('디데이 할인 테스트', () => {
  // given
  const increaseDays = Array.from({ length: 25 }, (_, idx) => [
    idx + 1,
    1000 + 100 * idx,
  ]);
  const notApplyDays = Array.from({ length: 6 }, (_, idx) => [26 + idx, 0]);

  test.each([...increaseDays, ...notApplyDays])(
    '%s일의 디데이 할인 적용 금액은 %s이다.',
    (day, benefitPrice) => {
      // when
      const dayDiscount = new DayDiscount(day);
      // then
      expect(dayDiscount.calculateBenefitPrice()).toBe(benefitPrice);
    },
  );

  // given
  const days = [
    [2, 0],
    [3, 1000],
    [24, 1000],
    [25, 1000],
    [31, 1000],
  ];

  test.each([...days])(
    '%s일의 특별 할인 적용 금액은 %s이다.',
    (day, benefitPrice) => {
      // when
      const dayDiscount = new DayDiscount(day);
      // then
      expect(dayDiscount.calculateSpecialBenefitPrice()).toBe(benefitPrice);
    },
  );
});
