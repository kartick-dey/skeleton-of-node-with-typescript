import { Router } from "express";
import userRouter from './router/user.router';
import configRouter from './router/config.router'
import oktaAuth from "./middleware/oktaAuth";

const rootRouters = Router();

rootRouters.use('/user', oktaAuth, userRouter);
rootRouters.use('/config', configRouter)

export default rootRouters;