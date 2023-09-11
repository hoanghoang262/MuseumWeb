import PostRoute from "./postRoute";
import ProductRoute from "./productRoute";
import PromiseRouter from "express-promise-router";
import AuthenRouter from "./authRoute";

const router = PromiseRouter();

//Authentication route
router.use("/", AuthenRouter);

//post route
router.use("/posts", PostRoute);

//product route
router.use("/products", ProductRoute);

export default router;
