import PromiseRouter from "express-promise-router";
import {
  getOne,
  getAll,
  delMany,
  delOne,
  update,
  add,
  getTop3,
  getView,
  addView
} from "../controllers/postController";

const router = PromiseRouter();
//post router
router.route("/top3").get(getTop3);

router.route("/view").get(getView);

router.route("/view/:id").post(addView);

router.route("/:id").get(getOne).delete(delOne).put(update);

router.route("/").get(getAll).post(add).delete(delMany);

export default router;
