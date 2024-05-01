import express from "express";

import { price } from "./message/price/index.js";
import { text } from "./message/text/index.js";
import { publisher } from "./middleware/publisher.js";

declare global {
    namespace Express {
        interface Request {
            publisher: string;
        }
    }
}

const app = express();

app.use(publisher); // 1
app.use(express.text({ type: "plain/text" }));
app.use(express.json());

app.get("/", (req, res, next) => {
    return res.send("message server");
});

app.post("/", text); // 2
app.post("/price", price); // 3


export default app;
