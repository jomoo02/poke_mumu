import React from 'react';
import AbilitiesSkeleton from '../modules/abilities/components/abilities-skeleton';
import BasicInfoSkeleton from '../modules/basic-info/components/basic-info-skeleton';
import DefenseCompatibilitySkeleton from '../modules/defense-compatibility/components/defense-compatibility-skeleton';
import EvolutionSkeleton from '../modules/evolution/components/evolution-skeleton';
import FormsSkeleton from '../modules/forms/components/forms-skeleton';
import MovesSkeleton from '../modules/moves/components/moves-skeleton';
import NavigationSkeleton from '../modules/navigation/components/navigation-skeleton';
import StatsSkeleton from '../modules/stats/components/stats-skeleton';

export default function PageSkeletons() {
  return (
    <div className="grid gap-y-12">
      <NavigationSkeleton />
      <BasicInfoSkeleton />
      <AbilitiesSkeleton />
      <FormsSkeleton />
      <DefenseCompatibilitySkeleton />
      <StatsSkeleton />
      <EvolutionSkeleton />
      <MovesSkeleton />
    </div>
  );
}
