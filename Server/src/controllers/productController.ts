import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";
import PrismaService from "../services/prismaService";
import ProductService from "../services/productService";

const prisma = PrismaService.getInstance();

//get all Products
const getAll = async (req: Request, res: Response) => {
  const products = await ProductService.getAll();
  res.status(200).json(products);
};

//get one product by id
const getOne = async (req: Request, res: Response) => {
  const product = await ProductService.delOne(req.params.id);
  res.status(200).json(product);
};

//del one product by id
const delOne = async (req: Request, res: Response) => {
  const product = await ProductService.delOne(req.params.id);
  res.status(200).json(product);
};

//delete many products by id
const delMany = async (req: Request, res: Response) => {
  const productIds: { product_id: string }[] = req.body;

  const products = await ProductService.delMany(productIds)

  res.status(200).json(products);
};

//update one product by id
const update = async (req: Request, res: Response) => {
  const data = req.body;

  const product = await ProductService.update(req.params.id, data)

  res.status(200).json(product);
};

const add = async (req: Request, res: Response) => {
  const data = req.body;

  const product = await ProductService.add(data)

  res.status(200).json(product);
};

export { getAll, getOne, update, add, delMany, delOne };
