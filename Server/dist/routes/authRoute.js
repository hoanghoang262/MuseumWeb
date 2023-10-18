"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = require("../controllers/authController");
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const router = (0, express_promise_router_1.default)();
router.post("/login", authController_1.login);
router.post("/register", authController_1.register);
exports.default = router;
