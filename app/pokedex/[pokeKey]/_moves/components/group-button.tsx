import React from 'react';
import { Type } from '@/app/data/pokeType';
// import { Version } from '@/app/data/version';

function Button({
  isActive,
  onClickButton,
  className,
  children,
}: {
  isActive: boolean;
  onClickButton: () => React.MouseEventHandler<HTMLButtonElement>;
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

function Gen({
  type,
  gens,
  targetGen,
  setTargetGen,
}: {
  type: Type;
  gens: number[];
  targetGen: number;
  setTargetGen: (gen: number) => React.MouseEventHandler<HTMLButtonElement>;
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

function Version({
  type,
  versions,
  targetVersion,
  setTargetVersion,
}: {
  type: Type;
  versions: {
    version: string;
    localeVersion: string;
  }[];
  targetVersion: string;
  setTargetVersion: (version: string) => React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="grid grid-cols-2 lg:flex gap-x-1 gap-y-1 lg:gap-x-1.5">
      {versions.map(({ version, localeVersion }) => {
        const isActive = version === targetVersion;

        return (
          <Button
            key={version}
            isActive={isActive}
            onClickButton={() => setTargetVersion(version)}
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
  Gen,
  Version,
};

export default GroupButton;
