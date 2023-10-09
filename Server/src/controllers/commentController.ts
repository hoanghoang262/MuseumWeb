import { Request, Response } from "express";
import commentService from "../services/commentService";
import { Comment } from "@prisma/client";


export const getCommentsByPostId = async (req : Request, res: Response) => {
    const result : Comment[] = await commentService.getCommentByPostId(req.params.postId);
    res.status(200).json(result);
}

export const postComment = async (req : Request, res : Response) => {
    const result = await commentService.postComment(req.body)
    res.status(200).json(result);
}