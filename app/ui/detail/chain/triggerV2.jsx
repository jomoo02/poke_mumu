import React from 'react';
import { useLanguage } from '@/app/language-provider';
import TimeOfDayCase from './trigger-detail/time-of-day';
import MinLevelCase from './trigger-detail/min-level';
import ItemCase from './trigger-detail/item';
import LocationCase from './trigger-detail/location';
import MinHappinessCase from './trigger-detail/min-happiness';
import OtherCase from './trigger-detail/ohter';
import HeldItemCase from './trigger-detail/held-item';
import RelativeStatCase from './trigger-detail/relative-stat';
import KnownMoveCase from './trigger-detail/known-move';
import KnownMoveTypeCase from './trigger-detail/known-move-type';
import MinAffectionCase from './trigger-detail/min-affection';
import PartySpeciesCase from './trigger-detail/party-species';
import GenderCase from './trigger-detail/gender';
import MinBeautyCase from './trigger-detail/min-beauty';
import TradeSpeciesCase from './trigger-detail/trade-species';
import PartyTypeCase from './trigger-detail/party-type';
import TurnUpsideDownCase from './trigger-detail/turn-upside-down';
import NeedsOverworldRainCase from './trigger-detail/rain';
import RecoilDamageCase from './trigger-detail/recoil-damage';
import AgileStyleCase from './trigger-detail/agile-style';
import StrongStyleCase from './trigger-detail/strong-style';
import SpinCase from './trigger-detail/spin';
import RelativeNatureCase from './trigger-detail/relative-nature';

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

  const flexDirection = language === 'ko' ? 'flex-col' : 'flex-col-reverse';

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
          <div className="flex">
            {sortCondition(condition).map(({ key, value }, conditionIndex) => (
              <div key={value} className="flex">
                {conditionIndex > 0 && <span className="mx-1">+</span>}
                {renderCondition(key, value)}
              </div>
            ))}
            <span className="flex justify-center ml-1">
              {creteTriggerText(trigger, condition)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
