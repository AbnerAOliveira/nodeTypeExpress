import { IUserController, IUserRepository } from "../models/user.model";

export class UsersController implements IUserController {
  constructor(private readonly UserRepository: IUserRepository) {}

  async handle() {
    try {
      const users = await this.UserRepository.getUsers();
      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong.",
      };
    }
  }
}
