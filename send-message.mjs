// const baseurl = "http://192.168.0.15:5000";
const baseurl = 'http://localhost:5000';

/**
 * @typedef { object } BodySchema
 * @property {string} uniqueKey
 * @property {'binance' | 'klaytn' } from
 * @property {{ price: number, symbol: string }[]} prices
 */

const response = await fetch(`${baseurl}/price?publisher=1`, {
    method: "post",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        uniqueKey: "someKey",
        from: "binance",
        prices: [
            {
                symbol: "BTC",
                price: 50000,
            },
            {
                symbol: "ETH",
                price: 2000,
            },
        ],
    }),
});

console.log(response);