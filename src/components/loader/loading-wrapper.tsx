import React from 'react';
import { CircularLoader } from './loader';

type LoadingWrapperProps = {
  children: React.ReactNode;
  isLoading: boolean;
};

const LoadingWrapper = ({ children, isLoading }: LoadingWrapperProps) => {
  if (isLoading) {
    return <CircularLoader testID="loader" />;
  }

  return children;
};

export { LoadingWrapper };
