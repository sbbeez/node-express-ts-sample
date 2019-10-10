import express = require("express");
import { UserRoute } from "./routes";

class App {
  static start() {
    const app = express();
    App.setUpRoutes(app);
    app.listen(3000);
  }
  static setUpRoutes(app) {
    UserRoute.getRoutes(app);
  }
}

App.start();
