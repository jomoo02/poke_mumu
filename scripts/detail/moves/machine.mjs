import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const instance = axios.create();
const axiosCache = setupCache(instance);

async function fetchMachineMove(url) {
  try {
    // const data = await (await fetch(url)).json();
    const res = await axiosCache(url);
    const { id, item } = res.data;
    const type = item?.name.slice(0, 2);

    return {
      id,
      type,
      name: item?.name || '',
    };
  } catch (error) {
    console.error(`fetchMachineMove error: ${error.message}`);
    return error;
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
