import { UserController } from "../controllers/user.controller";
export class UserRoute {
  public static getRoutes(app) {
    app.get("/api/user/:id", UserController.getUser);
  }
}
