import { rest } from 'msw';
import { getFakeData } from '../../../../fakeData/fakeData';

export const handlers = [
  rest.get('/data', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(getFakeData()),
  )),
];

export default handlers;
