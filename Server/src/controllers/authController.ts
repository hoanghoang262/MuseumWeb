import { Request, Response } from "express";

import { SignInDto } from "../dto/auth.dto";
import PrismaService from "../services/prismaService";
import AuthService from "../services/authService";
import { Account } from "@prisma/client";
import { Message, isMessage } from "../type/message.inteface";
import { Register } from "../type/auth.interface";

const prisma = PrismaService.getInstance();

//login
export const login = async (req: Request, res: Response) => {
  const logUser: SignInDto = req.body;
  const user: Account | Message = await AuthService.signIn(logUser);

  if (isMessage(user)) {
    res.status(404).json(user);
  } else if (user.isBan) {
    res.status(403).json(user);
  }

  res.status(200).json(user);
};

//Register
export const register = async (req: Request, res: Response) => {
  const data: Register = req.body;

  const result: Account | Message = await AuthService.register(data);

  if (isMessage(result)) {
    res.status(404).json(result);
  } else {
    res.status(200).json(result);
  }
};

const AuthController = {
  login,
  register,
};

export default AuthController;
