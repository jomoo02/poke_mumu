import { useEffect } from 'react';

export default function useEscKeyListener(callback) {
  useEffect(() => {
    const closeModalOnEsc = (e) => {
      if (e.isComposing) return;
      if (e.key === 'Escape') {
        callback();
      }
    };

    window.addEventListener('keydown', closeModalOnEsc);

    return () => {
      window.removeEventListener('keydown', closeModalOnEsc);
    };
  }, []);
}
