import express = require("express");
import { UserRoute } from "./routes";

class App {
  public static start() {
    const app = express();
    App.setUpRoutes(app);
    app.listen(3000);
  }
  public static setUpRoutes(app) {
    UserRoute.getRoutes(app);
  }
}

App.start();
