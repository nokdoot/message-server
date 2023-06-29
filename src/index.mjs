import express from 'express';
import env from 'env-var';

import { send } from './message.mjs';

const PORT = env.get('PORT').required().asPortNumber();

const app = express();

app.use(express.text({ type: 'plain/text' }));

app.get('/', (req, res, next) => {
    return res.send('message server');
});

app.get('/test', (req, res, next) => {
    send('test')
    return res.send();
});

app.post('/', (req, res, next) => {
    send(req.body);
    return res.send();
});

app.listen(PORT, () => {
    console.log(`message-server server started: ${PORT}`);
});

export default app;