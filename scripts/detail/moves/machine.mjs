async function fetchMachineMove(url) {
  try {
    const data = await (await fetch(url)).json();
    const { id, item } = data;
    const type = item?.name.slice(0, 2);

    return {
      id,
      type,
      name: item?.name || '',
    };
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

export default async function fetchVersionMachineMove(version, machines) {
  const targetVersionMachineObj = machines.find((machine) => (
    machine.version_group.name === version
  ));

  try {
    const url = targetVersionMachineObj?.machine?.url;

    if (url) {
      return fetchMachineMove(url);
    }

    return {
      id: 0,
      type: 'tm',
      name: 'tm0',
    };
  } catch (error) {
    console.error(error);
    return error.message;
  }
}
