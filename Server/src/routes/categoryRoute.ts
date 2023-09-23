import PromiseRouter from "express-promise-router";
import { getAll, getPostByCategory } from "../controllers/categoryController";

const router = PromiseRouter()

router.route('/').get(getAll)

router.route('/:id/getPostByCategory').get(getPostByCategory)

export default router