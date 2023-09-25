import PrismaService from "./prismaService";
import { Category, Post } from "@prisma/client";

const prisma = PrismaService.getInstance();

const getAll = async () => {
  const categories: Category[] = await prisma.category.findMany();
  return categories;
};

const getPostByCategory = async (categoryId: number) => {
  const category: Category | null = await prisma.category.findUnique({
    where: { category_id: categoryId },
  });

  if (category !== null) {
    const posts: Post[] = await prisma.post.findMany({
      include: {
        Category: true,
      },
    });

    const filterPosts = posts.filter((post: Post | any) => {
      post.post_json = JSON.parse(post.post_json);
      return post.Category.category_id === category.category_id;
    });

    return filterPosts;
  }
};

const categoryService = {
  getAll,
  getPostByCategory,
};

export default categoryService;
