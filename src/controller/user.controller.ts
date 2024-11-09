import { NextFunction, Request, Response } from 'express';
import { UserService } from '../service/user.service';
import { CommonUtils } from '../utils/commonUtils';
import successHandler from '../utils/successHandler';

export class UserController {
    constructor(private svc: UserService) {
        this.loadUser = this.loadUser.bind(this);
    }

    public async loadUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.svc.getUserFromOkta(CommonUtils.parseToken(req));
            return successHandler(res, 'User loaded succeefully', user);
        } catch (error) {
            next(error);
        }
    }
}
