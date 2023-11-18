"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.update = exports.delMany = exports.delOne = exports.getPostByTitle = exports.getTop3 = exports.getOne = exports.getAll = void 0;
const prismaService_1 = __importDefault(require("./prismaService"));
const isError_1 = require("../helper/isError");
const uuid_1 = require("uuid");
const prisma = prismaService_1.default.getInstance();
const getAll = async () => {
    const posts = await prisma.post.findMany({
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
exports.getAll = getAll;
const getOne = async (id) => {
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
exports.getOne = getOne;
const getTop3 = async () => {
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
exports.getTop3 = getTop3;
const getPostByTitle = async (title) => {
    const posts = await prisma.post.findMany();
    //parse string to JSON
    posts.map((post) => {
        post.post_json = JSON.parse(post.post_json);
    });
    const searchPosts = posts.filter((p) => {
        for (let i = 0; i < p.post_json?.length; i++) {
            if (p.post_json[i].title.toLowerCase().includes(title.toLowerCase())) {
                return true;
            }
        }
        return false;
    });
    return searchPosts;
};
exports.getPostByTitle = getPostByTitle;
const delOne = async (id) => {
    try {
        await prisma.comment.deleteMany({ where: { post_id: id } });
        await prisma.post.delete({ where: { post_id: id } });
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
        content: "delete success",
    };
};
exports.delOne = delOne;
const delMany = async (postIds) => {
    try {
        const posts = await prisma.post.deleteMany({
            where: {
                AND: postIds,
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
        content: "delete success",
    };
};
exports.delMany = delMany;
const update = async (id, data) => {
    try {
        const updatePost = await prisma.post.update({
            where: { post_id: id },
            data: data,
        });
        console.log(updatePost);
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
        content: "update success",
    };
};
exports.update = update;
const add = async (data) => {
    try {
        const post = await prisma.post.create({
            data: {
                post_id: (0, uuid_1.v4)(),
                created_date: new Date(),
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
exports.add = add;
const PostService = {
    getAll: exports.getAll,
    getOne: exports.getOne,
    delMany: exports.delMany,
    delOne: exports.delOne,
    add: exports.add,
    update: exports.update,
    getTop3: exports.getTop3,
    getPostByTitle: exports.getPostByTitle,
};
exports.default = PostService;
