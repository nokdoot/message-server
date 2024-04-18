import { NextFunction, Request, Response } from "express";
import { sendText } from "../telegram-message.js";

export const text = (req: Request, res: Response, next: NextFunction) => {
    sendText(req.body);
    return res.send();
};
