import { HttpStatusCode } from "axios";

export class CustomError extends Error {
    public statusCode: number;

    constructor(messsage: string, statusCode=500, stack?: any) {
        super(messsage);
        this.statusCode = statusCode;
        this.stack = stack || null;
    }
}