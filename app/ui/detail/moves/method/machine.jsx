import React, { Fragment } from 'react';
import MethodMoves from './method-moves';

function Header({ type }) {
  return (
    <div className="flex items-center">
      {type}
    </div>
  );
}

function Content({ moveData }) {
  return (
    <div className="flex items-center text-xs md:text-base">
      {moveData.machine.name.slice(2)}
    </div>
  );
}

export default function MachineMethodMoves({ moves }) {
  const title = '기술머신으로 익히는 기술';
  const machineTypes = ['tm', 'hm', 'tr'];

  const filterMovesMachinType = (type) => (
    moves
      .filter(({ machine }) => machine.type === type)
      .sort((a, b) => {
        const getNumber = (str) => parseInt(str.match(/\d+/), 10) || 0;
        return getNumber(a.machine.name) - getNumber(b.machine.name);
      }));

  const machineTypesMoves = machineTypes.map((type) => filterMovesMachinType(type));
  const getHeader = (type) => <Header type={type} />;

  return (
    <div>
      <h4 className="text-lg font-medium md:text-xl">
        {title}
      </h4>
      <div className="grid gap-y-6">
        {machineTypes.map((type, index) => (
          <Fragment key={type}>
            {machineTypesMoves[index].length > 0 && (
              <MethodMoves
                title={type}
                moves={machineTypesMoves[index]}
                HeaderContent={() => <Header type={type} />}
                MoveContent={Content}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
