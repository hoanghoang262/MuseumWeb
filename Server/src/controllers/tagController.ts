import { Request, Response } from "express"
import { Tag, Product } from "@prisma/client"
import tagService from "../services/tagService"

export const getAll = async (req:Request, res:Response) => {
    const result : Tag[] = await tagService.getAll()
    res.status(200).json(result)
}

export const getProductByTag = async (req:Request, res:Response) => {
    const result : Product[]|undefined = await tagService.getProductByTag(Number.parseInt(req.params.id))
    res.status(200).json(result)
}

