import j from "joi";
import { template } from "./template.js";
import { sendFormatHtml } from "../telegram-message.js";
import { NextFunction, Request, Response } from "express";

export const price = async (req: Request, res: Response, next: NextFunction) => {
    /**
     * @typedef { object } BodySchema
     * @property {string} uniqueKey
     * @property {'binance' | 'klaytn' } from
     * @property {{ price: number, symbol: string }[]} prices
     */
    const { error, value } = j
        .object({
            uniqueKey: j.string(),
            from: j.string().valid("binance", "klaytn"),
            prices: j.array().items(
                j
                    .object({
                        symbol: j.string().required(),
                        price: j.number().required(),
                    })
                    .strict(false)
            ),
        })
        .validate(req.body);
    if (error) {
        console.log(error);
        return next(error);
    }
    /** @type BodySchema['prices'] */
    const prices = value.prices;
    sendFormatHtml(template(prices));
    return res.send();
};
