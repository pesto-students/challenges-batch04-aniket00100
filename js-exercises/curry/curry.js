function curryFunction(callback) {
  return function curried(...args) {
    if (args.length >= callback.length) {
      return callback.apply(this, args);
    }
    // eslint-disable-next-line func-names
    return function (...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

const curry = curryFunction;

export { curry };
