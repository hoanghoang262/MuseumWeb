import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Generate a new UUID (Version 4)
const newGuid = uuidv4;

//get all posts
const getAll = async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany();
  res.status(200).json(posts);
};

//get one post by id
const getOne = async (req: Request, res: Response) => {
  const post = await prisma.post.findUnique({
    where: { post_id: req.params.id },
  });
  res.status(200).json(post);
};

//del one post by id
const delOne = async (req: Request, res: Response) => {
  const post = await prisma.post.delete({ where: { post_id: req.params.id } });
  res.status(200).json(post);
};

//del many post by id
const delMany = async (req: Request, res: Response) => {
  const postIds: { post_id: string }[] = req.body;
  const posts = await prisma.post.deleteMany({
    where: {
      AND: postIds,
    },
  });
  res.status(200).json(posts);
};

//update one post by id
const update = async (req: Request, res: Response) => {
  const data = req.body;
  const post = await prisma.post.update({
    where: { post_id: req.params.id },
    data: data,
  });

  res.status(200).json(post);
};

//add one post
const add = async (req: Request, res: Response) => {
  const data = req.body;
  const post = await prisma.post.create({
    data: {
      post_id: newGuid(),
      created_date: new Date(),
      ...data,
    },
  });

  res.status(200).json(post);
};

export { getAll, getOne, add, delMany, delOne, update };
