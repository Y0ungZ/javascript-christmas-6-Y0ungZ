import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class EventPlannerController {
  async main() {
    OutputView.printStartText();
    const day = await InputView.readDay();
    const menus = await InputView.readMenus();
    console.log(menus);
  }
}

export default EventPlannerController;