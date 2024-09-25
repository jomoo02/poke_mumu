import React from 'react';
import GroupButton from './group-button';
import '../../styles/button-group.css';

function Gen({
  type,
  gens,
  targetGen,
  setTargetGen,
}) {
  return (
    <div className="flex gap-x-2 flex-wrap gap-y-2 items-center">
      {gens.map((gen) => {
        const isActive = gen === targetGen;

        return (
          <GroupButton
            key={gen}
            className={`gen-btn ${isActive ? `${type} active-gen-btn` : 'inactive-btn'}`}
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
  return (
    <div className="grid grid-cols-2 lg:flex gap-x-1 gap-y-1 lg:gap-x-1.5">
      {versions.map(({ version, localeVersion }) => {
        const isActive = version === targetVersion;

        return (
          <GroupButton
            key={version}
            version={version}
            isActive={isActive}
            type={type}
            handleClick={() => setTargetVersion(version)}
            className={`version-btn ${isActive ? `${type} active-version-btn` : 'inactive-btn'}`}
          >
            {localeVersion}
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
