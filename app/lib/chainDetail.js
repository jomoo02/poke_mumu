import { ITEM_KO, TRADE_ITEM_KO } from '../translations/item';

const TRIGGERS = {
  levelUp: 'level-up',
  trade: 'trade',
  useItem: 'use-item',
  other: 'other',
};

const TRIGGER_KO = {
  trade: '통신교환',
  'use-item': '사용',
};

const CONDITION_MAP_KO = {
  min_level: '레벨',
  time_of_day: '에 레벨업',
};

const TIME_OF_DAY_MAP_KO = {
  night: '밤',
  day: '낮',
  dusk: '황혼',
};

function triggerCaseLevelUp(condition) {

}

export default function getDetail(detail) {
  const answer = detail.map(({ trigger, condition }) => {
    if (trigger === TRIGGERS.levelUp) {

    }
  });
}
