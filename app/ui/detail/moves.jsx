'use client';

import React, { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';
import typesKo from '@/app/translations/type';

function Move({ move, children }) {
  const { language } = useLanguage();
  const {
    name,
    type,
    power,
    accuracy,
    damage_class: damageClass,
  } = move;

  const nameText = language === 'ko' ? name.ko : name.en;
  const typeText = language === 'ko' ? typesKo[type] : type;

  return (
    <div className="grid grid-cols-7 gap-x-2 divide-x">
      <div>{children}</div>
      <div className="col-span-2">{nameText}</div>
      <div className="px-2">
        <div className={`${type} rounded-md text-white font-medium text-center`}>
          {typeText}
        </div>
      </div>
      <div>{damageClass}</div>
      <div>{power}</div>
      <div>{accuracy}</div>
    </div>
  );
}

function MethodMoves({ method, moves }) {
  console.log(moves);
  const METHOD_TEXT_MAP = {
    'level-up': '레벨 업으로 익히는 기술',
    egg: '교배를 통해 유전 받을 수 있는 기술',
    machine: '기술머신으로 익히는 기술',
    back: '진화 전 단계에서 얻을 수 있는 기술',
    tutor: 'NPC로부터 배울 수 있는 기술',
  };
  const lastGridMap = {
    'level-up': 'level',
    egg: 'egg',
    machine: 'machine',
    back: 'back',
  };

  const lastGridText = lastGridMap[method];

  const methodMoves = moves.map(({ move, level, ids }) => {
    if (method === 'level-up') {
      return (
        <Move
          key={`${move.name.en}/${level}`}
          move={move}
        >
          {level}
        </Move>
      );
    } if (method === 'back') {
      return (
        <Move
          key={`${move.name.en}/${level}`}
          move={move}
        >
          {ids.map((id) => <div key={id}>{id}</div>)}
        </Move>
      );
    }
    return (
      <Move
        key={`${move.name.en}/${level}`}
        move={move}
      />
    );
  });

  return (
    <div>
      <h4 className="text-xl">{METHOD_TEXT_MAP[method]}</h4>
      <div className="grid gap-y-2">
        <div className="grid grid-cols-7">
          <div>{lastGridText}</div>
          <div className="col-span-2">이름</div>
          <div>타입</div>
          <div>분류</div>
          <div>위력</div>
          <div>명중률</div>
        </div>
        {methodMoves}
      </div>
    </div>
  );
}

function VersionMoves({ version, versionMoves }) {
  const methods = [
    'level-up',
    'machine',
    'egg',
    'tutor',
    'back',
  ];

  return (
    <div className="my-4 w-full">
      <h4 className="font-medium">
        {`${version} 버전`}
      </h4>
      <div className="grid divide-y gap-y-3">
        {versionMoves && methods.map((method) => (
          <Fragment key={method}>
            {versionMoves[method]?.length > 0
              && (
                <MethodMoves
                  moves={versionMoves[method]}
                  method={method}
                />
              )}
          </Fragment>
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
