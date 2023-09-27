import { isError } from "../helper/isError";
import PrismaService from "./prismaService";
import { Product } from "@prisma/client";

import { v4 as uuidv4 } from "uuid";

const prisma = PrismaService.getInstance();

export const getAll = async () => {
  const products: Product[] = await prisma.product.findMany({
    include: {
      Product_Tag: true,
    },
  });
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

export const getTop3 = async () => {
  const products = await prisma.product.findMany({
    take: 3,
    include: {
      Product_Tag: true,
    },
  });
  //parse string to json
  products.map((product) => {
    product.product_json = JSON.parse(product.product_json);
  });

  return products;
};

export const getProductByName = async (name: string) => {
  const products: Product[] = await prisma.product.findMany();
  //parse string to json
  products.map((product) => {
    product.product_json = JSON.parse(product.product_json);
  });

  const searchProduct: Product[] = products.filter((p: any) => {
    for (let i = 0; i < p.product_json?.length; i++) {
      if (p.product_json[i].title.toLowerCase().includes(name.toLowerCase())) {
        return true;
      }
    }
    return false;
  });

  return searchProduct;
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
  getAll,
  getOne,
  delOne,
  delMany,
  update,
  add,
  getTop3,
  getProductByName,
};

export default ProductService;
