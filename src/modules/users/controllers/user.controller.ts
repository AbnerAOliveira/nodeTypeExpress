import {
  IHttpReponse,
  IHttpRequest,
} from "../../../utils/httpProtocols.interface";
import {
  ICreateUserParams,
  IUser,
  IUserController,
  IUserRepository,
} from "../models/user.model";

export class UserController implements IUserController {
  constructor(private readonly userRepository: IUserRepository) {}

  async get(): Promise<IHttpReponse<IUser[]>> {
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

  async create(
    httpRequest: IHttpRequest<ICreateUserParams>
  ): Promise<IHttpReponse<IUser>> {
    try {
      if (!httpRequest.body) {
        return {
          statusCode: 400,
          body: "Please specify a body",
        };
      }

      const user = await this.userRepository.createUser(httpRequest.body);

      return {
        statusCode: 201,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Somenthing went wrong",
      };
    }
  }
}
