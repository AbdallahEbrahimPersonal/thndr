import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {getNextPageParam, isCloseToBottom} from '../utils';

describe('isCloseToBottom', () => {
  it('should return false if the scroll is not close to the bottom', () => {
    const event = {
      nativeEvent: {
        layoutMeasurement: {height: 500},
        contentOffset: {y: 100},
        contentSize: {height: 1000},
      },
    } as unknown as NativeSyntheticEvent<NativeScrollEvent>;
    expect(isCloseToBottom(event)).toBeFalsy();
  });

  it('should return true if the scroll is close to the bottom', () => {
    const event = {
      nativeEvent: {
        layoutMeasurement: {height: 500},
        contentOffset: {y: 600},
        contentSize: {height: 1000},
      },
    } as unknown as NativeSyntheticEvent<NativeScrollEvent>;
    expect(isCloseToBottom(event)).toBeTruthy();
  });
});

describe('getNextPageParam', () => {
  it('should return the cursor if the next_url is present', () => {
    const lastPage = {
      next_url: 'https://api.polygon.io/v3/reference/tickers?cursor=1234567890',
      results: [],
      status: 'success',
      request_id: '1234567890',
      count: 10,
    };

    expect(getNextPageParam(lastPage)).toBe('1234567890');
  });

  it('should return undefined if the next_url is not present', () => {
    const lastPage = {
      results: [],
      status: 'success',
      request_id: '1234567890',
      count: 10,
    };

    // @ts-expect-error
    expect(getNextPageParam(lastPage)).toBeUndefined();
  });
});
