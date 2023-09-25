import { Request, Response } from "express";
import PostService from "../services/postService";
import { Post, Product } from "@prisma/client";
import ProductService from "../services/productService";

//search
export const search = async (req: Request, res: Response) => {
    const posts : Post[] = await PostService.getPostByTitle(req.params.search)
    const products : Product[] = await ProductService.getProductByName(req.params.search)
    res.status(200).json({posts, products})
}