import PromiseRouter from "express-promise-router";
import { getAll } from "../controllers/categoryController";

const router = PromiseRouter()

router.route('/').get(getAll)

export default router