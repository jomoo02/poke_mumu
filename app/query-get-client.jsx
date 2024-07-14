// app/get-query-client.ts
import { isServer, QueryClient, defaultShouldDehydrateQuery } from '@tanstack/react-query';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
      dehydrate: {
        // per default, only successful Queries are included,
        // this includes pending Queries as well
        shouldDehydrateQuery: (query) => defaultShouldDehydrateQuery(query)
          || query.state.status === 'pending',
      },
    },
  });
}

let browserQueryClient;

export default function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  }
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
}
