import { MENUS } from '../constants/menus.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class EventPlannerController {
  async main() {
    OutputView.printStartText();
    const day = await InputView.readDay();
    const menus = await InputView.readMenus();
    OutputView.printEventText(day);
    OutputView.printMenu(menus);
    OutputView.printBeforeDiscountPrice(this.getSumPrice(menus));
  }

  getSumPrice(menus) {
    let sum = 0;

    menus.forEach(menu => {
      const [name, count] = menu.split('-');
      MENUS.types.forEach(type => {
        if (MENUS[type][name]) {
          sum += Number(MENUS[type][name]) * Number(count);
        }
      });
    });
    return sum;
  }
}

export default EventPlannerController;
