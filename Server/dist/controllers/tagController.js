"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductByTag = exports.getAll = void 0;
const tagService_1 = __importDefault(require("../services/tagService"));
const getAll = async (req, res) => {
    const result = await tagService_1.default.getAll();
    res.status(200).json(result);
};
exports.getAll = getAll;
const getProductByTag = async (req, res) => {
    const result = await tagService_1.default.getProductByTag(Number.parseInt(req.params.id));
    res.status(200).json(result);
};
exports.getProductByTag = getProductByTag;
