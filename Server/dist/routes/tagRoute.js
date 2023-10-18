"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const tagController_1 = require("../controllers/tagController");
const router = (0, express_promise_router_1.default)();
router.route('/').get(tagController_1.getAll);
router.route('/:id/getProductByTag').get(tagController_1.getProductByTag);
exports.default = router;
