import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  PersistedClient,
  persistQueryClient,
} from '@tanstack/query-persist-client-core';
import {QueryClient} from '@tanstack/react-query';

const persistClient = async (client: PersistedClient) =>
  AsyncStorage.setItem('tanstack-query-cache', JSON.stringify(client));

const restoreClient = async () => {
  const data = await AsyncStorage.getItem('tanstack-query-cache');
  return data ? JSON.parse(data) : undefined;
};

const removeClient = async () =>
  AsyncStorage.removeItem('tanstack-query-cache');

export const usePersistQueryClient = (queryClient: QueryClient) => {
  return persistQueryClient({
    queryClient,
    persister: {
      persistClient,
      restoreClient,
      removeClient,
    },
  });
};
