import EventPlannerController from './controllers/EventPlannerController.js';

class App {
  #eventPlannerController = new EventPlannerController();

  async run() {
    await this.#eventPlannerController.main();
  }
}

export default App;
