import bodyParser from 'body-parser';
import { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from 'axios';
import { CustomError } from '../utils/customError';
class AppConfig {
    static corsOptions() {
        return {
            origin: process.env.CORS_ORIGIN,
            optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
            methods: 'GET, POST, PATCH, PUT, DELETE ,OPTIONS',
            allowedHeaders: 'X-Requested-With,content-type,Authorization',
            credentials: false,
        };
    }
}

export default AppConfig;
