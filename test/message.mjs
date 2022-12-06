import request from 'supertest';
import assert from 'assert';
import app from '../src/index.mjs';

describe('Message', function () {
    after(() => {
        process.exit(0);
    });
    it('send message', function () {
        request('http://localhost:5000') // app
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
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
            });
    });
});