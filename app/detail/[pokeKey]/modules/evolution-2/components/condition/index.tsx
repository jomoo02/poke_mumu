import React, { Fragment } from 'react';
import { useSortCondition } from '../../hooks/useCondition';
import ConditionInfo from './condition';
import type { ConditionItem } from '../../types/condition';

interface ConditionProps {
  condition: ConditionItem[];
}

export default function Condition({ condition }: ConditionProps) {
  const { sortedCondition } = useSortCondition(condition);

  return (
    <>
      {sortedCondition.map(({ key, value }, index) => (
        <Fragment key={value}>
          {index > 0 && <span>+</span>}
          <ConditionInfo
            condition={key}
            value={value}
          />
        </Fragment>
      ))}
    </>
  );
}
// import React, { Fragment } from 'react';
// import Condition from '@/app/pokedex/[pokeKey]/_evolution/components/condition/condition';
// import type { ConditionItem, ConditionKey } from '@/app/pokedex/[pokeKey]/_evolution/data/condition';

// export default function ConditionList<C extends ConditionKey>({
//   condition,
// }: {
//   condition: ConditionItem<C>[];
// }) {
//   return (
//     <>
//       {condition.map(({ key, value }, index) => (
//         <Fragment key={key}>
//           {index > 0 && <span>+</span>}
//           <Condition
//             conditionKey={key}
//             value={value}
//           />
//         </Fragment>
//       ))}
//     </>
//   );
// }
