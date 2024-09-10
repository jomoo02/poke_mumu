export function getTriggerLocaleContent(trigger, condition) {
  const localeTriggerContent = {
    levelUp: {
      ko: '레벨 업',
      en: 'Level up',
    },
    item: {
      ko: '사용',
      en: 'use',
    },
    trade: {
      ko: '통신교환',
      en: 'trade',
    },
  };

  const targetTrigger = {
    levelUp: 'level-up',
    useItem: 'use-item',
    trade: 'trade',
  };

  const { levelUp, useItem, trade } = targetTrigger;

  if (trigger === levelUp && !condition.find(({ key }) => key === 'min_level')) {
    return localeTriggerContent.levelUp;
  } if (trigger === useItem) {
    return localeTriggerContent.item;
  } if (trigger === trade) {
    return localeTriggerContent.trade;
  }
  return null;
}
