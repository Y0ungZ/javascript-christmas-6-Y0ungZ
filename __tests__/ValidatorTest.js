import { ERROR_MESSAGE } from '../src/constants/messages';
import Validator from '../src/utils/Validator.js';

describe('유효성 검사 - 날짜', () => {
  test('올바른 날짜가 입력되면 예외가 발생하지 않는다', () => {
    expect(() => Validator.checkValidDay(3)).not.toThrow();
  });

  test.each([
    {
      input: 'str',
      case: '날짜가 숫자가 아니라면 예외가 발생한다.',
      message: ERROR_MESSAGE.invalidDay,
    },
    {
      input: 32,
      case: '날짜가 31보다 크면 예외가 발생한다.',
      message: ERROR_MESSAGE.invalidDay,
    },
    {
      input: -1,
      case: '날짜가 1보다 작으면 예외가 발생한다.',
      message: ERROR_MESSAGE.invalidDay,
    },
  ])('$case', ({ input, message }) => {
    expect(() => Validator.checkValidDay(input)).toThrow(message);
  });
});

describe('유효성 검사 - 메뉴', () => {
  test('올바른 메뉴가 입력되면 예외가 발생하지 않는다', () => {
    expect(() =>
      Validator.checkValidMenus(['아이스크림-1', '시저샐러드-1']),
    ).not.toThrow();
  });

  test('올바른 메뉴가 입력되면 예외가 발생하지 않는다', () => {
    expect(() =>
      Validator.checkDuplicateMenus(['아이스크림-1', '시저샐러드-1']),
    ).not.toThrow();
  });

  test('올바른 메뉴가 입력되면 예외가 발생하지 않는다', () => {
    expect(() =>
      Validator.checkOnlyDrinkMenus(['아이스크림-1', '시저샐러드-1']),
    ).not.toThrow();
  });

  test.each([
    {
      input: [''],
      case: '메뉴를 입력하지 않으면 예외가 발생한다.',
      message: ERROR_MESSAGE.invalidOrder,
    },
    {
      input: ['레드와인-1', '불닭볶음면-3'],
      case: '메뉴판에 존재하지 않는 메뉴 입력 시 예외가 발생한다.',
      message: ERROR_MESSAGE.invalidOrder,
    },
  ])('$case', ({ input, message }) => {
    expect(() => Validator.checkValidMenus(input)).toThrow(message);
  });

  test('중복된 메뉴가 입력되면 예외가 발생한다', () => {
    expect(() =>
      Validator.checkDuplicateMenus(['아이스크림-1', '아이스크림-1']),
    ).toThrow(ERROR_MESSAGE.invalidOrder);
  });

  test('음료만 입력되면 예외가 발생한다', () => {
    expect(() =>
      Validator.checkOnlyDrinkMenus(['레드와인-1', '제로콜라-1']),
    ).toThrow(ERROR_MESSAGE.invalidOrder);
  });

  test('메뉴 갯수가 20개를 넘으면 예외가 발생한다', () => {
    expect(() =>
      Validator.checkSumMenusCount(['아이스크림-10', '제로콜라-11']),
    ).toThrow(ERROR_MESSAGE.invalidOrder);
  });
});
