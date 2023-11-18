import PromiseRouter from "express-promise-router";
import { addFavor, getFavorByAccountId } from "../controllers/favorController";

const router = PromiseRouter()

router.route("/:accountId").get(getFavorByAccountId)

router.route("/:accountId/:productId").post(addFavor)

export default router