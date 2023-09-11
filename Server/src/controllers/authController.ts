import { Request, Response } from "express";

import { SignInDto } from "../dto/auth.dto";
import PrismaService from "../services/prismaService";
import hashPassword from "../helper/hashFuntion";
import { signIn } from "../services/authService";
import { Account } from "@prisma/client";
import { Message, isMessage } from "../type/message.inteface";

const prisma = PrismaService.getInstance();

//login
const login = async (req: Request, res: Response) => {
  const logUser: SignInDto = req.body;
  const user: Account | Message = await signIn(logUser);

  if (isMessage(user)) {
    res.status(404).json(user);
  } else if (user.isBan) {
    res.status(403).json(user);
  }

  res.status(200).json(user);
};

//Register
const register = async (req: Request, res: Response) => {
  const data = req.body;

  const emailExist = await prisma.account.findFirst({
    where: {
      email: data.email,
    },
  });

  if (emailExist) {
    res.status(400).json({ message: "Email already exists" });
  }

  const User = await prisma.account.create({
    data: {
      email: data.email,
      account_name: data.accountName,
      hash_password: hashPassword(data.password),
      created_date: new Date(),
    },
  });

  res.status(200).json(User);
};

export { login, register };
