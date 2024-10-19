export function splitPokeLinkName(name: string) {
  if (name.includes('(')) {
    const targetIndex = name.indexOf('(');
    const firstName = name.slice(0, targetIndex);
    const lastName = name.slice(targetIndex);
    return [firstName, lastName];
  }

  return [name];
}
