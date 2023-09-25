import { ObjectId } from "mongodb";
import { IHttpReponse } from "../../../utils/httpResponse.interface";

export interface IUserController {
  get(): Promise<IHttpReponse<IUser[]>>;
}

export interface IUserRepository {
  getUsers(): Promise<IUser[]>;
  createUser(params: ICreateUserParams): Promise<IUser>;
}

export interface IUser {
  _id: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ICreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
