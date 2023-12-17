"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const productController_1 = require("../controllers/productController");
const router = (0, express_promise_router_1.default)();
//product router
router.route("/top3").get(productController_1.getTop3);
router.route("/view").get(productController_1.getView);
router.route("/view/:id").post(productController_1.addView);
router.route("/:id").get(productController_1.getOne).delete(productController_1.delOne).put(productController_1.update);
router.route("/").get(productController_1.getAll).post(productController_1.add).delete(productController_1.delMany);
exports.default = router;
