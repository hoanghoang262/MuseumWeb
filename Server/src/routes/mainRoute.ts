import PostRoute from "./postRoute";
import ProductRoute from "./productRoute";
import PromiseRouter from "express-promise-router";
import AuthenRouter from "./authRoute";
import CategoryRouter from "./categoryRoute"
import TagRoute from "./tagRoute";
import CommentsRouter from "./commentRouter"
import FavorRouter from "./favorRoute"
import { search } from "../controllers/otherController";

const router = PromiseRouter();

//Authentication route
router.use("/", AuthenRouter);

//post route
router.use("/posts", PostRoute);

//favor route
router.use("/favor", FavorRouter);

//product route
router.use("/products", ProductRoute);

//comment route
router.use("/comments", CommentsRouter);

//category route
router.use("/categories", CategoryRouter);

//tags route
router.use("/tags", TagRoute);

//search
router.route("/search/:search").get(search);

export default router;
