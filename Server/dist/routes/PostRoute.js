"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const postController_1 = require("../controllers/postController");
const router = (0, express_promise_router_1.default)();
//post router
router.route("/top3").get(postController_1.getTop3);
router.route("/:id").get(postController_1.getOne).delete(postController_1.delOne).put(postController_1.update);
router.route("/").get(postController_1.getAll).post(postController_1.add).delete(postController_1.delMany);
exports.default = router;
