"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const postService_1 = __importDefault(require("../services/postService"));
const productService_1 = __importDefault(require("../services/productService"));
//search
const search = async (req, res) => {
    const posts = await postService_1.default.getPostByTitle(req.params.search);
    const products = await productService_1.default.getProductByName(req.params.search);
    res.status(200).json({ posts, products });
};
exports.search = search;
