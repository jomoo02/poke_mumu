import { useState } from 'react';
import { useLanguage } from '@/app/language-provider';
import { localizedVersions, type Version } from '@/app/data/version';
import type { GenMove } from '@/app/models/detail.type';

function setInitialTargetGenVersion(genMove: GenMove) {
  const targetVersionMoves = genMove.find(({ versionMoves }) => (
    Object.values(versionMoves).some((moves) => moves.length > 0)
  ));

  if (!targetVersionMoves) {
    throw new Error('Target version moves not found');
  }

  return targetVersionMoves.version;
}

export default function useMovesGen(genMove: GenMove) {
  const genVersions = genMove.map(({ version }) => version);

  const { language } = useLanguage();

  const localeVersions = localizedVersions[language];

  const localeGenVersion = genVersions.map((version) => ({
    version,
    localeVersion: localeVersions[version],
  }));

  const initialTargetGenVersion = setInitialTargetGenVersion(genMove);
  const [targetGenVersion, setTargetGenVersion] = useState(initialTargetGenVersion);

  const genVersionMove = genMove.find(({ version }) => (
    version === targetGenVersion
  ))!.versionMoves;

  const handleTargetVersion = (version: Version) => setTargetGenVersion(version);

  return {
    targetGenVersion,
    handleTargetVersion,
    genVersionMove,
    genVersions: localeGenVersion,
  };
}
