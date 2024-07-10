'use client';

import React from 'react';
import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

// const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 60 * 1000 } } });

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}

let browerQueryClient;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  }
  if (!browerQueryClient) {
    browerQueryClient = makeQueryClient();
  }
  return browerQueryClient;
}

export default function ClientProvider({ children }) {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
