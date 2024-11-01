import React from 'react';
import ConditionGender from './condition-gender';
import ConditionItem from './condition-item';
import ConditionLocation from './condition-location';
import ConditionMin from './condition-min';
import ConditionMove from './condition-move';
import ConditionOther from './condition-other';
import ConditionParty from './condition-party';
import ConditionRain from './condition-rain';
import ConditionRelative from './condition-relative';
import ConditionTimeOfDay from './condition-timeofday';
import ConditionTrade from './condition-trade';
import type {
  ConditionKey,
  ConditionValueMap,
} from '../../data/condition';

const conditionKeyMap: {
  [K in ConditionKey]: (value: ConditionValueMap[K]) => React.JSX.Element
} = {
  other: (value) => ConditionOther.other({ value }),
  spin: () => ConditionOther.spin(),
  recoil_damage: (value) => ConditionOther.recoilDamage({ value }),
  turn_upside_down: () => ConditionOther.turn(),

  agile_style: (value) => ConditionMove.agileStyle({ value }),
  strong_style: (value) => ConditionMove.strongStyle({ value }),
  known_move: (value) => ConditionMove.knownMove({ value }),
  known_move_type: (value) => ConditionMove.knownMoveType({ value }),
  use_move: (value) => ConditionMove.usedMove({ value }),

  gender: (value) => ConditionGender.gender({ value }),
  item: (value) => ConditionItem.item({ value }),
  held_item: (value) => ConditionItem.heldItem({ value }),
  location: (value) => ConditionLocation.location({ value }),
  area: (value) => ConditionLocation.area({ value }),

  min_affection: (value) => ConditionMin.affection({ value }),
  min_beauty: () => ConditionMin.beauty(),
  min_happiness: () => ConditionMin.happiness(),
  min_level: (value) => ConditionMin.level({ value }),

  needs_overworld_rain: () => ConditionRain.rain(),

  party_type: (value) => ConditionParty.type({ value }),
  party_species: (value) => ConditionParty.species({ value }),

  relative_nature: (value) => ConditionRelative.nature({ value }),
  relative_physical_stats: (value) => ConditionRelative.physicalStats({ value }),

  time_of_day: (value) => ConditionTimeOfDay.timeOfDay({ value }),

  trade_species: (value) => ConditionTrade.species({ value }),
};

interface ConditionProps<C extends ConditionKey> {
  conditionKey: C;
  value: ConditionValueMap[C];
}

export default function Condition<C extends ConditionKey>({
  conditionKey,
  value,
}: ConditionProps<C>) {
  const RenderComponent = conditionKeyMap[conditionKey];

  return RenderComponent ? RenderComponent(value) : null;
}
