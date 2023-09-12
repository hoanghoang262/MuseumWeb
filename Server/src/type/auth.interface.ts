import { Prisma } from "@prisma/client";
import { type } from "os";

export interface SignIn {
  email: string;
  password: string;
}

export function isSignIn(obj: any): obj is SignIn {
  return obj && typeof obj.email == "string" && typeof obj.password == "string";
}

export type Register = Omit<Prisma.AccountCreateInput, "hash_password"> & {
  password: string;
};
