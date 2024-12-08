import { PolygonResponse } from '@/types/response';
import axios from '@/services/axios';
import {
  TickerLocale,
  TickerMarket,
} from '@/features/explore/utils/tickers-enum';

export type Ticker = {
  active: boolean;
  cik?: string;
  composite_figi?: string;
  currency_name?: string;
  delisted_utc?: string;
  last_updated_utc?: string;
  locale: TickerLocale;
  market: TickerMarket;
  name: string;
  primary_exchange?: string;
  share_class_figi?: string;
  ticker: string;
  type?: string;
};

async function fetchTickers(
  searchQuery = '',
  cursor?: string,
): Promise<PolygonResponse<Ticker>> {
  try {
    const response = await axios.get<PolygonResponse<Ticker>>(
      `/tickers?search=${searchQuery}&cursor=${cursor}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return { results: [], status: '', request_id: '', count: 0, next_url: '' };
  }
}

export { fetchTickers };
