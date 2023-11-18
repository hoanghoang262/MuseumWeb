"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postRoute_1 = __importDefault(require("./postRoute"));
const productRoute_1 = __importDefault(require("./productRoute"));
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const authRoute_1 = __importDefault(require("./authRoute"));
const categoryRoute_1 = __importDefault(require("./categoryRoute"));
const tagRoute_1 = __importDefault(require("./tagRoute"));
const commentRouter_1 = __importDefault(require("./commentRouter"));
const favorRoute_1 = __importDefault(require("./favorRoute"));
const otherController_1 = require("../controllers/otherController");
const router = (0, express_promise_router_1.default)();
//Authentication route
router.use("/", authRoute_1.default);
//post route
router.use("/posts", postRoute_1.default);
//favor route
router.use("/favor", favorRoute_1.default);
//product route
router.use("/products", productRoute_1.default);
//comment route
router.use("/comments", commentRouter_1.default);
//category route
router.use("/categories", categoryRoute_1.default);
//tags route
router.use("/tags", tagRoute_1.default);
//search
router.route("/search/:search").get(otherController_1.search);
exports.default = router;
