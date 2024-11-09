import { NextFunction, Request, Response } from 'express';
import * as uuid from 'uuid';
import logger from '../utils/logger';

declare global {
    namespace Express {
        interface Request {
            correlationId?: string;
            startTime?: Date;
        }
    }
}

export class ReqAndResLog {
    static logRequestInfo(req: Request, res: Response, next: NextFunction) {
        const correlationId = req.correlationId || uuid.v4();
        req.correlationId = correlationId;
        req.startTime = new Date();
        // Details - Label : correlationId : startTime : request method : request url : requested devide info : requested device ip
        logger.info(
            `REQUEST INFO : ${req.correlationId} : ${req.startTime} : ${req.method} : ${req.url} : ${req.headers['user-agent']} : ${req.ip}`,
        );
        next();
    }

    static logResponseInfo(req: Request, res: Response, next: NextFunction) {
        res.on('finish', () => {
            const startTime = req.startTime ? req.startTime.getTime() : new Date().getTime();
            const durationInSec = Math.floor((new Date().getTime() - startTime) / (1000 * 60 * 60));
            logger.info(`RESPONSE INFO : ${req.correlationId} : ${durationInSec} msec : Response Send Successfuly`);
        });
        next()
    }
}
