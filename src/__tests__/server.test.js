const request = require('supertest');
const app = require('../server/index');

const GEONAMES_USERNAME = process.env.GEONAMES_USERNAME;

describe('Post Endpoints', () => {
    it('get geo name locations', async () => {
        const res = await request(app)
            .post('/geo-name-locations')
            .send({
                BASE_URL: `http://api.geonames.org/searchJSON?formatted=true&q=manchester&username=${GEONAMES_USERNAME}`,
            });

        expect(res.statusCode).toEqual(200);
    });
});
