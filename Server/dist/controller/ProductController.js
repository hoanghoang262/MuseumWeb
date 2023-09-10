"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delOne = exports.delMany = exports.add = exports.update = exports.getOne = exports.getAll = void 0;
const uuid_1 = require("uuid");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//get all Products
const getAll = async (req, res) => {
    const products = await prisma.product.findMany();
    //parse string to json
    products.map(product => { product.product_json = JSON.parse(product.product_json); });
    res.status(200).json(products);
};
exports.getAll = getAll;
//get one product by id
const getOne = async (req, res) => {
    const product = await prisma.product.findUnique({
        where: { product_id: req.params.id },
    });
    //parse string to json
    if (product) {
        product.product_json = JSON.parse(product.product_json);
    }
    res.status(200).json(product);
};
exports.getOne = getOne;
//del one product by id
const delOne = async (req, res) => {
    const product = await prisma.product.delete({
        where: { product_id: req.params.id },
    });
    res.status(200).json(product);
};
exports.delOne = delOne;
//delete many products by id
const delMany = async (req, res) => {
    const productIds = req.body;
    const products = await prisma.product.deleteMany({
        where: {
            AND: productIds,
        },
    });
    res.status(200).json(products);
};
exports.delMany = delMany;
//update one product by id
const update = async (req, res) => {
    const data = req.body;
    const product = await prisma.product.update({
        where: { product_id: req.params.id },
        data: data,
    });
    res.status(200).json(product);
};
exports.update = update;
const add = async (req, res) => {
    const data = req.body;
    const product = await prisma.product.create({ data: {
            product_id: (0, uuid_1.v4)(),
            created_date: new Date(),
            ...data
        } });
    res.status(200).json(product);
};
exports.add = add;
