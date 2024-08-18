import { useState } from 'react';
import { useLanguage } from '@/app/language-provider';
import { versionGroupLanguage } from '@/app/translations/version';

function useVersionLocaleText(versions) {
  const { language } = useLanguage();

  return versions.map((version) => ({
    version,
    text: versionGroupLanguage[language][version],
  }));
}

function setInitialTargetVersion(genMoves) {
  const targetVersionMoves = genMoves.find(({ versionMoves }) => (
    Object.values(versionMoves).some((moves) => moves.length > 0)
  ));

  return targetVersionMoves.version;
}

export default function useVersionMoves(genMoves) {
  const versions = genMoves.map(({ version }) => version);
  const localeVersions = useVersionLocaleText(versions);

  const initialTargetVersion = setInitialTargetVersion(genMoves);
  const [targetVersion, setTargetVersion] = useState(initialTargetVersion);

  const versionMoves = genMoves.find(({ version }) => version === targetVersion)?.versionMoves;

  const updateTargetVersion = (version) => setTargetVersion(version);

  return {
    versions: localeVersions,
    targetVersion,
    updateTargetVersion,
    versionMoves,
  };
}
