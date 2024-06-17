'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/app/language-provider';
import VersionMoves from './moves/version-moves';
import TitleHeader from './title-header';
import { versionGroupLanguage } from '@/app/translations/version';

const titleLanguageText = {
  ko: '기술',
  en: 'move',
};

function GenMoves({ gen, genMoves }) {
  const { language } = useLanguage();
  const versions = genMoves.map(({ version }) => version);

  const [targetVersion, setTargetVersion] = useState(versions[0]);
  const [versionMoves, setVersionMoves] = useState((
    genMoves.find(({ version }) => version === versions[0]).versionMoves
  ));
  const [etcVersion, setEtcVersion] = useState(
    versions.filter((version) => version !== versions[0]),
  );

  const handleTargetVersion = (version) => {
    setTargetVersion(version);
    setVersionMoves(genMoves.find((genMove) => genMove.version === version).versionMoves);
    setEtcVersion(versions.filter((v) => v !== version));
  };

  useEffect(() => {
    const newTargetVersion = versions[0];
    const newVersionsMoves = genMoves.find(({ version }) => (
      version === newTargetVersion))?.versionMoves;

    setTargetVersion(newTargetVersion);
    setVersionMoves(newVersionsMoves);
    setEtcVersion(
      versions.filter((version) => version !== versions[0]),
    );
  }, [genMoves]);

  return (
    <div className="">
      {/* <h3 className="text-xl">{`${gen} 세대`}</h3> */}
      <div className="w-full border-b-2 grid gap-y-3 pt-2">
        <div className=" gap-x-2.5 overflow-x-auto px-2 flex py-2">
          {etcVersion.map((version) => (
            <button
              key={version}
              type="button"
              onClick={() => handleTargetVersion(version)}
              className={
                `${version === targetVersion ? 'bg-slate-400/90' : 'bg-slate-200'}
                flex justify-center items-center h-7 rounded-md px-2.5 py-1 text-sm md:text-base text-nowrap`
              }
            >
              {versionGroupLanguage[language][version]}
            </button>
          ))}
        </div>
        <div className="font-medium  text-sm md:text-base flex px-2 items-center">
          <div className="border-2 border-b-0 bg-slate-200 px-2.5 rounded-t-md flex h-7 items-center">
            {versionGroupLanguage[language][targetVersion]}
          </div>
        </div>
      </div>
      {versionMoves && (
        <div className="p-3">
          <VersionMoves
            version={targetVersion}
            versionMoves={versionMoves}
          />
        </div>
      )}
    </div>
  );
}

export default function Moves({ moves, type }) {
  const { language } = useLanguage();
  const gens = moves.map(({ gen }) => gen);
  const [targetGen, setTargetGen] = useState(gens.at(-1));
  const [genMoves, setGenMoves] = useState(moves.find(({ gen }) => gen === gens.at(-1)).genMoves);
  const containerRef = useRef(null);

  const title = titleLanguageText[language] || titleLanguageText.ko;

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
    <div className="overflow-hidden">
      <TitleHeader type={type} title={title} />
      <div className={`border-2 border-t-0 ${type}-border rounded-b-sm`}>
        <div
          className="flex gap-x-1.5 md:gap-x-2 overflow-x-auto px-2 py-2 border-b-2"
          ref={containerRef}
        >
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
    </div>
  );
}
