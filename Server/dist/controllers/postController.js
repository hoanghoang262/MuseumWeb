"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addView = exports.getView = exports.getTop3 = exports.update = exports.delOne = exports.delMany = exports.add = exports.getOne = exports.getAll = void 0;
const postService_1 = __importDefault(require("../services/postService"));
//get all posts
const getAll = async (req, res) => {
    const result = await postService_1.default.getAll();
    res.status(200).json(result);
};
exports.getAll = getAll;
//get one post by id
const getOne = async (req, res) => {
    const result = await postService_1.default.getOne(req.params.id);
    res.status(200).json(result);
};
exports.getOne = getOne;
//get top 3 post
const getTop3 = async (req, res) => {
    const result = await postService_1.default.getTop3();
    return res.status(200).json(result);
};
exports.getTop3 = getTop3;
//del one post by id
const delOne = async (req, res) => {
    const result = await postService_1.default.delOne(req.params.id);
    res.status(200).json(result);
};
exports.delOne = delOne;
//del many post by id
const delMany = async (req, res) => {
    const postIds = req.body;
    const result = await postService_1.default.delMany(postIds);
    res.status(200).json(result);
};
exports.delMany = delMany;
//update one post by id
const update = async (req, res) => {
    const data = req.body;
    console.log(data);
    const result = await postService_1.default.update(req.params.id, data);
    res.status(200).json(result);
};
exports.update = update;
//add one post
const add = async (req, res) => {
    const data = req.body;
    const result = await postService_1.default.add(data);
    res.status(200).json(result);
};
exports.add = add;
//get view
const getView = async (req, res) => {
    const result = await postService_1.default.getPostViewByAllCategory();
    res.status(200).json(result);
};
exports.getView = getView;
//add View
const addView = async (req, res) => {
    const result = await postService_1.default.addView(req.params.id);
    res.status(200).json(result);
};
exports.addView = addView;
