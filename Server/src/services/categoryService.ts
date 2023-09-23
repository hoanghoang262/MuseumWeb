import PrismaService from "./prismaService";
import { Category, Post } from "@prisma/client";

const prisma = PrismaService.getInstance();

const getAll = async () => {
  const categories: Category[] = await prisma.category.findMany();
  return categories;
};

const getPostByCategory = async (categoryId: number) => {
  const category = prisma.category.findUnique({
    where: { category_id: categoryId },
  });

  if(category!==undefined){
    const post: Post[] = await prisma.post.findMany({
        include: {
          Category: true,
        },
      });
  
      post.filter((post : Post|any) => post.Category.equals(category))
  
      return post
  }
};

const categoryService = {
    getAll,
    getPostByCategory
  };

export default categoryService;
