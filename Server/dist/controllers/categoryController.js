"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostByCategory = exports.getAll = void 0;
const categoryService_1 = __importDefault(require("../services/categoryService"));
//get all categories
const getAll = async (req, res) => {
    const result = await categoryService_1.default.getAll();
    res.status(200).json(result);
};
exports.getAll = getAll;
const getPostByCategory = async (req, res) => {
    const result = await categoryService_1.default.getPostByCategory(Number.parseInt(req.params.id));
    res.status(200).json(result);
};
exports.getPostByCategory = getPostByCategory;
