import { Account, Favor } from "@prisma/client";
import PrismaService from "./prismaService";

const prisma = PrismaService.getInstance();


const getFavorByAccount = async (accountId: string) => {
  console.log("favor service");
  const favor: Favor[] = await prisma.favor.findMany({
    where: { account_id: accountId },
    include: {Product:true}
  });

  return favor;
};

const FavorService = { getFavorByAccount };

export default FavorService;
