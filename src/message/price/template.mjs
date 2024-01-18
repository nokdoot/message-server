import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import j from "joi";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * @typedef { Object } Price
 * @property { string } symbol
 * @property { number } price
 */

/**
 * @param { Price[] } prices
 */
export const template = (prices) => {
    const { error, value } = j
        .array()
        .items(
            j.object({
                symbol: j.string().required(),
                price: j.number().required(),
            })
        )
        .validate(prices);
    if (error) {
        throw error;
    }

    return prices.reduce((acc, cur) => {
        return acc.concat(`<b>${cur.symbol}</b>: ${cur.price}\n`);
    }, ``);
};
