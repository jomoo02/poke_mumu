export function checkTextNumberType(text) {
  const trimmedText = text.trim();
  return /^\d+$/.test(trimmedText);
}

export function checkTextLanguageKo(text) {
  return /^[가-힣]+$/.test(text);
}
