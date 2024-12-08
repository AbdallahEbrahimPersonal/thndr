import React, { ReactElement } from 'react';
import { render as r, RenderOptions } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook as renderHookNative } from '@testing-library/react-native';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

const Providers = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={createTestQueryClient()}>
    {children}
  </QueryClientProvider>
);

export function render(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return r(ui, {
    wrapper: Providers,
    ...options,
  });
}

export function renderHook<Result, Props>(
  hook: (props: Props) => Result,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return renderHookNative(hook, {
    wrapper: Providers,
    ...options,
  });
}

export * from '@testing-library/react-native';
