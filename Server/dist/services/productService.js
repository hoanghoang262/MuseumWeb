"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.update = exports.delMany = exports.delOne = exports.getProductByName = exports.getTop3 = exports.getOne = exports.getAll = void 0;
const isError_1 = require("../helper/isError");
const prismaService_1 = __importDefault(require("./prismaService"));
const uuid_1 = require("uuid");
const prisma = prismaService_1.default.getInstance();
const getAll = async () => {
    const products = await prisma.product.findMany({
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
exports.getAll = getAll;
const getOne = async (id) => {
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
exports.getOne = getOne;
const getTop3 = async () => {
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
exports.getTop3 = getTop3;
const getProductByName = async (name) => {
    const products = await prisma.product.findMany();
    //parse string to json
    products.map((product) => {
        product.product_json = JSON.parse(product.product_json);
    });
    const searchProduct = products.filter((p) => {
        for (let i = 0; i < p.product_json?.length; i++) {
            if (p.product_json[i].title.toLowerCase().includes(name.toLowerCase())) {
                return true;
            }
        }
        return false;
    });
    return searchProduct;
};
exports.getProductByName = getProductByName;
const delOne = async (id) => {
    try {
        await prisma.product_Tag.deleteMany({ where: { product_id: id } });
        await prisma.product.delete({
            where: { product_id: id },
        });
    }
    catch (error) {
        if ((0, isError_1.isError)(error)) {
            return {
                type: "error",
                error: error.message,
            };
        }
        else {
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
exports.delOne = delOne;
const delMany = async (ids) => {
    try {
        await prisma.product.deleteMany({
            where: {
                AND: ids,
            },
        });
    }
    catch (error) {
        if ((0, isError_1.isError)(error)) {
            return {
                type: "error",
                error: error.message,
            };
        }
        else {
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
exports.delMany = delMany;
const update = async (id, rawdata) => {
    const { tag_ids, ...data } = rawdata;
    try {
        const updateProduct = await prisma.product.update({
            where: { product_id: id },
            data: data,
        });
        await prisma.product_Tag.deleteMany({
            where: { product_id: updateProduct.product_id },
        });
        let product_tags = [];
        tag_ids?.map((tag_id) => {
            const product_tag = {
                product_id: updateProduct.product_id,
                tag_id: Number.parseInt(tag_id),
            };
            product_tags = [...product_tags, product_tag];
        });
        await prisma.product_Tag.createMany({
            data: product_tags,
        });
    }
    catch (error) {
        if ((0, isError_1.isError)(error)) {
            return {
                type: "error",
                error: error.message,
            };
        }
        else {
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
exports.update = update;
const add = async (rawdata) => {
    const { tag_ids, ...data } = rawdata;
    try {
        console.log(data);
        const newProduct = await prisma.product.create({
            data: {
                product_id: (0, uuid_1.v4)(),
                created_date: new Date(),
                ...data,
            },
        });
        let product_tags = [];
        console.log(tag_ids);
        tag_ids?.map((tag_id) => {
            const product_tag = {
                product_id: newProduct.product_id,
                tag_id: Number.parseInt(tag_id),
            };
            product_tags = [...product_tags, product_tag];
        });
        await prisma.product_Tag.createMany({
            data: product_tags,
        });
    }
    catch (error) {
        if ((0, isError_1.isError)(error)) {
            return {
                type: "error",
                error: error.message,
            };
        }
        else {
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
exports.add = add;
const ProductService = {
    getAll: exports.getAll,
    getOne: exports.getOne,
    delOne: exports.delOne,
    delMany: exports.delMany,
    update: exports.update,
    add: exports.add,
    getTop3: exports.getTop3,
    getProductByName: exports.getProductByName,
};
exports.default = ProductService;
