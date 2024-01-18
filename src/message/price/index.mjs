import j from "joi";
import { template } from "./template.mjs";
import { sendFormatHtml } from "../telegram-message.mjs";

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns
 */
export const price = async (req, res, next) => {
    /**
     * @typedef { object } BodySchema
     * @property {string} uniqueKey
     * @property {'binance' | 'klaytn' } from
     * @property {{ price: number, symbol: string }[]} prices
     */
    const { error, value } = j
        .object({
            uniqueKey: j.string(),
            from: j.string().valid("binance"),
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
