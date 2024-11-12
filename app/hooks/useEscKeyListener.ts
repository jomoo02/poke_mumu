import { useEffect } from 'react';

export default function useEscKeyListener(callback: () => void) {
  useEffect(() => {
    const closeModalOnEsc = (e: globalThis.KeyboardEvent): void => {
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
