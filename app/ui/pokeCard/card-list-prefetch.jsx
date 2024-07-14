'use client';

import React, { Fragment, useEffect, useState, Suspense, lazy } from 'react';
import PokeCardSkelton from './card-skeleton';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import fetchPokes from '../../actions/getData';
import Card from './card';

const LasyCard = lazy(() => import('./card'));

function CardListSkelton() {
  return (
    <>
      {Array.from({ length: 240 }, (_, index) => (
        <PokeCardSkelton key={`card-${index}`} />
      ))}
    </>
  );
}

function PrefetchCardList({ setIsPreFetch }) {
  const [pokeDatas, setPokeDats] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const preFetch = async (n) => {
    const cardIndexs = Array.from({ length: n }, (_, i) => i + 1);

    const datas = await Promise.all(cardIndexs.map(fetchPokes));

    setPokeDats(datas);
    setIsLoaded(true);
    console.log(datas);
  };

  useEffect(() => {
    const info = sessionStorage.getItem('pos2');

    if (info) {
      const { index } = JSON.parse(info);
      preFetch(index);
    } else {
      setIsPreFetch(false);
    }
  }, []);

  useEffect(() => {
    const info = sessionStorage.getItem('pos2');

    if (isLoaded) {
      const { scroll } = JSON.parse(info);
      window.scrollTo({ top: scroll });
      setIsPreFetch(false);
      console.log('prefetch');
    }
  }, [isLoaded]);

  return (
    <>
      {/* {!isLoaded && <CardListSkelton />} */}
      {pokeDatas?.map((data, index) => (
        <Fragment key={`pokeIndex-${index}`}>
          {data.map((basicInfo, index1) => (
            <Suspense fallback={<PokeCardSkelton />} key={`${basicInfo.id}-sus-${index1}`}>
              <LasyCard
                key={basicInfo.id}
                basicInfo={basicInfo}
                cardIndex={index}
              />
            </Suspense>

          ))}
        </Fragment>
      ))}
    </>
  );
}

export default function CardListPrefetch({ initialData }) {
  const { isIntersecting, ref } = useIntersectionObserver();
  const [pokeDatas, setPokeDatas] = useState([]);
  const [hasNext, setHasNext] = useState(true);
  const [pokeIndex, setPokeIndex] = useState(1);
  const [isLoad, setIsLoad] = useState(false);

  const [isPreFetch, setIsPreFetch] = useState(true);

  const load = async () => {
    if (hasNext) {
      console.log(pokeIndex);
      const data = await fetchPokes(pokeIndex);

      setPokeDatas((d) => [...d, ...data]);
      const curIndex = pokeIndex + 1;
      setPokeIndex(curIndex);

      if (curIndex >= 5) {
        setHasNext(false);
      }
    }
    setIsLoad(false);
  };

  useEffect(() => {
    const info = sessionStorage.getItem('pos2');
    if (info) {
      const { index } = JSON.parse(info);
      setPokeIndex(index + 1);
    }
  }, []);

  useEffect(() => {
    if (isIntersecting && hasNext && !isLoad && !isPreFetch) {
      console.log(isIntersecting, hasNext, isLoad, isPreFetch);
      setIsLoad(true);
    }
  }, [isIntersecting, hasNext, isPreFetch]);

  useEffect(() => {
    if (isLoad) {
      load();
    }
  }, [isLoad]);

  //   useEffect(() => {
  //   if (!isLoading) {
  //     const scrollY = sessionStorage.getItem('pos2');
  //     console.log('이동');
  //     window.scrollTo({ top: scrollY });
  //   }
  // }, [isLoading]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('pos2', JSON.stringify({ scroll: window.scrollY, index: pokeIndex }));
      console.log('setItem@@');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return (() => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    });
  }, [pokeIndex]);

  return (
    <div>
      <div className="grid grid-cols-4">
        {initialData.map((data) => (
          <Card
            key={data.id}
            basicInfo={data}
            cardIndex={pokeIndex}
          />
        ))}
        <PrefetchCardList setIsPreFetch={setIsPreFetch} />
        {pokeDatas.map((data) => (
          <Card
            key={data.id}
            basicInfo={data}
            cardIndex={pokeIndex}
          />
        ))}
        {isLoad && <CardListSkelton />}
      </div>

      <div ref={ref} />
    </div>
  );
}
