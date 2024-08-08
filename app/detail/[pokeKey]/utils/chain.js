export function getChainNodeDetailWidthAndHeight(maxWidth, maxDepth) {
  const width = (() => {
    if (maxWidth === 8) {
      return 'w-full';
    } if (maxWidth === 4) {
      return 'w-full md:w-80';
    } if (maxDepth === 2) {
      return 'w-full max-w-52 md:w-80 md:max-w-80 lg:w-96 lg:max-w-96';
    }
    return 'w-full max-w-52 md:w-40 lg:w-52 xl:max-w-72 xl:w-72';
  })();

  const height = (() => {
    if (maxWidth === 8) {
      return 'min-h-40 md:min-h-36';
    }
    return 'min-h-32 md:min-h-28';
  })();

  return {
    width,
    height,
  };
}

export function creteTriggerText(trigger, condition, language) {
  const triggers = {
    levelUp: 'level-up',
    useItem: 'use-item',
    trade: 'trade',
  };

  const localeText = {
    ko: {
      levelUp: '레벨 업',
      item: '사용',
      trade: '통신교환',
    },
    en: {
      levelUp: 'Level up',
      item: 'use',
      trade: 'trade',
    },
  };

  const content = localeText[language] || localeText.ko;

  const { levelUp, useItem, trade } = triggers;

  if (trigger === levelUp && !condition.find(({ key }) => key === 'min_level')) {
    return content.levelUp;
  } if (trigger === useItem) {
    return content.item;
  } if (trigger === trade) {
    return content.trade;
  }
  return null;
}