"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const favorController_1 = require("../controllers/favorController");
const router = (0, express_promise_router_1.default)();
router.route("/:accountId").get(favorController_1.getFavorByAccountId);
exports.default = router;
