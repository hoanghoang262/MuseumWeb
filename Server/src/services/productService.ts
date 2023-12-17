import { isError } from "../helper/isError";
import PrismaService from "./prismaService";
import { Prisma, Product, Product_Tag, Tag } from "@prisma/client";

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
    include: {
      Product_Tag: true,
    },
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

export const getProductViewByAllTag = async () => {
  const result =
    await prisma.$queryRaw(Prisma.sql`SELECT t.tag_name as 'name', SUM(p.[View]) as 'uv' FROM Product p JOIN Product_Tag pt
    ON p.product_id = pt.product_id LEFT JOIN Tag t
    ON t.tag_id = pt.tag_id
    GROUP BY t.tag_name`);
  return result;
};

export const delOne = async (id: string) => {
  try {
    await prisma.product_Tag.deleteMany({ where: { product_id: id } });

    await prisma.favor.deleteMany({ where: { product_id: id } }); 

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

export const update = async (id: string, rawdata: any) => {
  const { tag_ids, ...data } = rawdata;

  try {
    const updateProduct = await prisma.product.update({
      where: { product_id: id },
      data: data,
    });

    await prisma.product_Tag.deleteMany({
      where: { product_id: updateProduct.product_id },
    });

    let product_tags: Product_Tag[] = [];

    tag_ids?.map((tag_id: string) => {
      const product_tag = {
        product_id: updateProduct.product_id,
        tag_id: Number.parseInt(tag_id),
      };
      product_tags = [...product_tags, product_tag];
    });

    await prisma.product_Tag.createMany({
      data: product_tags,
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

export const add = async (rawdata: any) => {
  const { tag_ids, ...data } = rawdata;

  try {
    console.log(data);
    const newProduct = await prisma.product.create({
      data: {
        product_id: uuidv4(),
        created_date: new Date(),
        ...data,
      },
    });

    let product_tags: Product_Tag[] = [];

    console.log(tag_ids);
    tag_ids?.map((tag_id: string) => {
      const product_tag = {
        product_id: newProduct.product_id,
        tag_id: Number.parseInt(tag_id),
      };
      product_tags = [...product_tags, product_tag];
    });

    await prisma.product_Tag.createMany({
      data: product_tags,
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

export const addView = async (productId: string) => {
  try {
    const product:Product|null = await prisma.product.findUnique({where:{product_id: productId}})
    if(product){
      product.View = product.View? product.View+1:1;
      await prisma.product.update({
        where: { product_id: productId },
        data: product,
      });
    }
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
  getProductViewByAllTag,
  addView
};

export default ProductService;
