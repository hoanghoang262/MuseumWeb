import { Favor } from "@prisma/client";
import FavorService from "../services/favorService";
import { Request, Response } from "express";

export const getFavorByAccountId = async (req: Request, res: Response) => {
  console.log("favor controller");
  console.log("accountId",req.params.accountId);
  const result: Favor[] = await FavorService.getFavorByAccount(
    req.params.accountId
  );

  return result;
};
