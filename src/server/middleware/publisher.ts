import { NextFunction, Request, Response } from "express";

export const publisher = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const publisher = req.query.publisher as string;
    if (!publisher) {
        return res.status(400).send("publisher is required");
    }
    req.publisher = req.query.publisher as string;
    next();
};
