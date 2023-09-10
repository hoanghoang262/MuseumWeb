"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const uuid_1 = require("uuid");
const hashFuntion_1 = __importDefault(require("../helper/hashFuntion"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Generate a new UUID (Version 4)
const newGuid = uuid_1.v4;
//login
const login = async (req, res) => {
    const logUser = req.body;
    const User = await prisma.account.findFirst({ where: {
            email: logUser.email,
            hash_password: (0, hashFuntion_1.default)(req.body.password)
        } });
    if (User == null) {
        res.status(404).json({ message: 'User not found' });
    }
    else if (User.isBan) {
        res.status(403).json({ message: 'User is banned' });
    }
    res.status(200).json(User);
};
exports.login = login;
//Register
const register = async (req, res) => {
    const data = req.body;
    const emailExist = await prisma.account.findFirst({ where: {
            email: data.email,
        } });
    if (emailExist) {
        res.status(400).json({ message: 'Email already exists' });
    }
    const User = await prisma.account.create({ data: {
            account_id: newGuid(),
            email: data.email,
            account_name: data.accountName,
            hash_password: (0, hashFuntion_1.default)(data.password),
            created_date: new Date()
        } });
    res.status(200).json(User);
};
exports.register = register;
