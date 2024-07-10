import { useInfiniteQuery, useQueryClient, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import usePokeCardIndex from './usePokeCardIndex';
import { fetchPokes } from '../api/data';

const queryKey = ['pokeCardData'];

async function fetchPokeQuery({ pageParam }) {
  console.log(pageParam);
  if (pageParam === 0) {
    return [];
  }
  const res = await fetchPokes(pageParam);

  return res;
}

export default function usePokeInfiniteQuery() {
  // const queryClient = useQueryClient();

  // const { getPokeCardIndex } = usePokeCardIndex();

  // useEffect(() => {
  //   (async () => {
  //     const pokeCardIndex = getPokeCardIndex();
  //     await queryClient.prefetchInfiniteQuery({
  //       queryKey,
  //       queryFn: fetchPokeQuery,
  //       initialPageParam: 0,
  //       getNextPageParam: (lastPage, pages, lastPageParam) => {
  //         const pageParam = Number(lastPageParam);
  //         if (pageParam >= 5) {
  //           return undefined;
  //         }
  //         return pageParam + 1;
  //       },
  //       pages: Number(pokeCardIndex) + 2,
  //     });
  //   })();
  // }, []);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
  } = useSuspenseInfiniteQuery({
    queryKey,
    queryFn: fetchPokeQuery,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages, lastPageParam) => {
      const pageParam = Number(lastPageParam);
      if (pageParam >= 4) {
        return undefined;
      }
      return pageParam + 1;
    },
  });

  return {
    pokeData: data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isFetching,
    isLoading,
  };
}
