import React, { Suspense } from 'react';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { cookies } from 'next/headers';
import CardList from './ui/pokeCard/card-list';
import CardListClient from './ui/pokeCard/card-list-client';
import CardListPrefetch from './ui/pokeCard/card-list-prefetch';
import { fetchPokes, fetchAllPoke } from './api/data';
import ScrollTop from './ui/scrollTop';
import getQueryClient from './query-get-client';

async function fetchPokeQuery({ pageParam }) {
  console.log('prefetch: ', pageParam);
  const res = await fetchPokes(pageParam);
  return res;
}

export default function Page() {
  // const initialData = await fetchPokes(0);
  const cookieStore = cookies();
  const index = cookieStore.get('poke-card-index');
  const pageCounts = Number(index?.value) + 2 || 1;

  const queryClient = getQueryClient();
  // const queryClient = new QueryClient();

  queryClient.prefetchInfiniteQuery({
    queryKey: ['pokeCardData'],
    queryFn: (info) => fetchPokeQuery(info),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages, lastPageParam) => {
      const pageParm = Number(lastPageParam);
      if (pageParm >= 4) return undefined;
      return pageParm + 1;
    },
    pages: pageCounts,
  });

  return (
    // <CardListClient />
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CardListClient />
    </HydrationBoundary>

    // <>
    //   <ScrollTop />
    //   <CardListPrefetch initialData={initialData} />
    // </>

  );
}
