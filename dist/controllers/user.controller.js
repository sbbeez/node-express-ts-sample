"use strict";
exports.__esModule = true;
var UserController = (function () {
    function UserController() {
    }
    UserController.getUser = function (req, res) {
        try {
            throw new Error("Some error to check maps");
            res.send({ user_id: req.params.id });
        }
        catch (err) {
            res.send(err.stack.toString());
        }
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map