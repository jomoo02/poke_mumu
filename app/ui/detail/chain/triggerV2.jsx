import React from 'react';
import { useLanguage } from '@/app/language-provider';
import TimeOfDayCase from './condition/condition-key/time-of-day';
import MinLevelCase from './condition/condition-key/min-level';
import ItemCase from './condition/condition-key/item';
import LocationCase from './condition/condition-key/location';
import MinHappinessCase from './condition/condition-key/min-happiness';
import OtherCase from './condition/condition-key/ohter';
import HeldItemCase from './condition/condition-key/held-item';
import RelativeStatCase from './condition/condition-key/relative-stat';
import KnownMoveCase from './condition/condition-key/known-move';
import KnownMoveTypeCase from './condition/condition-key/known-move-type';
import MinAffectionCase from './condition/condition-key/min-affection';
import PartySpeciesCase from './condition/condition-key/party-species';
import GenderCase from './condition/condition-key/gender';
import MinBeautyCase from './condition/condition-key/min-beauty';
import TradeSpeciesCase from './condition/condition-key/trade-species';
import PartyTypeCase from './condition/condition-key/party-type';
import TurnUpsideDownCase from './condition/condition-key/turn-upside-down';
import NeedsOverworldRainCase from './condition/condition-key/rain';
import RecoilDamageCase from './condition/condition-key/recoil-damage';
import AgileStyleCase from './condition/condition-key/agile-style';
import StrongStyleCase from './condition/condition-key/strong-style';
import SpinCase from './condition/condition-key/spin';
import RelativeNatureCase from './condition/condition-key/relative-nature';

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

export default function TriggerV2({ detail }) {
  const { language } = useLanguage();

  const flexDirection = language === 'ko' ? 'flex-row' : 'flex-row-reverse';

  const createKey = (trigger, condition) => `${trigger}-${condition.map(({ key }) => key).join('/')}`;

  const creteTriggerText = (trigger, condition) => {
    if (trigger === 'level-up' && !condition.find(({ key }) => key === 'min_level')) {
      return language === 'ko' ? '레벨 업' : 'Level up';
    } if (trigger === 'use-item') {
      return language === 'ko' ? '사용' : 'use';
    } if (trigger === 'trade') {
      return language === 'ko' ? '통신교환' : 'trade';
    }
    return null;
  };

  const sortCondition = (condition) => {
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
  };

  const renderCondition = (key, value) => {
    const Component = COMPONENT_MAP[key];
    if (!Component) return null;
    return <Component {...{ value, language }} />;
  };

  return (
    <div className="text-sm">
      {detail.map(({ trigger, condition }, index) => (
        <div key={createKey(trigger, condition)} className={`flex ${flexDirection} gap-1`}>
          {index > 0 && <div>or</div>}
          <div className={`flex ${flexDirection}`}>
            <div className="flex">
              {sortCondition(condition).map(({ key, value }, conditionIndex) => (
                <div key={value} className="flex">
                  {conditionIndex > 0 && <span className="mx-1">+</span>}
                  {renderCondition(key, value)}
                </div>
              ))}
            </div>
            <span className="flex justify-center mx-1">
              {creteTriggerText(trigger, condition)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
