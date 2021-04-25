import { app } from './app';
import request from 'supertest';

describe('Get /', () => {
    it('should response', async () => {
        await request(app).get('/').expect(200,'Express + Typescript Server');
    });
});