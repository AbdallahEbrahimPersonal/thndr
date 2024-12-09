import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import useDebounce from '@/hooks/use-debounce';
import { Ticker } from './components/ticker';
import { useTickers } from './hooks/use-tickers';
import { isCloseToBottom } from './utils';
import { SearchInput } from '@/components/search-input';
import { CircularLoader, LoadingWrapper } from '@/components/loader';
import { spacing, typography } from '@/lib';
import EmptyState from '@/components/empty-state';

function ExploreScreen() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading, fetchNextPage, isFetchingNextPage } =
    useTickers(debouncedSearch);

  return (
    <View style={styles.container}>
      {search.length > 0 ? (
        <Text style={styles.title}>Results for "{search}"</Text>
      ) : (
        <Text style={styles.title}>Explore Nasdaq stocks</Text>
      )}
      <SearchInput
        value={search}
        onSearch={setSearch}
        onClear={() => setSearch('')}
      />
      <LoadingWrapper isLoading={isLoading}>
        <ScrollView
          contentContainerStyle={styles.content}
          onScroll={event => {
            if (isCloseToBottom(event)) {
              fetchNextPage();
            }
          }}>
          {data?.pages?.map(page =>
            page?.results.map(ticker => (
              <Ticker key={ticker.name + ticker.ticker} ticker={ticker} />
            )),
          )}

          {isFetchingNextPage && <CircularLoader size="small" />}

          {search.length > 0 && data?.pages[0]?.results.length === 0 && (
            <EmptyState />
          )}
        </ScrollView>
      </LoadingWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    ...typography.title,
    marginBottom: spacing.medium,
  },
  container: {
    flex: 1,
    padding: spacing.medium,
    flexDirection: 'column',
  },
  content: {
    gap: spacing.small,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default ExploreScreen;
