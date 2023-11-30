import { Account, Comment } from "@prisma/client";
import { isError } from "../helper/isError";
import PrismaService from "./prismaService";
import { v4 as uuid } from "uuid";

const prisma = PrismaService.getInstance();

const getCommentByPostId = async (postId: string) => {
  const comments : Comment[] = await prisma.comment.findMany({
    where: { post_id: postId },
    include: { Account_Comment_account_idToAccount: true },
    orderBy: { created_date: 'desc' },
  });

  return comments;
};

const postComment = async (data: any) => {
  try {
    const comment = await prisma.comment.create({
      data: {
        comment_id: uuid(),
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

const commentService = {
  getCommentByPostId,
  postComment,
};

export default commentService;
