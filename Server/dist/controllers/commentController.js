"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postComment = exports.getCommentsByPostId = void 0;
const commentService_1 = __importDefault(require("../services/commentService"));
const getCommentsByPostId = async (req, res) => {
    const result = await commentService_1.default.getCommentByPostId(req.params.postId);
    res.status(200).json(result);
};
exports.getCommentsByPostId = getCommentsByPostId;
const postComment = async (req, res) => {
    const result = await commentService_1.default.postComment(req.body);
    res.status(200).json(result);
};
exports.postComment = postComment;
