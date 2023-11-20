import { Request, Response } from "express";
import PostService from "../services/postService";

import { Post } from "@prisma/client";


//get all posts
const getAll = async (req: Request, res: Response) => {
  const result:Post[] = await PostService.getAll()
  res.status(200).json(result);
};

//get one post by id
const getOne = async (req: Request, res: Response) => {
  const result = await PostService.getOne(req.params.id);
  res.status(200).json(result);
};

//get top 3 post
const getTop3 = async (req: Request, res: Response) =>{
  const result = await PostService.getTop3()
  return res.status(200).json(result);
}

//del one post by id
const delOne = async (req: Request, res: Response) => {
  const result = await PostService.delOne(req.params.id);
  res.status(200).json(result);
};

//del many post by id
const delMany = async (req: Request, res: Response) => {
  const postIds: { post_id: string }[] = req.body;
  const result = await PostService.delMany(postIds);
  res.status(200).json(result);
};

//update one post by id
const update = async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  const result = await PostService.update(req.params.id, data)
  res.status(200).json(result);
};

//add one post
const add = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await PostService.add(data)

  res.status(200).json(result);
};

//get view
const getView = async (req: Request, res: Response) => {
  const result = await PostService.getPostViewByAllCategory()

  res.status(200).json(result);
}

//add View
const addView = async (req: Request, res: Response) => {
  const result = await PostService.addView(req.params.id)

  res.status(200).json(result);
}



export { getAll, getOne, add, delMany, delOne, update, getTop3, getView, addView };
