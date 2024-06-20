import { useEffect } from 'react';

export default function useLockBodyScroll() {
  const className = 'overflow-y-hidden';
  useEffect(() => {
    const body = document.querySelector('body');

    body.classList.add(className);

    return () => {
      body.classList.remove(className);
    };
  }, []);
}
