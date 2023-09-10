"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.delOne = exports.delMany = exports.add = exports.getOne = exports.getAll = void 0;
const uuid_1 = require("uuid");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Generate a new UUID (Version 4)
const newGuid = uuid_1.v4;
//get all posts
const getAll = async (req, res) => {
    const posts = await prisma.post.findMany();
    //parse string to JSON
    posts.map(post => JSON.parse(post.post_json));
    res.status(200).json(posts);
};
exports.getAll = getAll;
//get one post by id
const getOne = async (req, res) => {
    const post = await prisma.post.findUnique({
        where: { post_id: req.params.id },
    });
    //parse string to JSON
    if (post) {
        post.post_json = JSON.parse(post.post_json);
    }
    res.status(200).json(post);
};
exports.getOne = getOne;
//del one post by id
const delOne = async (req, res) => {
    const post = await prisma.post.delete({ where: { post_id: req.params.id } });
    res.status(200).json(post);
};
exports.delOne = delOne;
//del many post by id
const delMany = async (req, res) => {
    const postIds = req.body;
    const posts = await prisma.post.deleteMany({
        where: {
            AND: postIds,
        },
    });
    res.status(200).json(posts);
};
exports.delMany = delMany;
//update one post by id
const update = async (req, res) => {
    const data = req.body;
    const post = await prisma.post.update({
        where: { post_id: req.params.id },
        data: data,
    });
    res.status(200).json(post);
};
exports.update = update;
//add one post
const add = async (req, res) => {
    const data = req.body;
    const post = await prisma.post.create({
        data: {
            post_id: newGuid(),
            created_date: new Date(),
            ...data,
        },
    });
    res.status(200).json(post);
};
exports.add = add;
