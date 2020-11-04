function map(obj, callbackFn) {
  const keyValuePairs = Object.entries(obj);
  const newKeyValuePairs = [];

  for (const keyValuePair of keyValuePairs) {
    newKeyValuePairs.push(callbackFn(keyValuePair));
  }
  return Object.fromEntries(newKeyValuePairs);
}

function filter(obj, callbackFn) {
  const keyValuePairs = Object.entries(obj);
  const newKeyValuePairs = [];

  for (const keyValuePair of keyValuePairs) {
    const isValid = callbackFn(keyValuePair);
    if (isValid) {
      newKeyValuePairs.push(keyValuePair);
    }
  }
  return Object.fromEntries(newKeyValuePairs);
}

function invert(obj) {
  const keyValuePairs = Object.entries(obj);
  const newKeyValuePairs = [];
  for (const keyValuePair of keyValuePairs) {
    const [key, value] = keyValuePair;
    const typeofValue = typeof value;
    if (typeofValue === 'string' || typeofValue === 'number') {
      newKeyValuePairs.push([value, key]);
    } else return false;
  }
  return Object.fromEntries(newKeyValuePairs);
}

function merge(...objects) {
  let mergedObject = {};
  objects.map((obj) => {
    mergedObject = { ...mergedObject, ...obj };
    return null;
  });
  return mergedObject;
}

function all(obj, callbackFn) {
  const keyValuePairs = Object.entries(obj);
  for (const keyValuePair of keyValuePairs) {
    const isValid = callbackFn(keyValuePair);
    if (!isValid) return false;
  }
  return true;
}

function some(obj, callbackFn) {
  const keyValuePairs = Object.entries(obj);
  for (const keyValuePair of keyValuePairs) {
    const isValid = callbackFn(keyValuePair);
    if (isValid) return true;
  }
  return false;
}

// eslint-disable-next-line object-curly-newline
export { map, filter, invert, merge, all, some };
