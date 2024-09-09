import { useState } from 'react';
import { useLanguage } from '@/app/language-provider';
import { versionGroupLanguage } from '@/app/translations/version';

function useGenVersionsLocaleVersion(versions) {
  const { language } = useLanguage();

  return versions.map((version) => ({
    version,
    localeVersion: versionGroupLanguage[language][version],
  }));
}

function setInitialTargetGenVersion(genMoves) {
  const targetVersionMoves = genMoves.find(({ versionMoves }) => (
    Object.values(versionMoves).some((moves) => moves.length > 0)
  ));

  return targetVersionMoves.version;
}

export default function useMovesGen(genMoves) {
  const versions = genMoves.map(({ version }) => version);
  const localeVersions = useGenVersionsLocaleVersion(versions);

  const initialTargetGenVersion = setInitialTargetGenVersion(genMoves);
  const [targetGenVersion, setTargetGenVersion] = useState(initialTargetGenVersion);

  const genVersionMoves = genMoves.find(({ version }) => (
    version === targetGenVersion))?.versionMoves;

  const updateTargetGenVersion = (version) => setTargetGenVersion(version);

  return {
    targetGenVersion,
    updateTargetGenVersion,
    genVersionMoves,
    genVersions: localeVersions,
  };
}
