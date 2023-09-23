import PromiseRouter from "express-promise-router";
import { getAll, getProductByTag } from "../controllers/tagController";

const router = PromiseRouter()

router.route('/').get(getAll)

router.route('/:id/getProductByTag').get(getProductByTag)

export default router