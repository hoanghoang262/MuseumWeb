import PromiseRouter from 'express-promise-router'
import { getOne, getAll } from '../controller/PostController';

const router = PromiseRouter();
//post router
router.route("/:id")
    .get(getOne)
    .delete()
    .put()

router.route("/")
    .get(getAll)
    .post()

export default router