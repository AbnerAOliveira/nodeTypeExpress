import { Db, MongoClient } from "mongodb";

export const Mongo = {
  client: undefined as unknown as MongoClient,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.MONGODB_URL || "localhost:27017";
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;

    this.client = new MongoClient(url, { auth: { username, password } });
    this.db = this.client.db("users-db");

    console.log("connected to mongodb");
  },
};
