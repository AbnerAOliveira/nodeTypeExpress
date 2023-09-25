import express, { Request, Response } from "express";
import { MongoUserRepository } from "./repositories/mongoUser.repository";
import { UserController } from "./controllers/user.controller";

export const userRoutes = express.Router();

userRoutes.get("/", async (req: Request, res: Response) => {
  const mongoUserRepository = new MongoUserRepository();
  const userController = new UserController(mongoUserRepository);

  const { statusCode, body } = await userController.get();

  return res.send(body).status(statusCode);
});

export default userRoutes;
