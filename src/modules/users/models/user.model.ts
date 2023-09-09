import { IHttpReponse } from "../../../utils/httpResponse.interface";

export interface IUserController {
  handle(): Promise<IHttpReponse<User[]>>;
}

export interface IUserRepository {
  getUsers(): Promise<User[]>;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
