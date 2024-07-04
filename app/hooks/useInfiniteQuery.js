import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect, useMemo } from 'react';
import usePokeCardIndex from './usePokeCardIndex';
import { fetchPokes } from '../api/data';

const queryKey = ['pokeCardData'];

async function fetchPokeQueryPre({ pageParam }) {
  console.log('pre', pageParam);
  if (pageParam === 0) {
    return [];
  }
  const res = await fetchPokes(pageParam);
  return res;
}

async function fetchPokeQuery({ pageParam }) {
  console.log(pageParam);
  if (pageParam === 0) {
    return [];
  }
  const res = await fetchPokes(pageParam);
  return res;
}

export default function usePokeInfiniteQuery() {
  const queryClient = useQueryClient();

  const { getPokeCardIndex } = usePokeCardIndex();

  useEffect(() => {
    (async () => {
      const pokeCardIndex = getPokeCardIndex();
      await queryClient.prefetchInfiniteQuery({
        queryKey,
        queryFn: fetchPokeQueryPre,
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages, lastPageParam) => {
          const pageParam = Number(lastPageParam);
          if (pageParam >= 5) {
            return undefined;
          }
          return pageParam + 1;
        },
        pages: pokeCardIndex + 1,
      });
    })();
  }, []);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    status,
  } = useInfiniteQuery({
    queryKey,
    queryFn: fetchPokeQuery,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages, lastPageParam) => {
      const pageParam = Number(lastPageParam);
      if (pageParam >= 5) {
        return undefined;
      }
      return pageParam + 1;
    },
    select: (d) => d?.pages.flat() || [],
  });

  // const pokeData = useMemo(() => {
  //   if (data) {
  //     return data.pages.flat();
  //   }
  //   return [];
  // }, [data]);

  return {
    pokeData: data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    status,
  };
}
