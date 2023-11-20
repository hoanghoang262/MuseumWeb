import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";
import ProductService from "../services/productService";

//get all Products
const getAll = async (req: Request, res: Response) => {
  const result = await ProductService.getAll();
  res.status(200).json(result);
};

//get one product by id
const getOne = async (req: Request, res: Response) => {
  const result = await ProductService.getOne(req.params.id);
  res.status(200).json(result);
};

//del one product by id
const delOne = async (req: Request, res: Response) => {
  const result = await ProductService.delOne(req.params.id);
  res.status(200).json(result);
};

//delete many products by id
const delMany = async (req: Request, res: Response) => {
  const productIds: { product_id: string }[] = req.body;

  const result = await ProductService.delMany(productIds)

  res.status(200).json(result);
};

//update one product by id
const update = async (req: Request, res: Response) => {
  const data = req.body;

  const result = await ProductService.update(req.params.id, data)

  res.status(200).json(result);
};

const add = async (req: Request, res: Response) => {
  const data = req.body;

  const result = await ProductService.add(data)

  res.status(200).json(result);
};

//get top 3 product
const getTop3 = async (req: Request, res: Response) =>{
  const result = await ProductService.getTop3()
  return res.status(200).json(result);
}

//get view
const getView = async (req: Request, res: Response) => {
  const result = await ProductService.getProductViewByAllTag()

  res.status(200).json(result);
}

//add View
const addView = async (req: Request, res: Response) => {
  const result = await ProductService.addView(req.params.id)

  res.status(200).json(result);
}


export { getAll, getOne, update, add, delMany, delOne, getTop3, getView, addView };
