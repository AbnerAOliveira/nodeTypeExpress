import { Express, Request, Response } from "express";
import { MongoUserRepository } from "./src/modules/users/repositories/mongoUser.repository";
import { UserController } from "./src/modules/users/controllers/user.controller";

function routes(app: Express) {
  app.get("/users", async (req: Request, res: Response) => {
    const mongoUserRepository = new MongoUserRepository();
    const userController = new UserController(mongoUserRepository);

    const { statusCode, body } = await userController.handle();

    return res.send(body).status(statusCode);
  });
}

export default routes;
