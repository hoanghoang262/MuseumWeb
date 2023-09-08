import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Generate a new UUID (Version 4)
const newGuid = uuidv4;

//get all posts
const getAll = async (req, res, next) => {
    const posts = await prisma.post
    res.status(200).json(posts)
}

//get one post by id
const getOne = async (req, res, next) => {
    const post = await prisma.post.findUnique({where: {post_id: req.params.id}})
    res.status(200).json(post)
}

const add = async (req, res, next) => {
    const data = req.body
    const post = await prisma.post.create({data:{
        post_id: newGuid(),
        title: data.title,
        content: data.content,
        category_id: data.categoryId,
        created_date: new Date(),
        created_by: data.accountId
    }})

    res.status(200).json(post)
}

export {getAll, getOne}