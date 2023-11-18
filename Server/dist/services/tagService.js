"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaService_1 = __importDefault(require("./prismaService"));
const prisma = prismaService_1.default.getInstance();
const getAll = async () => {
    const tags = await prisma.tag.findMany();
    return tags;
};
const getProductByTag = async (tagId) => {
    const tag = await prisma.tag.findUnique({
        where: { tag_id: tagId },
    });
    if (tag !== null) {
        const products = await prisma.product.findMany({
            include: {
                Product_Tag: true,
            },
        });
        const filterProducts = products?.filter((product) => {
            product.product_json = JSON.parse(product.product_json);
            return product.Product_Tag?.some((pt) => pt.tag_id === tag.tag_id);
        });
        return filterProducts;
    }
};
const tagService = {
    getAll,
    getProductByTag,
};
exports.default = tagService;
