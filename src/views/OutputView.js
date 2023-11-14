import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

const OutputView = {
  printStartText() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printEventText(day) {
    Console.print(OUTPUT_MESSAGE.event(day));
  },

  // printMenu() {
  //   Console.print('<주문 메뉴>');
  //   // ...
  // },
  // // ...
};

export default OutputView;
