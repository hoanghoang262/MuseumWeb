import PromiseRouter from "express-promise-router";
import {
  getCommentsByPostId,
  postComment,
} from "../controllers/commentController";

const router = PromiseRouter();

router.route("/:postId").get(getCommentsByPostId).post(postComment);

export default router;
