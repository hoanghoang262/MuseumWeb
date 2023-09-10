"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const ProductController_1 = require("../controller/ProductController");
const router = (0, express_promise_router_1.default)();
//product router
router.route("/:id")
    .get(ProductController_1.getOne)
    .delete(ProductController_1.delOne)
    .put(ProductController_1.update);
router.route("/")
    .get(ProductController_1.getAll)
    .post(ProductController_1.add)
    .delete(ProductController_1.delMany);
exports.default = router;
