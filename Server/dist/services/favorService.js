"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaService_1 = __importDefault(require("./prismaService"));
const isError_1 = require("../helper/isError");
const prisma = prismaService_1.default.getInstance();
const getFavorByAccount = async (accountId) => {
    console.log("favor service");
    const favor = await prisma.favor.findMany({
        where: { account_id: accountId },
        include: { Product: true },
    });
    return favor;
};
const addFavor = async (accountId, productId) => {
    try {
        const favor = await prisma.favor.findFirst({
            where: { account_id: accountId, product_id: productId },
        });
        if (favor) {
            await prisma.favor.deleteMany({
                where: { account_id: accountId, product_id: productId },
            });
        }
        else {
            await prisma.favor.create({
                data: {
                    product_id: productId,
                    account_id: accountId,
                },
            });
        }
    }
    catch (error) {
        if ((0, isError_1.isError)(error)) {
            return {
                type: "error",
                error: error.message,
            };
        }
        else {
            return {
                type: "error",
                error: error,
            };
        }
    }
    return {
        type: "success",
        content: "success",
    };
};
const FavorService = { getFavorByAccount, addFavor };
exports.default = FavorService;
