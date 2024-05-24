export function checkTextNumberType(text) {
  const trimmedText = text.trim();
  return /^\d+$/.test(trimmedText);
}

export function checkTextLanguageKo(text) {
  return /^[가-힣]+$/.test(text);
}

export function makeFirstUpperCase(text) {
  if (!text) {
    return text;
  }
  return text[0].toUpperCase() + text.slice(1);
}

export function makeFirstUpperCaseTextArray(textArray) {
  return textArray.map(makeFirstUpperCase).join(' ');
}

function getJongseongIndex(char) {
  const charCode = char.charCodeAt(0);
  if (charCode >= 0xAC00 && charCode <= 0xD7A3) {
    const jongseong = (charCode - 0xAC00) % 28;
    return jongseong;
  }
  return -1;
}

export function getKoreanParticle(word) {
  const lastChar = word[word.length - 1];
  const jongseong = getJongseongIndex(lastChar);

  if (jongseong !== -1) {
    return jongseong === 0 ? '를' : '을';
  }

  return '';
}

export function getKoreanParticleForAnd(word) {
  const lastChar = word[word.length - 1];

  const jongseong = getJongseongIndex(lastChar);

  if (jongseong !== -1) {
    return jongseong === 0 ? '와' : '과';
  }

  return '';
}
