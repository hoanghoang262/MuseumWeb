import PromiseRouter from "express-promise-router";
import { getFavorByAccountId } from "../controllers/favorController";

const router = PromiseRouter()

router.route("/:accountId").get(getFavorByAccountId)

export default router