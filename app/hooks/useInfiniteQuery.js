import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect, useMemo } from 'react';
import usePokeCardIndex from './usePokeCardIndex';
import { fetchPokes } from '../api/data';

const queryKey = ['pokeCardData'];

async function fetchPokeQuery({ pageParam }) {
  const res = await fetchPokes(pageParam);
  return res;
}

export default function usePokeInfiniteQuery() {
  const queryClient = useQueryClient();

  const { getPokeCardIndex } = usePokeCardIndex();

  useEffect(() => {
    (async () => {
      const pokeCardIndex = getPokeCardIndex();

      if (pokeCardIndex <= 1) {
        return;
      }

      await queryClient.prefetchInfiniteQuery({
        queryKey,
        queryFn: fetchPokeQuery,
        initialPageParam: 1,
        pages: pokeCardIndex,
      });
    })();
  }, []);

  const {
    data,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey,
    queryFn: fetchPokeQuery,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages, lastPageParam) => {
      const pageParam = Number(lastPageParam);
      if (pageParam >= 5) {
        return undefined;
      }
      return pageParam + 1;
    },
  });

  const pokeData = useMemo(() => {
    if (data) {
      return data.pages.flat();
    }
    return [];
  }, [data]);

  return {
    pokeData,
    fetchNextPage,
    hasNextPage,
  };
}
