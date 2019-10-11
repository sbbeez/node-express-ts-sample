import { Request, Response } from "express";

export class UserController {
  public static getUser(req: Request, res: Response) {
    try {
      throw new Error("Some error to check maps");
      res.send({ user_id: req.params.id });
    } catch (err) {
      res.send(err.stack.toString());
    }
  }
}
