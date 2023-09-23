import PrismaService from "./prismaService";
import { Tag, Product } from "@prisma/client";

const prisma = PrismaService.getInstance();

const getAll = async () => {
  const tags: Tag[] = await prisma.tag.findMany();
  return tags;
};

const getProductByTag = async (tagId: number) => {
  const tag = await prisma.tag.findUnique({
    where: { tag_id: tagId },
  });

  if (tag != undefined) {
    const products: Product[] = await prisma.product.findMany({
      include: {
        Product_Tag: true,
      },
    });

    products.filter((product : Product|any) => product.Product_Tag.includes(tag))

    return products
  }
};

const tagService = {
  getAll,
  getProductByTag
};

export default tagService;
