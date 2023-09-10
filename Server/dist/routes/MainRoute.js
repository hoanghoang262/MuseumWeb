"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostRoute_1 = __importDefault(require("./PostRoute"));
const ProductRoute_1 = __importDefault(require("./ProductRoute"));
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const AuthenticationRoute_1 = __importDefault(require("./AuthenticationRoute"));
const router = (0, express_promise_router_1.default)();
//Authentication route
router.use("/", AuthenticationRoute_1.default);
//post route
router.use("/posts", PostRoute_1.default);
//product route
router.use("/products", ProductRoute_1.default);
exports.default = router;
