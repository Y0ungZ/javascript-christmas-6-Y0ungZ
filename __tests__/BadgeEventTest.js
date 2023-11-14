import BadgeEvent from '../src/domain/gift-event/BadgeEvent.js';

describe('뱃지 발급 테스트', () => {
  // given
  const inputs = [
    [0, '없음'],
    [5000, '별'],
    [4999, '없음'],
    [10000, '트리'],
    [9999, '별'],
    [19999, '트리'],
    [20000, '산타'],
    [50000, '산타'],
  ];

  test.each([...inputs])(
    '총혜택이 %s원이면 뱃지는 (%s)이다.',
    (benefitPrice, badge) => {
      // when
      const badgeEvent = new BadgeEvent(benefitPrice);
      // then
      expect(badgeEvent.calculateBadgeType()).toBe(badge);
    },
  );
});
