import PostRoute from "./postRoute";
import ProductRoute from "./productRoute";
import PromiseRouter from "express-promise-router";
import AuthenRouter from "./authRoute";
import CategoryRouter from "./categoryRoute"
import TagRoute from "./tagRoute";

const router = PromiseRouter();

//Authentication route
router.use("/", AuthenRouter);

//post route
router.use("/posts", PostRoute);

//product route
router.use("/products", ProductRoute);

//category route
router.use("/categories", CategoryRouter);

//tags route
router.use("/tags", TagRoute);

export default router;
