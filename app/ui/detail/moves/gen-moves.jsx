import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/app/language-provider';
import { versionGroupLanguage } from '@/app/translations/version';
import VersionMoves from './version-moves';

function VersionButton({
  version,
  isActive,
  type,
  handleTargetVersionClick,
  className,
}) {
  const { language } = useLanguage();

  const versionText = versionGroupLanguage[language][version];

  if (isActive) {
    return (
      <div
        className={`${type} ${className} text-white font-semibold`}
      >
        {versionText}
      </div>
    );
  }

  return isActive
    ? (
      <div className={`${type} ${className} text-white font-semibold`}>
        {versionText}
      </div>
    )
    : (
      <button
        type="button"
        onClick={() => handleTargetVersionClick(version)}
        className={`bg-slate-200 ${className} hover:bg-slate-400/70 font-medium`}
      >
        {versionText}
      </button>
    );
}

const getClassName = (index, versionCount) => {
  const colSpanClass = (versionCount % 2 === 1 && index === versionCount - 1)
    ? 'col-span-2 xl:col-span-1'
    : 'col-span-1';

  const roundedClass = (index === 2 && index === versionCount - 1)
    ? 'xl:rounded-t-md'
    : 'rounded-t-md';

  return `${roundedClass} ${colSpanClass}
    min-h-7 text-sm text-center flex justify-center items-center break-all xs:break-normal text-pretty px-2.5 py-1`;
};

export default function GenMoves({ genMoves, type }) {
  const versions = useMemo(() => genMoves.map(({ version }) => version), [genMoves]);

  const [targetVersion, setTargetVersion] = useState(versions[0]);

  const versionMoves = genMoves.find(({ version }) => version === targetVersion)?.versionMoves;

  const handleTargetVersionClick = (version) => {
    setTargetVersion(version);
  };

  return (
    <>
      <div className="border-b-2 grid gap-y-3 pt-2">
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-1 gap-y-px px-2">
          {versions.map((version, index) => (
            <VersionButton
              key={version}
              version={version}
              isActive={targetVersion === version}
              type={type}
              handleTargetVersionClick={handleTargetVersionClick}
              className={getClassName(index, versions.length)}
            />
          ))}
        </div>
      </div>
      <div className="p-3">
        <VersionMoves
          versionMoves={versionMoves}
        />
      </div>
    </>
  );
}
