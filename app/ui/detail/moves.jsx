'use client';

import React, { useEffect, useRef, useState } from 'react';
import VersionMoves from './moves/version-moves';

function GenMoves({ gen, genMoves }) {
  const versions = genMoves.map(({ version }) => version);
  const [targetVersion, setTargetVersion] = useState(versions[0]);
  const [versionMoves, setVersionMoves] = useState((
    genMoves.find(({ version }) => version === versions[0]).versionMoves
  ));

  const handleTargetVersion = (version) => {
    setTargetVersion(version);
    setVersionMoves(genMoves.find((genMove) => genMove.version === version).versionMoves);
  };

  useEffect(() => {
    const newTargetVersion = versions[0];
    const newVersionsMoves = genMoves.find(({ version }) => (
      version === newTargetVersion))?.versionMoves;

    setTargetVersion(newTargetVersion);
    setVersionMoves(newVersionsMoves);
  }, [genMoves]);

  return (
    <div>
      <h3 className="text-xl">{`${gen} 세대`}</h3>
      <div className="flex gap-x-1.5 overflow-x-auto py-3">
        {versions.map((version) => (
          <button
            key={version}
            type="button"
            onClick={() => handleTargetVersion(version)}
            className={
              `${version === targetVersion ? 'bg-slate-400/90' : 'bg-slate-200'} flex justify-center items-center h-7 rounded-md px-2.5 py-1 text-sm md:text-base text-nowrap`
            }
          >
            {version}
          </button>
        ))}
      </div>
      {versionMoves && (
        <VersionMoves
          version={targetVersion}
          versionMoves={versionMoves}
        />
      )}
    </div>
  );
}

export default function Moves({ moves }) {
  const gens = moves.map(({ gen }) => gen);
  const [targetGen, setTargetGen] = useState(gens.at(-1));
  const [genMoves, setGenMoves] = useState(moves.find(({ gen }) => gen === gens.at(-1)).genMoves);
  const containerRef = useRef(null);

  const handleTargetGen = (gen) => {
    setTargetGen(gen);
    setGenMoves(moves.find((move) => move.gen === gen).genMoves);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = container.scrollWidth;
    }
  }, []);

  return (
    <div className="overflow-auto">
      <h3 className="text-2xl">기술</h3>
      <div className="flex gap-x-1.5 md:gap-x-2 overflow-x-auto py-3" ref={containerRef}>
        {gens?.map((gen) => (
          <button
            key={gen}
            type="button"
            onClick={() => handleTargetGen(gen)}
            className={
              `${gen === targetGen ? 'bg-slate-400/90' : 'bg-slate-200'} flex items-center justify-center rounded-md px-2 py-1 h-7 min-w-10 max-w-10 md:min-w-11 md:max-w-11`
            }
          >
            <span className="text-sm md:text-base font-medium text-slate-80">{gen}</span>
            <span className="font-semibold text-[12px] leading-[24px] text-slate-700">th</span>
          </button>
        ))}
      </div>
      <GenMoves
        gen={targetGen}
        genMoves={genMoves}
      />
    </div>
  );
}
