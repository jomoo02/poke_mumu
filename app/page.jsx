import React, { Suspense } from 'react';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { cookies } from 'next/headers';
import CardList from './ui/pokeCard/card-list';
import CardListClient from './ui/pokeCard/card-list-client';
import { fetchPokes, fetchAllPoke } from './api/data';
import ScrollTop from './ui/scrollTop';

async function fetchPokeQuery({ pageParam }) {
  console.log('prefetch: ', pageParam);
  const res = await fetchPokes(pageParam);
  return res;
}

export default async function Page() {
  // const pokeData = await fetchPokes(0);
  // const pokeData = await fetchAllPoke();
  const cookieStore = cookies();
  const index = cookieStore.get('poke-card-index');
  const pageCounts = Number(index?.value) + 2 || 1;
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['pokeCardData'],
    queryFn: fetchPokeQuery,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages, lastPageParam) => {
      const pageParm = Number(lastPageParam);
      if (pageParm >= 4) return undefined;
      return pageParm + 1;
    },
    pages: pageCounts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CardListClient />
    </HydrationBoundary>
  );
}
