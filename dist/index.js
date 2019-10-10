"use strict";
exports.__esModule = true;
var express = require("express");
var routes_1 = require("./routes");
var App = (function () {
    function App() {
    }
    App.start = function () {
        var app = express();
        App.setUpRoutes(app);
        app.listen(3000);
    };
    App.setUpRoutes = function (app) {
        routes_1.UserRoute.getRoutes(app);
    };
    return App;
}());
App.start();
//# sourceMappingURL=index.js.map