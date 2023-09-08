import PostRoute  from './PostRoute';
import ProductRoute from './ProductRoute';
import PromiseRouter from 'express-promise-router'
import AuthenRouter from './AuthenticationRoute'

const router = PromiseRouter();

//Authentication route
router.use("/", AuthenRouter)

//post route
router.use("/posts", PostRoute)

//product route
router.use("/products", ProductRoute)



