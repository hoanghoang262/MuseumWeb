import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//get all Products
const getAll = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();
  //parse string to json
  products.map(product =>{product.product_json = JSON.parse(product.product_json)}) 
  res.status(200).json(products);
};

//get one product by id
const getOne = async (req: Request, res: Response) => {
  const product = await prisma.product.findUnique({
    where: { product_id: req.params.id },
  });
  //parse string to json
  if(product){
    product.product_json = JSON.parse(product.product_json)
  }
  res.status(200).json(product);
};

//del one product by id
const delOne = async (req: Request, res: Response) => {
  const product = await prisma.product.delete({
    where: { product_id: req.params.id },
  });
  res.status(200).json(product);
};

//delete many products by id
const delMany = async (req: Request, res: Response) => {
  const productIds: { product_id: string }[] = req.body;

  const products = await prisma.product.deleteMany({
    where: {
      AND: productIds,
    },
  });

  res.status(200).json(products);
};

//update one product by id
const update = async (req: Request, res: Response) => {
  const data = req.body;

  const product = await prisma.product.update({
    where: { product_id: req.params.id },
    data: data,
  });

  res.status(200).json(product)
};

const add = async (req:Request, res:Response) => {
    const data = req.body;

    const product = await prisma.product.create({data:{
        product_id: uuidv4(),
        created_date: new Date(),
        ...data
    }})

    res.status(200).json(product)
}

export { getAll, getOne, update, add, delMany, delOne };
