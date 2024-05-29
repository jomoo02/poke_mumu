import React, { Fragment } from 'react';
import AgileStyleCase from './condition-key/agile-style';
import GenderCase from './condition-key/gender';
import HeldItemCase from './condition-key/held-item';
import ItemCase from './condition-key/item';
import KnownMoveTypeCase from './condition-key/known-move-type';
import KnownMoveCase from './condition-key/known-move';
import LocationCase from './condition-key/location';
import MinLevelCase from './condition-key/min-level';
import TimeOfDayCase from './condition-key/time-of-day';
import MinHappinessCase from './condition-key/min-happiness';
import OtherCase from './condition-key/ohter';
import RelativeStatCase from './condition-key/relative-stat';
import MinAffectionCase from './condition-key/min-affection';
import PartySpeciesCase from './condition-key/party-species';
import TurnUpsideDownCase from './condition-key/turn-upside-down';
import NeedsOverworldRainCase from './condition-key/needs-overworld-rain';
import RecoilDamageCase from './condition-key/recoil-damage';
import StrongStyleCase from './condition-key/strong-style';
import TradeSpeciesCase from './condition-key/trade-species';
import MinBeautyCase from './condition-key/min-beauty';
import PartyTypeCase from './condition-key/party-type';
import SpinCase from './condition-key/spin';
import RelativeNatureCase from './condition-key/relative-nature';

const COMPONENT_MAP = {
  min_level: MinLevelCase,
  time_of_day: TimeOfDayCase,
  item: ItemCase,
  location: LocationCase,
  min_happiness: MinHappinessCase,
  other: OtherCase,
  held_item: HeldItemCase,
  relative_physical_stats: RelativeStatCase,
  known_move: KnownMoveCase,
  known_move_type: KnownMoveTypeCase,
  min_affection: MinAffectionCase,
  party_species: PartySpeciesCase,
  turn_upside_down: TurnUpsideDownCase,
  needs_overworld_rain: NeedsOverworldRainCase,
  recoil_damage: RecoilDamageCase,
  agile_style: AgileStyleCase,
  gender: GenderCase,
  strong_style: StrongStyleCase,
  trade_species: TradeSpeciesCase,
  min_beauty: MinBeautyCase,
  party_type: PartyTypeCase,
  spin: SpinCase,
  relative_nature: RelativeNatureCase,
};

function sortCondition(condition, language) {
  if (language === 'en') {
    return condition;
  }

  const keyObjects = [];
  const otherObjects = [];
  const lastObjects = [];

  condition.forEach((obj) => {
    if (obj.key === 'time_of_day' || obj.key === 'location') {
      keyObjects.push(obj);
    } else if (obj.key === 'min_level') {
      lastObjects.push(obj);
    } else {
      otherObjects.push(obj);
    }
  });
  return [...keyObjects, ...otherObjects, ...lastObjects];
}

export default function Condition({ condition, language }) {
  const sortedCondtion = sortCondition(condition, language);

  const renderCondition = (key, value) => {
    const Component = COMPONENT_MAP[key];
    if (!Component) {
      return null;
    }

    return <Component {...{ value, language }} />;
  };

  return (
    <>
      {sortedCondtion.map(({ key, value }, index) => (
        <Fragment key={value}>
          {index > 0 && <span className="mx-1">+</span>}
          {renderCondition(key, value)}
        </Fragment>
      ))}
    </>
  );
}
