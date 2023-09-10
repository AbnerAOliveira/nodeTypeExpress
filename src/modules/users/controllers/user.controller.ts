import { IUserController, IUserRepository } from "../models/user.model";

export class UserController implements IUserController {
  constructor(private readonly userRepository: IUserRepository) {}

  async handle() {
    try {
      const users = await this.userRepository.getUsers();
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
