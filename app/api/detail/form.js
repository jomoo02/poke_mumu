export default async function pickForms(speciesUrl) {
  const data = await (await fetch(speciesUrl)).json();
  const { varieties } = data;

  if (varieties.length === 1) {
    return [];
  }
}
