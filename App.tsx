import React, { useEffect } from 'react';

import Navigator from './src/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import { usePersistQueryClient } from '@/services/caching';
import { SafeAreaView, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2 * 60 * 1000,
      retry: 2,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    },
  },
});

function App(): React.JSX.Element {
  usePersistQueryClient(queryClient);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.safeArea}>
        <Navigator />
        <Toast position="bottom" bottomOffset={20} />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
