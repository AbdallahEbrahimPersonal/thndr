import {useInfiniteQuery} from '@tanstack/react-query';
import {QUERY_KEYS} from '@/utils/query-keys';
import {fetchTickers, Ticker} from '@/api/tickers';
import {PolygonResponse} from '@/types/response';
import {getNextPageParam} from '../utils';

export const useTickers = (searchQuery: string) => {
  return useInfiniteQuery<PolygonResponse<Ticker>, Error>({
    queryKey: [QUERY_KEYS.TICKERS, searchQuery],
    queryFn: async ({pageParam = ''}) =>
      await fetchTickers(searchQuery, pageParam as string),
    getNextPageParam: lastPage => getNextPageParam(lastPage) || '',
    initialPageParam: '',
  });
};
