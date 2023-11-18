"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const prismaService_1 = __importDefault(require("../services/prismaService"));
const authService_1 = __importDefault(require("../services/authService"));
const message_inteface_1 = require("../type/message.inteface");
const prisma = prismaService_1.default.getInstance();
//login
const login = async (req, res) => {
    const logUser = req.body;
    const user = await authService_1.default.signIn(logUser);
    if ((0, message_inteface_1.isMessage)(user)) {
        res.status(404).json(user);
    }
    else if (user.isBan) {
        res.status(403).json(user);
    }
    res.status(200).json(user);
};
exports.login = login;
//Register
const register = async (req, res) => {
    const data = req.body;
    const result = await authService_1.default.register(data);
    if ((0, message_inteface_1.isMessage)(result)) {
        res.status(404).json(result);
    }
    else {
        res.status(200).json(result);
    }
};
exports.register = register;
const AuthController = {
    login: exports.login,
    register: exports.register,
};
exports.default = AuthController;
