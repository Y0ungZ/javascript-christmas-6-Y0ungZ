import { ERROR_MESSAGE } from '../src/constants/messages';
import Validator from '../src/utils/Validator.js';

describe('유효성 검사 테스트', () => {
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
