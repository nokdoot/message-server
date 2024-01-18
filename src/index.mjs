import express from "express";
import env from "env-var";

import { price } from "./message/price/index.mjs";
import { sendText } from "./message/telegram-message.mjs";
import { text } from "./message/text/index.mjs";

const PORT = env.get("PORT").required().asPortNumber();

const app = express();

app.use(express.text({ type: "plain/text" }));
app.use(express.json());

app.get("/", (req, res, next) => {
    return res.send("message server");
});

app.post("/", text);
app.post("/price", price);

app.listen(PORT, () => {
    console.log(`message-server server started: ${PORT}`);
});

export default app;
