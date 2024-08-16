import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/app/language-provider';
import { getLocaleVersion } from '../../utils/moves';
import TargetMoves from './target-moves';

function VersionButton({
  version,
  isActive,
  type,
  handleClick,
  className,
}) {
  const { language } = useLanguage();

  const versionText = getLocaleVersion(version, language);

  if (isActive) {
    return (
      <div
        className={`${type} ${className} text-white font-semibold text-center flex items-center justify-center`}
      >
        {versionText}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => handleClick(version)}
      className={`bg-slate-200 ${className} hover:bg-slate-400/70 font-medium`}
    >
      {versionText}
    </button>
  );
}

function VersionGroup({
  versions,
  type,
  targetVersion,
  setTargetVersion,
}) {
  return (
    <div className="border-b-2 grid gap-y-3 pt-2">
      <div className="grid grid-cols-2 lg:flex gap-x-1 gap-y-1 px-2 lg:gap-x-2">
        {versions.map((version) => (
          <VersionButton
            key={version}
            version={version}
            isActive={targetVersion === version}
            type={type}
            handleClick={setTargetVersion}
            className="rounded-t-lg py-px lg:px-3.5 lg:pb-0.5 lg:pt-1 text-sm md:text-base"
          />
        ))}
      </div>
    </div>
  );
}

export default function VersionMoves({
  type,
  versions,
  targetVersion,
  setTargetVersion,
}) {
  // const versions = useMemo(() => genMoves.map(({ version }) => version), [genMoves]);

  // const [targetVersion, setTargetVersion] = useState(versions[0]);

  // const versionMoves = genMoves.find(({ version }) => version === targetVersion)?.versionMoves;

  return (
    <>
      <VersionGroup
        versions={versions}
        type={type}
        targetVersion={targetVersion}
        setTargetVersion={setTargetVersion}
      />
      {/* <div className="p-3 2xl:px-10">
        <TargetMoves
          key={targetVersion}
          versionMoves={versionMoves}
        />
      </div> */}
    </>
  );
}
