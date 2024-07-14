import React, { Suspense } from 'react';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { cookies } from 'next/headers';
import CardList from './ui/pokeCard/card-list';
import CardListClient from './ui/pokeCard/card-list-client';
import CardListPrefetch from './ui/pokeCard/card-list-prefetch';
import { fetchPokes, fetchAllPoke } from './api/data';
import ScrollTop from './ui/scrollTop';
import getQueryClient from './query-get-client';
import PokeCardSkelton from './ui/pokeCard/card-skeleton';

function CardListSkelton() {
  return (
    <div
      className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 sm:gap-x-4 gap-y-3 sm:gap-y-4 justify-center items-center"
    >
      {Array.from({ length: 240 }, (_, index) => (
        <PokeCardSkelton key={`card-${index}`} />
      ))}
    </div>
  );
}
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
    <Suspense fallback={<CardListSkelton />}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CardListClient />
      </HydrationBoundary>
    </Suspense>



    // <>
    //   <ScrollTop />
    //   <CardListPrefetch initialData={initialData} />
    // </>

  );
}
