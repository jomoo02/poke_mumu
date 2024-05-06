import { svMachine, bdspMachine } from '../../lib/machineNumber';
import { changedMovesGen9 } from '../../lib/changedMoves';
import { addedMovesGen9 } from '../../lib/addedMoves';

function addNewMove(moveName) {
  const { en, ko } = moveName;
  if (addedMovesGen9[ko]) {
    return {
      en,
      ko: addedMovesGen9[ko],
    };
  }
  return moveName;
}

function changeMoveName(moveName, changes) {
  const { en, ko } = moveName;
  if (changes[ko]) {
    return {
      en,
      ko: changes[ko],
    };
  }
  return moveName;
}

function addMachineNumber(moveObj, machineNumbers) {
  const { move } = moveObj;
  const { ko } = move.name;
  if (machineNumbers[move.name.ko]) {
    return {
      move,
      machine: {
        id: machineNumbers[ko],
        type: 'tm',
        name: `tm${machineNumbers[ko]}`,
      },
    };
  }

  return moveObj;
}

function processMoves(moves, method) {
  const changedMoves = moves.map(({ move, ...rest }) => {
    const moveName = changeMoveName(addNewMove(move.name), changedMovesGen9);
    return {
      ...rest,
      move: {
        ...move,
        name: moveName,
      },
    };
  });

  if (method === 'machine') {
    return changedMoves.map((move) => addMachineNumber(move, svMachine));
  }

  return changedMoves;
}

export function addMachineNumberGen8Bdsp(movesGen8) {
  const machineMoves = movesGen8.machine;
  const addedNumberMoves = machineMoves.map((move) => addMachineNumber(move, bdspMachine));
  return {
    ...movesGen8,
    machine: addedNumberMoves,
  };
}

export function updateMovesGen9(movesGen9) {
  const learnMethods = Object.keys(movesGen9);

  const processedMoves = learnMethods.map((method) => {
    const methodMoves = movesGen9[method];
    const after = processMoves(methodMoves, method);
    return {
      method,
      methodMoves: after,
    };
  });

  return processedMoves.reduce((acc, { method, methodMoves }) => {
    acc[method] = methodMoves;
    return acc;
  }, {});
}
