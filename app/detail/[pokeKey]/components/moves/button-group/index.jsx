import React from 'react';
import GroupButton from './button';

function Gen({
  type,
  gens,
  targetGen,
  setTargetGen,
}) {
  const basicButtonClassName = 'flex items-center justify-center rounded-md px-2 py-1 h-7 min-w-10 md:min-w-11 md:max-w-11';
  const activeButtonClassName = `${type} text-white`;
  const inActiveButtonClassName = 'bg-slate-200 hover:bg-slate-400/90';

  return (
    <div className="flex gap-x-2 flex-wrap gap-y-2 items-center">
      {gens.map((gen) => {
        const isActive = gen === targetGen;
        const buttonClassName = isActive ? activeButtonClassName : inActiveButtonClassName;

        return (
          <GroupButton
            key={gen}
            className={`${basicButtonClassName} ${buttonClassName}`}
            handleClick={() => setTargetGen(gen)}
            isActive={isActive}
          >
            <span className="text-sm md:text-base font-medium text-slate-80">
              {gen}
            </span>
            <span className="font-semibold text-[12px] leading-[24px]">
              th
            </span>
          </GroupButton>
        );
      })}
    </div>
  );
}

function Version({
  type,
  versions,
  targetVersion,
  setTargetVersion,
}) {
  const actvieButtonClassName = `${type} text-white text-center flex items-center justify-center`;
  const inActiveButtonClassName = 'bg-slate-200 hover:bg-slate-400/70';
  const basicButtonClassName = 'font-medium rounded-t-lg py-1 px-1 lg:px-3.5 text-sm md:text-base';

  return (
    <div className="grid grid-cols-2 lg:flex gap-x-1 gap-y-1 lg:gap-x-1.5">
      {versions.map(({ version, text }) => {
        const isActive = version === targetVersion;
        const buttonClassName = isActive ? actvieButtonClassName : inActiveButtonClassName;
        return (
          <GroupButton
            key={version}
            version={version}
            isActive={targetVersion === version}
            type={type}
            handleClick={() => setTargetVersion(version)}
            className={`${buttonClassName} ${basicButtonClassName}`}
          >
            {text}
          </GroupButton>
        );
      })}
    </div>
  );
}

const ButtonGroup = {
  Gen,
  Version,
};

export default ButtonGroup;
