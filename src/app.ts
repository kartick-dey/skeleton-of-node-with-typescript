import dotenv from 'dotenv';
import path from 'path';
const envFilePath = path.resolve(process.cwd(), `${__dirname}/env/.env`);
dotenv.config({ path: envFilePath });
import express from 'express';
import cors from 'cors';
import AppConfig from './config/appConfig';
import errorHandler from './utils/errorHandler';
import { ReqAndResLog } from './middleware/reqAndResLog';
import { ParseBody } from './middleware/parseBody';
import rootRouters from './rootRouter';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(AppConfig.corsOptions()));
app.options('*', cors());

app.use(ReqAndResLog.logRequestInfo);
app.use(ReqAndResLog.logResponseInfo);

app.use(ParseBody.useBodyparser);

app.use('/api', rootRouters); // root routes registered here

app.use(errorHandler);

export default app;
