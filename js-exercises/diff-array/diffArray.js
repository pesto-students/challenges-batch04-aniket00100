function diffArray(array1, array2) {
  const itemRepeatCountObject = {};
  const combinedArray = [...array1, ...array2];
  const requiredArray = [];

  for (const item of combinedArray) {
    const typeOfItem = typeof item;
    if (typeOfItem !== 'number' && typeOfItem !== 'string') {
      throw new Error(`Expected type number or string. Got ${typeOfItem}`);
    }
    if (itemRepeatCountObject[item] === undefined) {
      itemRepeatCountObject[item] = 1;
    } else {
      itemRepeatCountObject[item] += 1;
    }
  }

  // eslint-disable-next-line guard-for-in
  for (const item of combinedArray) {
    if (itemRepeatCountObject[item] === 1) {
      const numberValueOfItem = parseInt(item, 10);
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(numberValueOfItem)) {
        requiredArray.push(item);
      } else {
        requiredArray.push(numberValueOfItem);
      }
    }
  }
  return requiredArray;
}

export { diffArray };
