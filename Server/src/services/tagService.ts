import PrismaService from "./prismaService";
import { Tag, Product, Product_Tag } from "@prisma/client";

const prisma = PrismaService.getInstance();

const getAll = async () => {
  const tags: Tag[] = await prisma.tag.findMany();
  return tags;
};

const getProductByTag = async (tagId: number) => {
  const tag: Tag | null = await prisma.tag.findUnique({
    where: { tag_id: tagId },
  });

  if (tag !== null) {
    const products: Product[] = await prisma.product.findMany({
      include: {
        Product_Tag: true,
      },
    });

    const filterProducts = products?.filter((product: Product | any) => {

      product.product_json = JSON.parse(product.product_json);

      return product.Product_Tag?.some((pt:Product_Tag) => pt.tag_id === tag.tag_id);
    });

    return filterProducts;
  }
};

const tagService = {
  getAll,
  getProductByTag,
};

export default tagService;
