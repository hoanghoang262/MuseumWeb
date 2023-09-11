import PrismaService from "./prismaService";

import hashPassword from "../helper/hashFuntion";
import { SignInDto } from "../dto/auth.dto";
import { Account } from "@prisma/client";
import { Message } from "../type/message.inteface";

const prisma = PrismaService.getInstance();

export const signIn = async (
  logUser: SignInDto
): Promise<Account | Message> => {
  const user = await prisma.account.findFirst({
    where: {
      email: logUser.email,
      hash_password: hashPassword(logUser.password),
    },
  });

  if (user == null) {
    return { type: "error", content: "User not found" };
  } else if (user.isBan) {
    return { type: "error", content: "user is banned" };
  } else {
    return user;
  }
};
