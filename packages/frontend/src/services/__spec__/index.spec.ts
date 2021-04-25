import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getData } from '..';
import { getFakeData } from '../../../../../fakeData/fakeData';

const server = setupServer(
  rest.get('/data', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(getFakeData()),
  )),
);

describe('getData', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
  });

  it('should return data', async () => {
    const result = await getData()();
    expect(result).toEqual(getFakeData());
  });
});
