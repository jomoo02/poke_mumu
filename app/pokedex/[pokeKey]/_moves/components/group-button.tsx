import React from 'react';
import { Type } from '@/app/data/pokeType';
import { Version } from '@/app/data/version';
// import { Version } from '@/app/data/version';

function Button({
  isActive,
  onClickButton,
  className,
  children,
}: {
  isActive: boolean;
  onClickButton: () => void;
  className?: string;
  children?: React.ReactNode;
}) {
  if (isActive) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  const handleClick = () => onClickButton();

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}

function GenGroup({
  type,
  gens,
  targetGen,
  setTargetGen,
}: {
  type: Type;
  gens: number[];
  targetGen: number;
  setTargetGen: (gen: number) => void;
}) {
  return (
    <div className="flex gap-x-2 flex-wrap gap-y-2 items-center">
      {gens.map((gen) => {
        const isActive = gen === targetGen;

        return (
          <Button
            key={gen}
            className={`flex items-center justify-center rounded-md px-2 py-1 h-7 min-w-10 md:min-w-11 md:max-w-11 ${isActive ? `${type} text-white` : 'bg-slate-200 hover:bg-slate-400/70'}`}
            onClickButton={() => setTargetGen(gen)}
            isActive={isActive}
          >
            <span className="text-sm md:text-base font-medium text-slate-80">
              {gen}
            </span>
            <span className="font-semibold text-[12px] leading-[24px]">
              th
            </span>
          </Button>
        );
      })}
    </div>
  );
}

function VersionGroup({
  type,
  versions,
  targetVersion,
  handleTargetVersion,
}: {
  type: Type;
  versions: {
    version: Version;
    localeVersion: string;
  }[];
  targetVersion: Version;
  handleTargetVersion: (version: Version) => void;
}) {
  return (
    <div className="grid grid-cols-2 lg:flex gap-x-1 gap-y-1 lg:gap-x-1.5">
      {versions.map(({ version, localeVersion }) => {
        const isActive = version === targetVersion;

        return (
          <Button
            key={version}
            isActive={isActive}
            onClickButton={() => handleTargetVersion(version)}
            className={`version-btn ${isActive ? `${type} active-version-btn` : 'inactive-btn'}`}
          >
            {localeVersion}
          </Button>
        );
      })}
    </div>
  );
}

const GroupButton = {
  Gen: GenGroup,
  Version: VersionGroup,
};

export default GroupButton;
