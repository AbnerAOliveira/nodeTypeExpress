import { IUserRepository, User } from "../models/user.model";

export class MongoUserRepository implements IUserRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Abner",
        lastName: "Oliveira",
        email: "abner@icloud.com",
        password: "123",
      },
    ];
  }
}
