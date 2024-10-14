import { useEffect } from 'react';

export default function useLockBodyScroll() {
  const className = 'overflow-y-hidden';

  useEffect(() => {
    const body = document.querySelector('body');

    if (body) {
      body.classList.add(className);
    }

    return () => {
      if (body) {
        body.classList.remove(className);
      }
    };
  }, []);
}
