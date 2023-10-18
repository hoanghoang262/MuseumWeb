"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isError_1 = require("../helper/isError");
const prismaService_1 = __importDefault(require("./prismaService"));
const uuid_1 = require("uuid");
const prisma = prismaService_1.default.getInstance();
const getCommentByPostId = async (postId) => {
    const comments = await prisma.comment.findMany({
        where: { post_id: postId },
        include: { Account_Comment_account_idToAccount: true },
        orderBy: { created_date: 'asc' }
    });
    return comments;
};
const postComment = async (data) => {
    try {
        const comment = await prisma.comment.create({
            data: {
                comment_id: (0, uuid_1.v4)(),
                ...data,
            },
        });
    }
    catch (error) {
        if ((0, isError_1.isError)(error)) {
            return {
                type: "error",
                error: error.message,
            };
        }
        else {
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
exports.default = commentService;
