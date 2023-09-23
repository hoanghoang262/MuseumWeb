import { Request, Response } from "express"
import { Tag } from "@prisma/client"
import tagService from "../services/tagService"

export const getAll = async (req:Request, res:Response) => {
    const result : Tag[] = await tagService.getAll()
    res.status(200).json(result)
}

