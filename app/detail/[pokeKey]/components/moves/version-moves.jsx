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
        className={`${type} ${className} text-white font-semibold`}
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
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-1 gap-y-px px-2">
        {versions.map((version) => (
          <VersionButton
            key={version}
            version={version}
            isActive={targetVersion === version}
            type={type}
            handleClick={setTargetVersion}
          />
        ))}
      </div>
    </div>
  );
}

export default function VersionMoves({ genMoves, type }) {
  const versions = useMemo(() => genMoves.map(({ version }) => version), [genMoves]);

  const [targetVersion, setTargetVersion] = useState(versions[0]);

  const versionMoves = genMoves.find(({ version }) => version === targetVersion)?.versionMoves;

  return (
    <>
      <VersionGroup
        versions={versions}
        type={type}
        targetVersion={targetVersion}
        setTargetVersion={setTargetVersion}
      />
      <div className="p-3">
        <TargetMoves
          key={targetVersion}
          versionMoves={versionMoves}
        />
      </div>
    </>
  );
}
