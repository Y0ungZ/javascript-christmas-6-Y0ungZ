const special = Object.freeze([3, 10, 17, 24, 25, 31]);

export const DAY_DISCOUNT = Object.freeze({
  basePrice: 1000,
  increasePrice: 100,
  startDay: 1,
  endDay: 25,
  special,
  title: '크리스마스 디데이 할인',
  specialTitle: '특별 할인',
});

export const MENU_DISCOUNT = 2023;

export const WEEKDAY_TEXT = '평일';
export const WEEKDAY_DISCOUNT_TITLE = '평일 할인';
export const WEEKDAY_DISCOUNT_TYPE = '디저트';

export const WEEKEND_TEXT = '주말';
export const WEEKEND_DISCOUNT_TITLE = '주말 할인';
export const WEEKEND_DISCOUNT_TYPE = '메인';

export const STANDARD_PRICE = 10000;
