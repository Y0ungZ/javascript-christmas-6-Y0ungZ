import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';
import Validator from '../utils/Validator.js';

const InputView = {
  async readDay() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.day);
    try {
      Validator.checkValidDay(input);
    } catch (e) {
      Console.print(e.toString());
      return this.readDay();
    }
    return input;
  },

  async readMenus() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.menu);
    try {
      Validator.checkValidMenus(input.split(','));
    } catch (e) {
      Console.print(e.toString());
      return this.readMenus();
    }
    return input.split(',');
  },
};

export default InputView;
