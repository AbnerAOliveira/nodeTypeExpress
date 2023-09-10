import { Mongo } from "../../../../database/mongo";
import { IUserRepository, User } from "../models/user.model";

export class MongoUserRepository implements IUserRepository {
  async getUsers(): Promise<User[]> {
    const users = await Mongo.db.collection<User>("users").find({}).toArray();
    return users;
  }
}
