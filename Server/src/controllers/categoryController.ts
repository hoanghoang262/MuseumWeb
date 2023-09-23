import { Category, Post } from "@prisma/client";
import categoryService from "../services/categoryService";
import { Request, Response } from "express";

//get all categories
export const getAll = async (req:Request, res:Response) => {
    const result : Category[] = await categoryService.getAll();
    res.status(200).json(result);
}

export const getPostByCategory = async (req:Request, res:Response) => {
    const result : Post[]|undefined = await categoryService.getPostByCategory(Number.parseInt(req.params.id))
    res.status(200).json(result);
}