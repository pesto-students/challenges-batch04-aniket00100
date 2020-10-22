let FUNCTION_CALL_LIMIT = 0;

const callCb = (cb, args) => {
  if (FUNCTION_CALL_LIMIT > 0) {
    FUNCTION_CALL_LIMIT -= 1;
    return cb(...args);
  }
  return null;
};

const limitFunctionCallCount = (cb, n) => {
  FUNCTION_CALL_LIMIT = n;
  return (...args) => callCb(cb, args);
};

export { limitFunctionCallCount };
