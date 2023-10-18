"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaService_1 = __importDefault(require("./prismaService"));
const prisma = prismaService_1.default.getInstance();
const getFavorByAccount = async (accountId) => {
    console.log("favor service");
    const favor = await prisma.favor.findMany({
        where: { account_id: accountId },
        include: { Product: true }
    });
    return favor;
};
const FavorService = { getFavorByAccount };
exports.default = FavorService;
