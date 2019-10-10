"use strict";
exports.__esModule = true;
var user_controller_1 = require("../controllers/user.controller");
var UserRoute = (function () {
    function UserRoute() {
    }
    UserRoute.getRoutes = function (app) {
        app.get("/api/user/:id", user_controller_1.UserController.getUser);
    };
    return UserRoute;
}());
exports.UserRoute = UserRoute;
//# sourceMappingURL=user.route.js.map