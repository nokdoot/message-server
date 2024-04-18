import app from "./server/index.js";

import env from "env-var";

const PORT = env.get("PORT").required().asPortNumber();

app.listen(PORT, () => {
    console.log(`message-server server started: ${PORT}`);
});
