import { login, register } from "../controllers/authController";
import PromiseRouter from "express-promise-router";

const router = PromiseRouter();

router.post("/login", login);

router.post("/register", register);

export default router;
