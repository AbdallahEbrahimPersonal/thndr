/**
 * File had been generated using Claude 3.5 Sonnet
 * @see https://polygon.io/docs/stocks/get_v3_snapshot_locale_market_tickers
 */
export type FetchAggregatesRequest = {
  ticker: string;
  multiplier: number;
  timespan: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  from: string;
  to: string;
  adjusted?: boolean;
  sort?: 'asc' | 'desc';
  limit?: number;
};

export type FetchGroupedDailyRequest = {
  date: string;
  adjusted?: boolean;
  include_otc?: boolean;
};

export type FetchPreviousCloseRequest = {
  ticker: string;
  adjusted?: boolean;
};

export type FetchDailyOpenCloseRequest = {
  ticker: string;
  date: string;
  adjusted?: boolean;
};

export type FetchLastTradeRequest = {
  ticker: string;
};

export type FetchLastQuoteRequest = {
  ticker: string;
};

export type FetchSnapshotRequest = {
  ticker: string;
};

export type FetchGainersLosersRequest = {
  direction?: 'gainers' | 'losers';
  adjusted?: boolean;
};

export type FetchMarketStatusRequest = {
  locale?: string;
  market?: string;
};

export type FetchStockSplitsRequest = {
  ticker: string;
  execution_date?: string;
  reverse_split?: boolean;
};

export type FetchDividendsRequest = {
  ticker: string;
  ex_dividend_date?: string;
  record_date?: string;
  declaration_date?: string;
  pay_date?: string;
  frequency?: number;
  cash_amount?: number;
};

export type FetchConditionsRequest = {
  asset_class?: 'stocks' | 'options' | 'forex' | 'crypto';
  data_type?: 'trade' | 'quote';
  id?: number;
  sip?: string;
};

export type FetchExchangesRequest = {
  asset_class?: 'stocks' | 'options' | 'forex' | 'crypto';
  locale?: string;
};
