import { Router } from "express";
import { ConfigController } from "../controller/config.controller";
import { ConfigService } from "../service/config.service";

const router = Router();
const svc = new ConfigService()
const ctrl = new ConfigController(svc);

router.get('/env', ctrl.loadEnvironmentsForUI);

export default router;