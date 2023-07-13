import { IUser } from "./user.interfaces";

export interface IAuthFormData extends Pick<IUser, "email" | "password"> {}
