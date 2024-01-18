import { sendText } from "../telegram-message.mjs";

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns
 */
export const text = (req, res, next) => {
    sendText(req.body);
    return res.send();
}