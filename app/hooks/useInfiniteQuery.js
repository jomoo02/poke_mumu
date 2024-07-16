import { QueryClient, useInfiniteQuery, useQueryClient, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { fetchPokes } from '../api/data';
import { useEffect } from 'react';
import usePokeCardIndex from './usePokeCardIndex';

const queryKey = ['pokeCardData'];

async function fetchPokeQuery({ pageParam }) {
  console.log(pageParam);
  const res = await fetchPokes(pageParam);

  return res;
}

export default function usePokeInfiniteQuery(setData) {
  const queryClient = useQueryClient();

  useEffect(() => {
    async function preFetch(cardIndex) {
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
        pages: cardIndex + 1,
      });
    }
    const info = sessionStorage.getItem('pos2');
    if (info) {
      const { index } = JSON.parse(info);
      const cardIndex = Math.floor(index / 240);
      preFetch(cardIndex);
    }

    // preFetch();
  }, []);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
  } = useInfiniteQuery({
    queryKey,
    queryFn: (info) => fetchPokeQuery(info),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages, lastPageParam) => {
      const pageParam = Number(lastPageParam);
      if (pageParam >= 4) {
        return undefined;
      }
      return pageParam + 1;
    },
  });

  useEffect(() => {
    setData(data?.pages.flat() || []);
    // console.log(data?.pages.flat());
  }, [data, setData]);

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
