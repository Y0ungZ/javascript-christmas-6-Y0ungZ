import DayDiscount from '../src/domain/discount-event/DayDiscount';

describe('디데이 할인 테스트', () => {
  const increaseDays = Array.from({ length: 25 }, (_, idx) => [
    idx + 1,
    1000 + 100 * idx,
  ]);

  const notApplyDays = Array.from({ length: 6 }, (_, idx) => [26 + idx, 0]);

  test.each([...increaseDays, ...notApplyDays])(
    '%s일의 디데이 할인 적용 금액은 %s이다.',
    (day, benefitPrice) => {
      const dayDiscount = new DayDiscount(day);
      expect(dayDiscount.calculateBenefitPrice()).toBe(benefitPrice);
    },
  );
});
