import OktaJwtVerifier from '@okta/jwt-verifier';
import { asyncHandler } from '../utils/asyncHandler';
import { NextFunction, Request, Response } from 'express';
import { CommonUtils } from '../utils/commonUtils';
import { CustomError } from '../utils/customError';
import { HttpStatusCode } from 'axios';

const oktaAuth = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accessToken = CommonUtils.parseToken(req);
        const jwtVerifier = new OktaJwtVerifier({
            issuer: process.env.OKTA_ISSUER || '',
            clientId: process.env.OKTA_CLIENT_ID || '',
            jwksUri: process.env.OKTA_JWKS_URI,
        });
        const jwt = await jwtVerifier.verifyAccessToken(accessToken, process.env.OKTA_AUDIENCE || '');
        if (jwt.isExpired()) {
            throw new CustomError('Unauthorize', HttpStatusCode.Unauthorized);
        }
        next();
    } catch (error) {
        next(error);
    }
});

export default oktaAuth;
