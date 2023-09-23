import PromiseRouter from "express-promise-router";
import { getAll } from "../controllers/tagController";

const router = PromiseRouter()

router.route('/').get(getAll)

export default router