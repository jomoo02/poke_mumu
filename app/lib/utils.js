export function checkTextNumberType(text) {
  const trimmedText = text.trim();
  return /^\d+$/.test(trimmedText);
};