import { Category } from "@prisma/client";
import categoryService from "../services/categoryService";
import { Request, Response } from "express";

//get all categories
export const getAll = async (req:Request, res:Response) => {
    const result : Category[] = await categoryService.getAll();
    res.status(200).json(result);
}