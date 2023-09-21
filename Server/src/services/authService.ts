import PrismaService from "./prismaService";

import hashPassword from "../helper/hashFuntion";
import { SignInDto } from "../dto/auth.dto";
import { Account } from "@prisma/client";
import { Message } from "../type/message.inteface";
import { Register } from "../type/auth.interface";
import { isError } from "../helper/isError";
import { v4 as uuid } from "uuid";

const prisma = PrismaService.getInstance();

//ANCHOR - signIn service
export const signIn = async (
  logUser: SignInDto
): Promise<Account | Message> => {
  const user = await prisma.account.findFirst({
    where: {
      email: logUser.email,
      hash_password: hashPassword(logUser.password),
    },
  });

  console.log(hashPassword(logUser.password))

  if (user == null) {
    return { type: "error", content: "User not found" };
  } else if (user.isBan) {
    return { type: "error", content: "user is banned" };
  } else {
    return user;
  }
};

//ANCHOR - Register service
export const register = async (data: Register): Promise<Account | Message> => {
  const emailExist = await prisma.account.findFirst({
    where: {
      email: data.email,
    },
  });

  if (emailExist) {
    return { type: "error", content: "Email already exists" };
  }

  try {
    const account: Account = await prisma.account.create({
      data:{
        account_id: uuid(),
        email: data.email,
        account_name: data.account_name,
        hash_password: hashPassword(data.password),
        created_date: new Date(),
      },
    });
    return account;
  } catch (error: unknown) {
    if (isError(error)) {
      return {
        type: "error",
        content: `Failed to register user\n${error.message}`,
      };
    } else {
      return {
        type: "error",
        content: `Failed to register user\n${error}`,
      };
    }
  }
};

const AuthService = {
  signIn,
  register,
};

export default AuthService;
