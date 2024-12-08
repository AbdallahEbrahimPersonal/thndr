import React from 'react';
import { render } from 'test-utils';
import { LoadingWrapper } from '../loading-wrapper';
import { Text } from 'react-native';

describe('LoadingWrapper', () => {
  it('should render the children', () => {
    const { getByText } = render(
      <LoadingWrapper isLoading={false}>
        <Text>Hello</Text>
      </LoadingWrapper>,
    );

    expect(getByText('Hello')).toBeTruthy();
  });

  it('should render the loader', () => {
    const { getByTestId } = render(
      <LoadingWrapper isLoading={true}>Hello</LoadingWrapper>,
    );

    expect(getByTestId('loader')).toBeTruthy();
  });
});
