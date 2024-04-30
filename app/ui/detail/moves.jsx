'use client';

import React, { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';
import typesKo from '@/app/translations/type';

function Header({ method }) {
  return (
    <div className={`grid gap-x-2 ${method ? 'grid-cols-7' : 'grid-cols-6'} border-b`}>
      {method}
      <div className="col-span-2">이름</div>
      <div>타입</div>
      <div>분류</div>
      <div>위력</div>
      <div>명중률</div>
    </div>
  );
}

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
    <div className={`${children ? 'grid-cols-7' : 'grid-cols-6'} grid gap-x-2`}>
      {children}
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

function LevelUpMethodMoves({ moves }) {
  if (moves.length === 0) {
    return null;
  }

  const methodText = '레벨 업으로 익히는 기술';
  const sortedMoves = [...moves].sort((a, b) => a.level - b.level);

  return (
    <div>
      <h4 className="text-xl">{methodText}</h4>
      <div className="grid gap-y-6">
        <div className="grid gap-y-2">
          <Header method="level" />
          {sortedMoves.map(({ move, level }) => (
            <Move
              key={`${level}/${move.name.en}`}
              move={move}
            >
              {String(level)}
            </Move>
          ))}
        </div>
      </div>
    </div>
  );
}

function MachineMethodMoves({ moves }) {
  if (moves.length === 0) {
    return null;
  }

  const methodText = '기술머신으로 익히는 기술';
  const machineTypes = ['tm', 'hm', 'tr'];

  const filterMovesMachineType = (type) => moves
    .filter(({ machine }) => machine.type === type)
    .sort((a, b) => {
      const getNumber = (str) => parseInt(str.match(/\d+/), 10) || 0;
      return getNumber(a.machine.name) - getNumber(b.machine.name);
    });

  const machineTypesMoves = machineTypes.map((type) => filterMovesMachineType(type));

  return (
    <div>
      <h4 className="text-xl">{methodText}</h4>
      <div className="grid gap-y-6">
        {machineTypes.map((machineType, index) => (
          <Fragment key={machineType}>
            {machineTypesMoves[index].length > 0 && (
            <div className="grid gap-y-2">
              <div className="text-lg">{machineType}</div>
              <Header method="machine" />
              {machineTypesMoves[index].map(({ move, machine }) => (
                <Move
                  key={move.name.en}
                  move={move}
                >
                  {machine.name}
                </Move>
              ))}
            </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function EggMethodMoves({ moves }) {
  if (moves.length === 0) {
    return null;
  }

  const methodText = '교배를 통해 유전 받을 수 있는 기술';
  const sortedMoves = [...moves].sort((a, b) => a.move.type.localeCompare(b.move.type));

  return (
    <div>
      <h4 className="text-xl">{methodText}</h4>
      <div className="grid gap-y-6">
        <div className="grid gap-y-2">
          <Header />
          {sortedMoves.map(({ move }) => (
            <Move
              key={move.name.en}
              move={move}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TutorMethodMoves({ moves }) {
  if (moves.length === 0) {
    return null;
  }

  const methodText = 'NPC로부터 배울 수 있는 기술';
  const sortedMoves = [...moves].sort((a, b) => a.move.type.localeCompare(b.move.type));

  return (
    <div>
      <h4 className="text-xl">{methodText}</h4>
      <div className="grid gap-y-6">
        <div className="grid gap-y-2">
          <Header />
          {sortedMoves.map(({ move }) => (
            <Move
              key={move.name.en}
              move={move}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PreEvolutionMethodMoves({ moves }) {
  if (!moves || moves.length === 0) {
    return null;
  }

  const sprityUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
  const methodText = '이전 진화에서만 얻을 수 있는 기술';

  const sortedMoves = [...moves].sort((a, b) => {
    if (a.ids.length !== b.ids.length) {
      return a.ids.length - b.ids.length;
    }
    return a.move.type.localeCompare(b.move.type);
  });

  return (
    <div>
      <h4 className="text-xl">{methodText}</h4>
      <div className="grid gap-y-6">
        <div className="grid gap-y-2">
          <Header method="back" />
          {sortedMoves.map(({ move, ids }) => (
            <Move
              key={move.name.en}
              move={move}
            >
              <div className="flex gap-x-2">
                {ids.map((id) => (
                  <Image
                    key={id}
                    src={`${sprityUrl}/${id}.png`}
                    alt={id}
                    width={30}
                    height={30}
                  />
                ))}
              </div>
            </Move>
          ))}
        </div>
      </div>
    </div>
  );
}

function VersionMoves({ version, versionMoves }) {
  const {
    machine,
    egg,
    back,
    tutor,
    'level-up': levelUp,
  } = versionMoves;

  console.log(versionMoves);

  const allMoves = [...machine, ...egg, ...tutor, ...back, ...levelUp];

  return (
    <div className="my-4 w-full">
      <h4 className="font-medium">
        {`${version} 버전`}
      </h4>
      <div className="grid gap-y-9">
        {allMoves.length === 0 ? (
          <div>none</div>
        ) : (
          <>
            <LevelUpMethodMoves moves={levelUp} />
            <MachineMethodMoves moves={machine} />
            <EggMethodMoves moves={egg} />
            <PreEvolutionMethodMoves moves={back} />
            <TutorMethodMoves moves={tutor} />
          </>
        )}
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
            className={
              `${version === targetVersion ? 'bg-slate-400/90' : 'bg-slate-200'} rounded-md px-2 py-1 min-w-9`
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
            className={
              `${gen === targetGen ? 'bg-slate-400/90' : 'bg-slate-200'} rounded-md px-2 py-1 w-9`
            }
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
