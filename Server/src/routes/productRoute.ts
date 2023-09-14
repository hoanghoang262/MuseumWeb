import PromiseRouter from "express-promise-router";
import {
  getOne,
  getAll,
  delMany,
  delOne,
  update,
  add,
  getTop3
} from "../controllers/productController";

const router = PromiseRouter();
//product router
router.route("/top3").get(getTop3);

router.route("/:id").get(getOne).delete(delOne).put(update);

router.route("/").get(getAll).post(add).delete(delMany);

export default router;
