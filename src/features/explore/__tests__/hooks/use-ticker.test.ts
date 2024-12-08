import { renderHook, waitFor } from 'test-utils';
import { useTickers } from '@/features/explore/hooks/use-tickers';

const tickers = [
  {
    ticker: 'AAPL',
    name: 'Apple Inc.',
  },
  {
    ticker: 'GOOGL',
    name: 'Alphabet Inc.',
  },
  {
    ticker: 'MSFT',
    name: 'Microsoft Corporation',
  },
];

jest.mock('@/api/tickers', () => ({
  fetchTickers: jest.fn().mockResolvedValue({
    results: tickers,
    status: 'success',
    request_id: '1234567890',
    count: tickers.length,
    next_url: null,
  }),
}));

describe('useTickers', () => {
  it('should return the tickers', async () => {
    const { result } = renderHook(() => useTickers(''));

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual({
      pageParams: [''],
      pages: [
        {
          results: tickers,
          count: tickers.length,
          next_url: null,
          status: 'success',
          request_id: '1234567890',
        },
      ],
    });
  });
});
