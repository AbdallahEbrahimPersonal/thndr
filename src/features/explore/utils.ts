import { Ticker } from '@/api/tickers';
import { PolygonResponse } from '@/types/response';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

const BOTTOM_PADDING = 50;

export const isCloseToBottom = (
  event: NativeSyntheticEvent<NativeScrollEvent>,
) => {
  const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - BOTTOM_PADDING
  );
};

export function getNextPageParam(lastPage: PolygonResponse<Ticker>) {
  if (!lastPage?.next_url) {
    return undefined;
  }

  const cursor = lastPage.next_url.split('cursor=')[1];

  return cursor;
}
