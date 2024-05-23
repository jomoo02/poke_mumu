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

export default function TriggerV2({ detail, name }) {
  const { language } = useLanguage();

  const createKey = (trigger, condition) => `${trigger}-${condition.map(({ key }) => key).join('/')}`;

  return (
    <div>
      {detail.map(({ trigger, condition }) => (
        <div key={createKey(trigger, condition)}>
          <div className="bg-blue-100">{trigger}</div>
          {condition.map(({ key, value }) => (
            <div key={value} className="flex flex-col gap-y-5">
              <div>{`${key}: ${value}`}</div>
              <div>
                {key === 'min_level' && <MinLevelCase level={value} />}
                {key === 'time_of_day' && <TimeOfDayCase time={value} language={language} />}
                {key === 'item' && <ItemCase item={value} language={language} />}
                {key === 'location' && <LocationCase location={value} language={language} />}
                {key === 'min_happiness' && <MinHappinessCase language={language} />}
                {key === 'other' && <OtherCase name={name} language={language} />}
                {key === 'held_item' && <HeldItemCase item={value} language={language} />}
                {key === 'relative_physical_stats' && <RelativeStatCase value={value} language={language} />}
                {key === 'known_move' && <KnownMoveCase move={value} language={language} />}
                {key === 'known_move_type' && <KnownMoveTypeCase type={value} language={language} />}
                {key === 'min_affection' && <MinAffectionCase value={value} language={language} />}
                {key === 'party_species' && <PartySpeciesCase party={value} language={language} />}
                {key === 'gender' && <GenderCase gender={value} language={language} />}
                {key === 'min_beauty' && <MinBeautyCase language={language} />}
                {key === 'trade_species' && <TradeSpeciesCase species={value} language={language} />}
                {key === 'party_type' && <PartyTypeCase type={value} language={language} />}
                {key === 'turn_upside_down' && <TurnUpsideDownCase language={language} />}
                {key === 'needs_overworld_rain' && <NeedsOverworldRainCase language={language} />}
                {key === 'recoil-damage' && <RecoilDamageCase damage={value} language={language} />}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
