'use client';

import React, { useEffect, useState } from 'react';

function VersionMoves({ version, versionMoves }) {
  const methods = [
    'level-up',
    'machine',
    'egg',
    'tutor',
  ];

  return (
    <div className="my-4">
      <h4 className="font-medium">
        {`${version} 버전`}
      </h4>
      <div className="grid divide-y">
        {versionMoves && methods.map((method) => (
          <div key={method}>
            <h4>{method}</h4>
            {versionMoves[method]?.length > 0
              ? (versionMoves[method].map(({ move, level }) => (
                <div key={`${move.name}/${level}`}>{`${level}: ${move.name}`}</div>
              )))
              : (
                <div>none</div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}

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

      <div className="flex gap-x-1 border-b">
        {versions.map((version) => (
          <button
            key={version}
            type="button"
            onClick={() => handleTargetVersion(version)}
            className="bg-slate-200 rounded-md px-2 py-1 min-w-9"
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

  const handleTargetGen = (gen) => {
    setTargetGen(gen);
    setGenMoves(moves.find((move) => move.gen === gen).genMoves);
  };

  return (
    <div>
      <h3 className="text-2xl">기술</h3>
      <div className="flex gap-x-1 border-b">
        {gens?.map((gen) => (
          <button
            key={gen}
            type="button"
            onClick={() => handleTargetGen(gen)}
            className="bg-slate-200 rounded-md px-2 py-1 w-9"
          >
            {gen}
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
