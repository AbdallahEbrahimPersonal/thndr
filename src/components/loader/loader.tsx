import { colors } from '@/lib';
import React from 'react-native';
import {
  View,
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
} from 'react-native';

const CircularLoader = (props: ActivityIndicatorProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});

export { CircularLoader };
