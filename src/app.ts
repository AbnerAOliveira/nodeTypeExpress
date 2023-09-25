import express from "express";
//import routes from "../routes";
import { Mongo } from "../database/mongo";
import { config } from "dotenv";
import userRoutes from "./modules/users/users.routes";

const main = async () => {
  config();

  const app = express();

  app.use(express.json());

  await Mongo.connect();

  //routes(app);
  app.use("/users", userRoutes);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`App listening at ${port}`);
  });
};

main();
