import { Router } from "express";
import configRouter from './config.router'

const rootRouters = Router();

rootRouters.use('/config', configRouter);

export default rootRouters;