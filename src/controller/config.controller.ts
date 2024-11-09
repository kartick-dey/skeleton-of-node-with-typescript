import { NextFunction, Request, Response } from 'express';
import successHandler from '../utils/successHandler';
import { ConfigService } from '../service/config.service';

export class ConfigController {
    constructor(private svc: ConfigService) {
        this.loadEnvironmentsForUI = this.loadEnvironmentsForUI.bind(this);
    }

    public loadEnvironmentsForUI(req: Request, res: Response, next: NextFunction) {
        try {
            const env = this.svc.loadEnv();
            return successHandler(res, 'Environment variables loaded successfully', env);
        } catch (error) {
            next(error);
        }
    }
}
