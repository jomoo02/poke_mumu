'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/app/language-provider';
import { versionGroupLanguage } from '@/app/translations/version';
import VersionMoves from './version-moves';
import TitleHeader from '../title-header';

const titleLanguageText = {
  ko: '기술',
  en: 'move',
};

const otherGenLanguageText = {
  ko: '다른 세대',
  en: 'In other generations',
};

function GenMoves({ genMoves, type }) {
  const { language } = useLanguage();
  const [versions, setVersions] = useState([]);
  const [targetVersion, setTargetVersion] = useState('');
  const [versionMoves, setVersionMoves] = useState({});

  useEffect(() => {
    const versionsList = genMoves.map(({ version }) => version);
    setVersions(versionsList);
    setTargetVersion(versionsList[0]);
    setVersionMoves(genMoves.find(({ version }) => version === versionsList[0])?.versionMoves);
  }, [genMoves]);

  const handleTargetVersion = (version) => {
    setTargetVersion(version);
    setVersionMoves(genMoves.find((genMove) => genMove.version === version)?.versionMoves);
  };

  const renderVersionButton = (version, index) => {
    const isActive = version === targetVersion;
    const colSpanClass = versions.length % 2 === 1 && index === versions.length - 1 ? 'col-span-2 xl:col-span-1' : 'col-span-1';
    const roundedClass = (index === 2 && index === versions.length - 1) ? 'xl:rounded-t-md' : 'rounded-t-md';
    const commonClasses = `min-h-7 ${roundedClass} px-2.5 py-1
      text-sm text-center flex justify-center items-center ${colSpanClass} break-all xs:break-normal text-pretty`;

    return isActive ? (
      <div
        className={`${type} ${commonClasses} text-white font-semibold`}
        key={version}
      >
        {versionGroupLanguage[language][version]}
      </div>
    ) : (
      <button
        key={version}
        type="button"
        onClick={() => handleTargetVersion(version)}
        className={`bg-slate-200 ${commonClasses} hover:bg-slate-400/70 font-medium`}
      >
        <span>{versionGroupLanguage[language][version]}</span>
      </button>
    );
  };

  return (
    <div>
      <div className="border-b-2 grid gap-y-3 pt-2">
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-1 gap-y-px px-2">
          {versions.map((version, index) => renderVersionButton(version, index))}
        </div>
      </div>
      {Object.keys(versionMoves).length > 0 && (
        <div className="p-3">
          <VersionMoves
            versionMoves={versionMoves}
          />
        </div>
      )}
    </div>
  );
}

// function GenMoves({ genMoves }) {
//   const { language } = useLanguage();
//   const [versions, setVersions] = useState(genMoves.map(({ version }) => version));

//   const [targetVersion, setTargetVersion] = useState(versions[0]);
//   const [versionMoves, setVersionMoves] = useState((
//     genMoves.find(({ version }) => version === versions[0])?.versionMoves
//   ));

//   const handleTargetVersion = (version) => {
//     setTargetVersion(version);
//     setVersionMoves(genMoves.find((genMove) => genMove.version === version).versionMoves);
//   };

//   useEffect(() => {
//     setVersions(genMoves.map(({ version }) => version));
//   }, [genMoves]);

//   useEffect(() => {
//     const newVersionsMoves = genMoves.find(({ version }) => (
//       version === versions[0]))?.versionMoves;

//     setTargetVersion(versions[0]);
//     setVersionMoves(newVersionsMoves);
//   }, [versions]);

//   return (
//     <div className="">
//       <div className="w-full border-b-2 grid gap-y-3 pt-2">
//         <div className="grid grid-cols-2 xl:flex">
//           {versions.map((version, index) => {
//             if (version === targetVersion) {
//               return (
//                 <div
//                   className={
//                     `grass min-h-7 rounded-t-md px-2.5 py-1 text-white text-sm
//                     flex justify-center items-center md:text-base text-center
//                     ${versions.length % 2 === 1 && index === versions.length - 1 ? 'col-span-2' : 'col-span-1'}`
//                   }
//                   key={version}
//                 >
//                   {versionGroupLanguage[language][version]}
//                 </div>
//               );
//             }
//             return (
//               <button
//                 key={version}
//                 type="button"
//                 onClick={() => handleTargetVersion(version)}
//                 className={
//                   `${versions.length % 2 === 1 && index === versions.length - 1 ? 'col-span-2' : 'col-span-1'} bg-slate-200
//                   flex justify-center items-center min-h-7 rounded-t-md px-2.5 py-1 text-sm md:text-base text-center`
//                 }
//               >
//                 {versionGroupLanguage[language][version]}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//       {versionMoves && (
//         <div className="p-3">
//           <VersionMoves
//             versionMoves={versionMoves}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

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
          className="flex gap-x-1.5 items-center px-2 py-2.5 border-b"
          ref={containerRef}
        >
          <div className="text-sm font-medium pr-2 text-nowrap">
            {otherGenLanguageText[language]}
          </div>
          <div className="flex gap-x-2 flex-wrap gap-y-2 items-center">
            {gens?.map((gen) => (
              <button
                key={gen}
                type="button"
                onClick={() => handleTargetGen(gen)}
                className={
                  `${gen === targetGen ? `${type} text-white` : 'bg-slate-200 hover:bg-slate-400/90'}
                  flex items-center justify-center rounded-md px-2 py-1 h-7 min-w-10 max-w-10 md:min-w-11 md:max-w-11
                  `
                }
              >
                <span className="text-sm md:text-base font-medium text-slate-80">{gen}</span>
                <span className="font-semibold text-[12px] leading-[24px]">th</span>
              </button>
            ))}
          </div>
        </div>
        <GenMoves
          type={type}
          genMoves={genMoves}
        />
      </div>
    </div>
  );
}
