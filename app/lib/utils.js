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
