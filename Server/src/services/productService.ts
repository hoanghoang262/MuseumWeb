import { isError } from "../helper/isError";
import PrismaService from "./prismaService";

import { v4 as uuidv4 } from "uuid";

const prisma = PrismaService.getInstance();

export const getAll = async () => {
  const products = await prisma.product.findMany();
  //parse string to json
  products.map((product) => {
    product.product_json = JSON.parse(product.product_json);
  });
  return products;
};

export const getOne = async (id: string) => {
  const product = await prisma.product.findUnique({
    where: { product_id: id },
  });
  //parse string to json
  if (product) {
    product.product_json = JSON.parse(product.product_json);
  }
  return product;
};

export const delOne = async (id: string) => {
  try {
    await prisma.product.delete({
      where: { product_id: id },
    });
  } catch (error) {
    if (isError(error)) {
      return {
        type: "error",
        error: error.message,
      };
    } else {
      return {
        type: "error",
        error: error,
      };
    }
  }
  return {
    type: "success",
    content: "delete success",
  };
};

export const delMany = async (ids: { product_id: string }[]) => {
  try {
    await prisma.product.deleteMany({
      where: {
        AND: ids,
      },
    });
  } catch (error) {
    if (isError(error)) {
      return {
        type: "error",
        error: error.message,
      };
    } else {
      return {
        type: "error",
        error: error,
      };
    }
  }
  return {
    type: "success",
    content: "delete success",
  };
};

export const update = async (id: string, data: any) => {
  try {
    await prisma.product.update({
      where: { product_id: id },
      data: data,
    });
  } catch (error) {
    if (isError(error)) {
      return {
        type: "error",
        error: error.message,
      };
    } else {
      return {
        type: "error",
        error: error,
      };
    }
  }
  return {
    type: "success",
    content: "update success",
  };
};

export const add = async (data: any) => {
  try {
    await prisma.product.create({
      data: {
        product_id: uuidv4(),
        created_date: new Date(),
        ...data,
      },
    });
  } catch (error) {
    if (isError(error)) {
      return {
        type: "error",
        error: error.message,
      };
    } else {
      return {
        type: "error",
        error: error,
      };
    }
  }
  return {
    type: "success",
    content: "add success",
  };
};

const ProductService = {
    getAll, getOne, delOne, delMany, update, add
}

export default ProductService
