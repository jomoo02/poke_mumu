async function fetchMachineMove(url) {
  const data = await (await fetch(url)).json();
  const { id, item } = data;
  const type = item?.name.slice(0, 2);

  return {
    id,
    type,
    name: item?.name || '',
  };
}

async function fetchVersionMachineMove(version, machines) {
  const targetVersionMachineObj = machines.find((machine) => (
    machine.version_group.name === version
  ));

  const url = targetVersionMachineObj?.machine?.url;

  if (url) {
    return fetchMachineMove(url);
  }

  return {
    id: 0,
    type: 'tm',
    name: 'tm0',
  };
}