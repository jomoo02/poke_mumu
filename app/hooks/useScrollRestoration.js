const KEY = 'scroll_info';

export default function useScrollRestoration() {
  const getScrollPosition = () => {
    const sessionInfo = sessionStorage.getItem(KEY);

    if (sessionInfo) {
      return Number(JSON.parse(sessionInfo));
    }
    return 0;
  };

  const setScrollPosition = (scrollPosition) => {
    sessionStorage.setItem(KEY, JSON.stringify(scrollPosition));
  };

  return {
    getScrollPosition,
    setScrollPosition,
  };
}
