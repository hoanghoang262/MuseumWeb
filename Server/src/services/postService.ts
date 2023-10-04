import PrismaService from "./prismaService";
import { Post } from "@prisma/client";
import { isError } from "../helper/isError";
import { v4 as uuidv4 } from "uuid";

const prisma = PrismaService.getInstance();

export const getAll = async () => {
  const posts: Post[] = await prisma.post.findMany({
    include: {
      Category: true,
    },
  });
  //parse string to JSON
  posts.map((post) => {
    post.post_json = JSON.parse(post.post_json);
  });

  return posts;
};

export const getOne = async (id: string) => {
  const post = await prisma.post.findUnique({
    where: { post_id: id },
    include: {
      Category: true,
    },
  });
  //parse string to JSON
  if (post) {
    post.post_json = JSON.parse(post.post_json);
  }
  return post;
};

export const getTop3 = async () => {
  const posts = await prisma.post.findMany({
    take: 3,
    include: {
      Category: true,
    },
  });
  //parse string to JSON
  posts.map((post) => {
    post.post_json = JSON.parse(post.post_json);
  });

  return posts;
};

export const getPostByTitle = async (title: string) => {
  const posts: Post[] = await prisma.post.findMany();

  //parse string to JSON
  posts.map((post) => {
    post.post_json = JSON.parse(post.post_json);
  });

  const searchPosts = posts.filter((p: any) => {
    for (let i = 0; i < p.post_json?.length; i++) {
      if (p.post_json[i].title.toLowerCase().includes(title.toLowerCase())) {
        return true;
      }
    }
    return false;
  });

  return searchPosts;
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

export const update = async (id: string, data: any) => {
  try {
    const updatePost = await prisma.post.update({
      where: { post_id: id },
      data: data,
    });
    console.log(updatePost);
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
  getAll,
  getOne,
  delMany,
  delOne,
  add,
  update,
  getTop3,
  getPostByTitle,
};

export default PostService;
