import j from "joi";

export const template = (prices: { symbol: string; price: number }[]) => {
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
