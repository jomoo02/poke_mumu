import AbilitiesSkeleton from '../_abilities/components/skeleton';
import DefenseCompatibilitySkeleton from '../_defense-compatibility/components/skeleton';
import EvolutionSkeleton from '../_evolution/components/skeleton';
import InformationSkeleton from '../_information/components/skeleton';
import MovesSkeleton from '../_moves/components/skeleton';
import NavigationSkeleton from '../_navigation/components/skeleton';
import StatsSkeleton from '../_stats/components/skeleton';

export default function PageSkeleton({ pokeKey }: { pokeKey: string }) {
  return (
    <div className="grid gap-y-12">
      <NavigationSkeleton pokeKey={pokeKey} />
      <InformationSkeleton />
      <AbilitiesSkeleton />
      <DefenseCompatibilitySkeleton />
      <StatsSkeleton />
      <EvolutionSkeleton />
      <MovesSkeleton />
    </div>
  );
}
