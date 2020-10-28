// attempting to develop a generalized solution for all types of input.

const sumEvenArgs = (...args) => {
  if (args.length === 0) {
    return 0;
  }
  let evenArgumentsSum = 0;
  // for arguments other string or number
  for (const arg of args) {
    const typeOfArg = typeof arg;
    if (typeOfArg === 'string' || typeOfArg === 'number') {
      const intArg = parseInt(arg, 10);
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(intArg)) {
        throw new Error(`The argument ${arg} cannot be converted to number`);
      }
      if (intArg % 2 === 0) {
        evenArgumentsSum += intArg;
      }
    } else {
      throw new Error(`Expected string or number. Got ${typeOfArg}`);
    }
  }
  return evenArgumentsSum;
};

export { sumEvenArgs };
