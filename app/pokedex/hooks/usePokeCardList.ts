import useScrollRestoration from '@/app/hooks/useScrollRestoration';
import { useState, useEffect } from 'react';

export default function usePokeCardList() {
  const [isLoading, setIsLoading] = useState(true);

  const { setScrollPosition, getScrollPosition } = useScrollRestoration();

  useEffect(() => {
    const handlePageHide = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('pagehide', handlePageHide);

    return (() => {
      window.removeEventListener('pagehide', handlePageHide);
    });
  }, []);

  useEffect(() => {
    const scrollPosition = getScrollPosition();

    if (scrollPosition) {
      setTimeout(() => {
        window.scrollTo({ top: scrollPosition });
        setIsLoading(false);
      }, 200);
    } else {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
  };
}
