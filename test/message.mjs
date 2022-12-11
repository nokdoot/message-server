import request from 'supertest';
import assert from 'assert';
import app from '../src/index.mjs';

describe('Message', function () {

    const requrest = request(app);
    // const requrest = request('https://message.whichvillain.com');
    // const requrest = request('htto://localhost:5000');

    // after(() => {
    //     process.exit(0);
    // });

    it('send message', async () => {
        // request('https://message.whichvillain.com') // app
        await requrest // app
            .post('/')
            .set('Content-Type', 'plain/text')
            .send(
`
asd
asd
as
das
da
sendasdasd
asdasd
as
d
asd
`
            )
            .expect(200);
    });
});