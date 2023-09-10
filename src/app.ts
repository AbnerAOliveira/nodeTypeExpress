import express from "express";
import routes from "../routes";
import { Mongo } from "../database/mongo";
import { config } from "dotenv";

const main = async () => {
  config();

  const port = process.env.PORT || 3000;

  const app = express();

  await Mongo.connect();

  app.use(express.json());

  routes(app);

  app.listen(port, () => {
    console.log(`App listening at ${port}`);
  });
};

main();
