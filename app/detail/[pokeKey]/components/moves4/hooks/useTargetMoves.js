import { useState, useMemo, useCallback } from 'react';

export default function useTargetMoves(moves) {
  // 1. 'gens'를 useMemo로 캐싱
  const gens = useMemo(() => moves.map(({ gen }) => gen), [moves]);

  // 2. 'targetGen'을 마지막 세대의 값으로 초기화
  const [targetGen, setTargetGen] = useState(gens.at(-1));

  // 3. 'genMoves'를 targetGen에 따라 캐싱 (불필요한 계산 방지)
  const genMoves = useMemo(() => moves.find(({ gen }) => gen === targetGen)?.genMoves || [], [targetGen, moves]);

  // 4. 'versions'를 genMoves에 따라 캐싱
  const versions = useMemo(() => genMoves.map(({ version }) => version), [genMoves]);

  // 5. 초기 'targetVersion'을 versions[0]으로 설정하고, versions가 변경될 때만 업데이트
  const [targetVersion, setTargetVersion] = useState(versions[0]);
  
  // 6. targetGen이나 versions가 변경될 때 targetVersion 업데이트
  useMemo(() => {
    if (versions.length > 0 && !versions.includes(targetVersion)) {
      setTargetVersion(versions[0]);
    }
  }, [versions, targetVersion]);

  // 7. 'versionMoves'를 targetVersion에 따라 캐싱
  const versionMoves = useMemo(() => (
    genMoves.find(({ version }) => version === targetVersion)?.versionMoves || []
  ), [targetVersion, genMoves]);

  // 8. setTargetGen, setTargetVersion을 useCallback으로 최적화 (메모이제이션)
  const updateTargetGen = useCallback((gen) => {
    setTargetGen(gen);
  }, []);

  const updateTargetVersion = useCallback((version) => {
    setTargetVersion(version);
  }, []);

  console.log('@');

  return {
    gens,
    targetGen,
    setTargetGen: updateTargetGen, // 최적화된 setter 사용
    versions,
    targetVersion,
    setTargetVersion: updateTargetVersion, // 최적화된 setter 사용
    versionMoves,
  };
}
