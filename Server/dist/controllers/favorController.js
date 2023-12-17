"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFavor = exports.getFavorByAccountId = void 0;
const favorService_1 = __importDefault(require("../services/favorService"));
const getFavorByAccountId = async (req, res) => {
    console.log("favor controller");
    console.log("accountId", req.params.accountId);
    const result = await favorService_1.default.getFavorByAccount(req.params.accountId);
    res.status(200).json(result);
};
exports.getFavorByAccountId = getFavorByAccountId;
const addFavor = async (req, res) => {
    console.log("favor controller");
    console.log("accountId", req.params.accountId);
    const result = await favorService_1.default.addFavor(req.params.accountId, req.params.productId);
    res.status(200).json(result);
};
exports.addFavor = addFavor;
