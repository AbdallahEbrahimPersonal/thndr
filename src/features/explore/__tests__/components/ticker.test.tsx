import React from 'react';
import { render } from 'test-utils';
import { Ticker } from '@/features/explore/components/ticker';
import {
  TickerLocale,
  TickerMarket,
} from '@/features/explore/utils/tickers-enum';

const ticker = {
  ticker: 'AAPL',
  name: 'Apple Inc.',
  active: true,
  locale: TickerLocale.US,
  market: TickerMarket.STOCKS,
};

describe('Ticker', () => {
  it('renders correctly', () => {
    const { findByText } = render(<Ticker ticker={ticker} />);
    expect(findByText(ticker.ticker)).toBeTruthy();
    expect(findByText(ticker.name)).toBeTruthy();
  });
});
