"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthenticationController_1 = require("../controller/AuthenticationController");
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const router = (0, express_promise_router_1.default)();
router.post("/login", AuthenticationController_1.login);
router.post("/register", AuthenticationController_1.register);
exports.default = router;
