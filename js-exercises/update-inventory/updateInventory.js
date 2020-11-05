function invertKeyValue(objectEntries) {
  const invertedEntries = objectEntries.map(([key, value]) => [
    value,
    Number(key),
  ]);
  return invertedEntries;
}

function updateInventory(...args) {
  const currentInventoryObject = Object.fromEntries(invertKeyValue(args[0]));
  const newInventoryObject = Object.fromEntries(invertKeyValue(args[1]));

  for (const key in newInventoryObject) {
    if (currentInventoryObject[key]) {
      currentInventoryObject[key] += newInventoryObject[key];
    } else {
      currentInventoryObject[key] = newInventoryObject[key];
    }
  }
  // sorting the object keys alphabetically
  const updatedInvertoryEntries = [];
  for (const sortedKey of Object.keys(currentInventoryObject).sort()) {
    const item = sortedKey;
    const quantity = currentInventoryObject[sortedKey];
    updatedInvertoryEntries.push([quantity, item]);
  }
  return updatedInvertoryEntries;
}

export { updateInventory };
