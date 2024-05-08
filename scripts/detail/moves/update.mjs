import { ADDED_MOVES_GEN9 } from './constants/added.mjs';
import { CHANGED_MOVES_GEN9 } from './constants/changed.mjs';
import {
  SV_MACHINE_NUMBER,
  BDSP_MACHINE_NUMBER,
} from './constants/machineNumber.mjs';
import {
  BRILLIANT_DIAMOND_AND_SHINING_PEARL,
  SCARLET_VIOLET,
} from '../gen.mjs';

function updateMoveName(moveName, nameMap) {
  const { en, ko } = moveName;

  if (nameMap[ko]) {
    return {
      en,
      ko: nameMap[ko],
    };
  }
  return moveName;
}

function updateMachineNumber(moveObj, machineMap) {
  const { move } = moveObj;
  const { ko } = move.name;

  if (machineMap[ko]) {
    return {
      move,
      machine: {
        id: machineMap[ko],
        type: 'tm',
        name: `tm${machineMap[ko]}`,
      },
    };
  }

  return moveObj;
}

function updateGen8Bdsp(bdspMoves) {
  const { machine } = bdspMoves;
  const updatedMachine = machine.map((moveObj) => (
    updateMachineNumber(moveObj, BDSP_MACHINE_NUMBER)
  ));

  return {
    ...bdspMoves,
    machine: updatedMachine,
  };
}

function updateGen9Sv(svMoves) {
  const applyNameUpdates = (name) => {
    const firstUpdate = updateMoveName(name, ADDED_MOVES_GEN9);
    return updateMoveName(firstUpdate, CHANGED_MOVES_GEN9);
  };

  const updatedMoves = Object.keys(svMoves).reduce((acc, method) => ({
    ...acc,
    [method]: svMoves[method].map(({ move, ...restInfo }) => ({
      ...restInfo,
      move: {
        ...move,
        name: applyNameUpdates(move.name),
      },
    })),
  }), {});

  const updatedMachine = updatedMoves.machine.map((moveObj) => (
    updateMachineNumber(moveObj, SV_MACHINE_NUMBER)
  ));

  return {
    ...updatedMoves,
    machine: updatedMachine,
  };
}

export default function updateMoves(moves) {
  const targets = [
    { gen: 9, version: SCARLET_VIOLET, update: updateGen9Sv },
    { gen: 8, version: BRILLIANT_DIAMOND_AND_SHINING_PEARL, update: updateGen8Bdsp },
  ];

  return moves.map((move) => {
    const target = targets.find(({ gen }) => gen === move.gen);

    if (!target) {
      return move;
    }

    const versionIndex = move.genMoves.findIndex(({ version }) => version === target.version);

    if (versionIndex === -1) {
      return move;
    }

    const { version, versionMoves } = move.genMoves[versionIndex];
    const updatedVersionMoves = target.update(versionMoves);

    const updatedGenMoves = [
      ...move.genMoves.slice(0, versionIndex),
      {
        version,
        versionMoves: updatedVersionMoves,
      },
      ...move.genMoves.slice(versionIndex + 1),
    ];

    return { ...move, genMoves: updatedGenMoves };
  });
}
