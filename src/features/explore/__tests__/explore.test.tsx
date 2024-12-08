import React from 'react-native';
import { render, fireEvent, waitFor } from 'test-utils';
import ExploreScreen from '@/features/explore';
import mockTickers from '../__fixtures__/tickers';

describe('ExploreScreen', () => {
  it('Should show loading text', () => {
    jest.spyOn(require('../hooks/use-tickers'), 'useTickers').mockReturnValue({
      isLoading: true,
    });

    const { getByTestId } = render(<ExploreScreen />);
    expect(getByTestId('loader')).toBeDefined();
  });

  it('should render tickers correctly', async () => {
    jest.spyOn(require('../hooks/use-tickers'), 'useTickers').mockReturnValue({
      isLoading: false,
      data: { pages: [{ results: [...mockTickers] }] },
    });

    const { getByText } = render(<ExploreScreen />);
    await waitFor(() => {
      expect(getByText(mockTickers[0].name)).toBeDefined();
      expect(getByText(mockTickers[1].name)).toBeDefined();
    });
  });

  it('should perfrom search correctly', async () => {
    jest.spyOn(require('../hooks/use-tickers'), 'useTickers').mockReturnValue({
      isLoading: false,
      data: { pages: [{ results: [...mockTickers] }] },
    });

    const { getByTestId } = render(<ExploreScreen />);

    fireEvent.changeText(getByTestId('search-input'), 'AAPL');

    await waitFor(() => {
      const useTickers = require('../hooks/use-tickers').useTickers;
      expect(useTickers).toHaveBeenCalledWith('AAPL');
    });
  });
});
