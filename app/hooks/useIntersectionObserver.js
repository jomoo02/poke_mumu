import { useEffect, useState, useRef } from 'react';

export default function useIntersectionObserver(isLoading, isRefetching) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  const callback = (entries) => {
    entries.forEach((entry) => (setIsIntersecting(entry.isIntersecting)));
  };

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const currentRef = ref.current;
    const observer = new IntersectionObserver(callback);

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return { isIntersecting, ref };
}
