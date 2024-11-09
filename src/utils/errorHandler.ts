import { NextFunction, Request, Response } from 'express';
import { CustomError } from './customError';
import logger from './logger';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err);
    console.error('[errorHandler] : ', errorHandler);
    if (err instanceof CustomError) {
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    } else {
        res.status(500).json({
            success: false,
            message: 'OOPs! Something went wrong'
        })
    }
};

export default errorHandler;
