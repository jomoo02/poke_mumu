import { QueryClient, useInfiniteQuery, useQueryClient, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { fetchPokes } from '../api/data';
import { useEffect } from 'react';
import usePokeCardIndex from './usePokeCardIndex';

const queryKey = ['pokeCardData'];

async function fetchPokeQuery({ pageParam }) {
  const res = await fetchPokes(pageParam);

  return res;
}

async function preFetch(queryClient, pagesNumber) {
  await queryClient.prefetchInfiniteQuery({
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
    pages: pagesNumber + 1,
  });
}

export default function usePokeInfiniteQuery() {
  const { getPokeCardIndex } = usePokeCardIndex();
  const queryClient = useQueryClient();
  // useEffect(() => {
  //   const pageNumber = getPokeCardIndex();
  //   preFetch(queryClient, pageNumber);
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
