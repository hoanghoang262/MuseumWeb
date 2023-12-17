"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addView = exports.getView = exports.getTop3 = exports.delOne = exports.delMany = exports.add = exports.update = exports.getOne = exports.getAll = void 0;
const productService_1 = __importDefault(require("../services/productService"));
//get all Products
const getAll = async (req, res) => {
    const result = await productService_1.default.getAll();
    res.status(200).json(result);
};
exports.getAll = getAll;
//get one product by id
const getOne = async (req, res) => {
    const result = await productService_1.default.getOne(req.params.id);
    res.status(200).json(result);
};
exports.getOne = getOne;
//del one product by id
const delOne = async (req, res) => {
    const result = await productService_1.default.delOne(req.params.id);
    res.status(200).json(result);
};
exports.delOne = delOne;
//delete many products by id
const delMany = async (req, res) => {
    const productIds = req.body;
    const result = await productService_1.default.delMany(productIds);
    res.status(200).json(result);
};
exports.delMany = delMany;
//update one product by id
const update = async (req, res) => {
    const data = req.body;
    const result = await productService_1.default.update(req.params.id, data);
    res.status(200).json(result);
};
exports.update = update;
const add = async (req, res) => {
    const data = req.body;
    const result = await productService_1.default.add(data);
    res.status(200).json(result);
};
exports.add = add;
//get top 3 product
const getTop3 = async (req, res) => {
    const result = await productService_1.default.getTop3();
    return res.status(200).json(result);
};
exports.getTop3 = getTop3;
//get view
const getView = async (req, res) => {
    const result = await productService_1.default.getProductViewByAllTag();
    res.status(200).json(result);
};
exports.getView = getView;
//add View
const addView = async (req, res) => {
    const result = await productService_1.default.addView(req.params.id);
    res.status(200).json(result);
};
exports.addView = addView;
