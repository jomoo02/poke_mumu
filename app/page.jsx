import React, { Suspense } from 'react';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { cookies } from 'next/headers';
import CardList from './ui/pokeCard/card-list';
import CardListClient from './ui/pokeCard/card-list-client';
import CardListPrefetch from './ui/pokeCard/card-list-prefetch';
import { fetchPokes, fetchAllPoke, fetchPokesRange } from './api/data';
import ScrollTop from './ui/scrollTop';
import getQueryClient from './query-get-client';
import PokeCardSkelton from './ui/pokeCard/card-skeleton';
import PokeCardListV2 from './ui/pokeCard/card-list-v2';
import PokeCardListV3 from './ui/pokeCard/card-list-v3';
import PokeCardListV4 from './ui/pokeCard/card-list-v4';
import PokeCardListV5 from './ui/pokeCard/card-list-v5';
import CardListV5 from './ui/pokeCard/card-list-v5';
import PokeCardListV6 from './ui/pokeCard/card-list-v6';

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

export default async function Page() {
  const data = await fetchAllPoke();
  // const cookieStore = cookies();
  // const index = cookieStore.get('poke-card-index');
  // const pageCounts = Number(index?.value) + 2 || 1;


  // const queryClient = new QueryClient();

  // queryClient.prefetchInfiniteQuery({
  //   queryKey: ['pokeCardData'],
  //   queryFn: (info) => fetchPokeQuery(info),
  //   initialPageParam: 0,
  //   getNextPageParam: (lastPage, pages, lastPageParam) => {
  //     const pageParm = Number(lastPageParam);
  //     if (pageParm >= 4) return undefined;
  //     return pageParm + 1;
  //   },
  //   pages: pageCounts,
  // });

  // const queryClient = getQueryClient();
  // queryClient.prefetchQuery({
  //   queryKey: ['pre'],
  //   queryFn: fetchAllPoke,
  // });

  return (
    // <CardListClient />

    // <Suspense fallback={<CardListSkelton />}>
    //   <HydrationBoundary state={dehydrate(queryClient)}>
    //     <CardListClient />
    //   </HydrationBoundary>
    // </Suspense>

    // <>
    //   <ScrollTop />
    //   <CardListPrefetch initialData={initialData} />
    // </>
    // <PokeCardListV2 initialData={initialData} />

    // <PokeCardListV3 initialData={initialData} />

    // <>
    //   <h2>pokedex</h2>
    //   <PokeCardListV4 />
    // </>

    <>
      <h2>pokeListV6</h2>
      <PokeCardListV6 initialData={data} />
    </>

    // <HydrationBoundary state={dehydrate(queryClient)}>
    //   <CardListV5 />
    // </HydrationBoundary>

  );
}
