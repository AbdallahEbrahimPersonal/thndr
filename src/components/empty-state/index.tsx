import { typography } from '@/lib/typography';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No results found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    ...typography.title,
  },
});

export default EmptyState;
