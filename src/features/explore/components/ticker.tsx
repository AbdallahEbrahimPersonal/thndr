import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ticker as TickerType } from '@/api/tickers';
import { spacing, typography, colors } from '@/lib';

type TickerProps = {
  ticker: TickerType;
};

function Ticker({ ticker }: TickerProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.ticker}>{ticker.ticker}</Text>
      <Text style={styles.name}>{ticker.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    width: '48%',
    padding: spacing.medium,
    textAlign: 'left',
    height: 100,
  },
  ticker: typography.title,
  name: {
    ...typography.subtitle,
    color: 'gray',
  },
});

export { Ticker };
