'use client';

import React, { useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 60 * 1000 } } });

export default function ClientProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: { queries: { staleTime: 60 * 1000 } },
  }));

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
