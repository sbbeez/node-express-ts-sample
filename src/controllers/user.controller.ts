export class UserController {
  static getUser(req, res) {
    try {
      throw new Error("Some error to check maps")
      res.send({ user_id: req.params.id });
    } catch (err) {
      res.send(err.stack.toString());
    }
  }
}
