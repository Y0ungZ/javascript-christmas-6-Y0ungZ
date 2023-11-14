import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';

const InputView = {
  async readDay() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.day);
  },
};

export default InputView;
