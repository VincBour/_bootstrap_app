import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import useGetData from '../useGetData';
import { getFakeData } from '../../../../../fakeData/fakeData';

const queryClient = new QueryClient();
const wrapper: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

const server = setupServer(
  rest.get('/data', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(getFakeData()),
  )),
);

describe('useGetData', () => {
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
    const { result, waitFor } = renderHook(() => useGetData(), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual(getFakeData());
  });
});
