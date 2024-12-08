import React from 'react';
import { fireEvent, render, screen } from 'test-utils';
import { SearchInput } from './index';

describe('SearchInput', () => {
  it('renders correctly', () => {
    render(
      <SearchInput
        value=""
        onSearch={() => {}}
        onClear={() => {}}
        placeholder="Search something..."
      />,
    );

    expect(screen.getByTestId('search-input')).toBeDefined();
  });

  it('calls onSearch when the input changes', () => {
    const onSearch = jest.fn();
    render(<SearchInput value="" onSearch={onSearch} onClear={() => {}} />);
    fireEvent.changeText(screen.getByTestId('search-input'), 'AAPL');
    expect(onSearch).toHaveBeenCalledWith('AAPL');
  });

  it('calls onClear when the clear button is pressed', () => {
    const onClear = jest.fn();
    render(<SearchInput value="AAPL" onSearch={() => {}} onClear={onClear} />);
    fireEvent.press(screen.getByTestId('search-input-clear'));
    expect(onClear).toHaveBeenCalled();
  });
});
