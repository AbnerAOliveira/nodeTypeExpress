import { ObjectId } from "mongodb";
import {
  IHttpReponse,
  IHttpRequest,
} from "../../../utils/httpProtocols.interface";

export interface IUserController {
  get(): Promise<IHttpReponse<IUser[]>>;
  create(params: IHttpRequest<ICreateUserParams>): Promise<IHttpReponse<IUser>>;
}

export interface IUserRepository {
  getUsers(): Promise<IUser[]>;
  createUser(httpRequest: ICreateUserParams): Promise<IUser>;
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
