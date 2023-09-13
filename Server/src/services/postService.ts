import PrismaService from "./prismaService";
import { Post } from "@prisma/client";
import { isError } from "../helper/isError";
import { v4 as uuidv4 } from "uuid";

const prisma = PrismaService.getInstance();

export const getAll = async () => {
  const posts: Post[] = await prisma.post.findMany();
  //parse string to JSON
  posts.map((post) => JSON.parse(post.post_json));

  return posts;
};

export const getOne = async (id: string) => {
  const post = await prisma.post.findUnique({
    where: { post_id: id },
  });
  //parse string to JSON
  if (post) {
    post.post_json = JSON.parse(post.post_json);
  }
  return post;
};

export const delOne = async (id: string) => {
  try {
    await prisma.post.delete({ where: { post_id: id } });
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
    content: "delete success",
  };
};

export const delMany = async (postIds: { post_id: string }[]) => {
  try {
    const posts = await prisma.post.deleteMany({
      where: {
        AND: postIds,
      },
    });
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
    content: "delete success",
  };
};

export const update = async (id:string, data: any) => {
  try {
    await prisma.post.update({
      where: { post_id: data.id },
      data: data,
    });
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
    content: "update success",
  };
};

export const add = async (data: any) => {
  try {
    const post = await prisma.post.create({
      data: {
        post_id: uuidv4(),
        created_date: new Date(),
        ...data,
      },
    });
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
    content: "add success",
  };
};

const PostService = {
    getAll, getOne, delMany, delOne, add, update
}

export default PostService