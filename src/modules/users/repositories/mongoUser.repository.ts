import { Mongo } from "../../../../database/mongo";
import {
  IUserRepository,
  IUser,
  ICreateUserParams,
} from "../models/user.model";

export class MongoUserRepository implements IUserRepository {
  async getUsers(): Promise<IUser[]> {
    const users = await Mongo.db.collection<IUser>("users").find({}).toArray();
    return users;
  }
  async createUser(params: ICreateUserParams): Promise<IUser> {
    const { insertedId } = await Mongo.db.collection("users").insertOne(params);

    const user = await Mongo.db
      .collection<IUser>("users")
      .findOne({ _id: insertedId });

    if (!user) {
      throw "User not created";
    }

    return user;
  }
}
