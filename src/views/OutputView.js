import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

const OutputView = {
  printStartText() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printEventText(day) {
    Console.print(OUTPUT_MESSAGE.event(day));
  },

  printMenu(menus) {
    Console.print(OUTPUT_MESSAGE.titleMenu);
    menus.forEach(menu => {
      const [name, count] = menu.split('-');
      Console.print(OUTPUT_MESSAGE.menuTemplate(name, count));
    });
  },
};

export default OutputView;
