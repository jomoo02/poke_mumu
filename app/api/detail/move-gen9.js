import { svMachine } from '../../lib/machineNumber';
import { changes } from '../../lib/changeMove';
import { addMovesGen9 } from '../../lib/addNewMove';

function addNewMove(moveName) {
  const { en, ko } = moveName;
  if (addMovesGen9[ko]) {
    return {
      en,
      ko: addMovesGen9[ko],
    };
  }
  return moveName;
}

function changeMoveName(moveName) {
  const { en, ko } = moveName;
  if (changes[ko]) {
    return {
      en,
      ko: changes[ko],
    };
  }
  return moveName;
}

function addMachineNumber(moveObj) {
  const { move } = moveObj;
  const { ko } = move.name;
  if (svMachine[move.name.ko]) {
    return {
      move,
      machine: {
        id: svMachine[ko],
        type: 'tm',
        name: `tm${svMachine[ko]}`,
      },
    };
  }

  return moveObj;
}

function processMoves(moves, method) {
  const changedMoves = moves.map(({ move, ...rest }) => {
    const moveName = changeMoveName(addNewMove(move.name));
    return {
      ...rest,
      move: {
        ...move,
        name: moveName,
      },
    };
  });

  if (method === 'machine') {
    return changedMoves.map(addMachineNumber);
  }

  return changedMoves;
}

export default function updateMovesGen9(movesGen9) {
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
