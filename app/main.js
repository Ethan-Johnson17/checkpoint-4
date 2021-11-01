import { ClockController } from "./Controllers/ClockController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  // valuesController = new ValuesController();
  tasksController = new TasksController()
  imagesController = new ImagesController()
  clockController = new ClockController()
  quotesController = new QuotesController()
  weatherController = new WeatherController()
}

window["app"] = new App();
