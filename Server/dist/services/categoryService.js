"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaService_1 = __importDefault(require("./prismaService"));
const prisma = prismaService_1.default.getInstance();
const getAll = async () => {
    const categories = await prisma.category.findMany();
    return categories;
};
const getPostByCategory = async (categoryId) => {
    const category = await prisma.category.findUnique({
        where: { category_id: categoryId },
    });
    if (category !== null) {
        const posts = await prisma.post.findMany({
            include: {
                Category: true,
            },
        });
        const filterPosts = posts.filter((post) => {
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
exports.default = categoryService;
