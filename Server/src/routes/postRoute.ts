import PromiseRouter from "express-promise-router";
import {
  getOne,
  getAll,
  delMany,
  delOne,
  update,
  add,
} from "../controllers/postController";

const router = PromiseRouter();
//post router
router.route("/:id").get(getOne).delete(delOne).put(update);

router.route("/").get(getAll).post(add).delete(delMany);

export default router;
