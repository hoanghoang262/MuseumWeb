import { Request, Response } from "express";
import PostService from "../services/postService";

import { Post } from "@prisma/client";


//get all posts
const getAll = async (req: Request, res: Response) => {
  const posts:Post[] = await PostService.getAll()
  res.status(200).json(posts);
};

//get one post by id
const getOne = async (req: Request, res: Response) => {
  const post = await PostService.getOne(req.params.id);
  res.status(200).json(post);
};

//del one post by id
const delOne = async (req: Request, res: Response) => {
  const post = await PostService.delOne(req.params.id);
  res.status(200).json(post);
};

//del many post by id
const delMany = async (req: Request, res: Response) => {
  const postIds: { post_id: string }[] = req.body;
  const posts = await PostService.delMany(postIds);
  res.status(200).json(posts);
};

//update one post by id
const update = async (req: Request, res: Response) => {
  const data = req.body;
  const post = await PostService.update(req.params.id, data)
  res.status(200).json(post);
};

//add one post
const add = async (req: Request, res: Response) => {
  const data = req.body;
  const post = await PostService.add(data)

  res.status(200).json(post);
};

export { getAll, getOne, add, delMany, delOne, update };
