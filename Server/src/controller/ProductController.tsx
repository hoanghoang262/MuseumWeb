import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//get all Products
const getAll = async (req, res, next) => {
    const posts = await prisma.product
    res.status(200).json(posts)
}

//get one product by id
const getOne = async (req, res, next) => {
    const post = await prisma.product.findUnique({where: {product_id: req.params.id}})
    res.status(200).json(post)
}

export {getAll, getOne}