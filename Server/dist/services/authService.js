"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.signIn = void 0;
const prismaService_1 = __importDefault(require("./prismaService"));
const hashFuntion_1 = __importDefault(require("../helper/hashFuntion"));
const isError_1 = require("../helper/isError");
const uuid_1 = require("uuid");
const prisma = prismaService_1.default.getInstance();
//ANCHOR - signIn service
const signIn = async (logUser) => {
    const user = await prisma.account.findFirst({
        where: {
            email: logUser.email,
            hash_password: (0, hashFuntion_1.default)(logUser.password),
        },
    });
    console.log((0, hashFuntion_1.default)(logUser.password));
    if (user == null) {
        return { type: "error", content: "User not found" };
    }
    else if (user.isBan) {
        return { type: "error", content: "user is banned" };
    }
    else {
        return user;
    }
};
exports.signIn = signIn;
//ANCHOR - Register service
const register = async (data) => {
    const emailExist = await prisma.account.findFirst({
        where: {
            email: data.email,
        },
    });
    if (emailExist) {
        return { type: "error", content: "Email already exists" };
    }
    try {
        const account = await prisma.account.create({
            data: {
                account_id: (0, uuid_1.v4)(),
                email: data.email,
                account_name: data.account_name,
                hash_password: (0, hashFuntion_1.default)(data.password),
                created_date: new Date(),
            },
        });
        return account;
    }
    catch (error) {
        if ((0, isError_1.isError)(error)) {
            return {
                type: "error",
                content: `Failed to register user\n${error.message}`,
            };
        }
        else {
            return {
                type: "error",
                content: `Failed to register user\n${error}`,
            };
        }
    }
};
exports.register = register;
const AuthService = {
    signIn: exports.signIn,
    register: exports.register,
};
exports.default = AuthService;
