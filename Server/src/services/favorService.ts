import { Favor } from "@prisma/client";
import PrismaService from "./prismaService";
import { isError } from "../helper/isError";

const prisma = PrismaService.getInstance();

const getFavorByAccount = async (accountId: string) => {
  console.log("favor service");
  const favor: Favor[] = await prisma.favor.findMany({
    where: { account_id: accountId },
    include: { Product: true },
  });

  return favor;
};

const addFavor = async (accountId: string, productId: string) => {
  try {
    const favor: Favor | null = await prisma.favor.findFirst({
      where: { account_id: accountId, product_id: productId },
    });
    if (favor) {
      await prisma.favor.deleteMany({
        where: { account_id: accountId, product_id: productId },
      });
    } else {
      await prisma.favor.create({
        data: {
          product_id: productId,
          account_id: accountId,
        },
      });
    }
  } catch (error) {
    if (isError(error)) {
      return {
        type: "error",
        error: error.message,
      };
    } else {
      return {
        type: "error",
        error: error,
      };
    }
  }
  return {
    type: "success",
    content: "success",
  };
};

const FavorService = { getFavorByAccount, addFavor };

export default FavorService;
