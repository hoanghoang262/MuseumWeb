"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const PostController_1 = require("../controller/PostController");
const router = (0, express_promise_router_1.default)();
//post router
router.route("/:id")
    .get(PostController_1.getOne)
    .delete(PostController_1.delOne)
    .put(PostController_1.update);
router.route("/")
    .get(PostController_1.getAll)
    .post(PostController_1.add)
    .delete(PostController_1.delMany);
exports.default = router;
