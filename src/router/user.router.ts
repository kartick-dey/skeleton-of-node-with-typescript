import { Router } from 'express';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';

const router = Router();

const svc = new UserService();
const ctrl = new UserController(svc);

router.get('/', ctrl.loadUser);

export default router;
