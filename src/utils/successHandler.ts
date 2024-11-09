import { HttpStatusCode } from "axios";
import { Response } from "express";

const successHandler = (res: Response, messsage?: string, data?: any) => {
    res.status(HttpStatusCode.Ok).json({
        success: true,
        messsage,
        data
    })
}

export default successHandler;