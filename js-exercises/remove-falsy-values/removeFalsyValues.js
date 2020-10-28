function removeFalsyValues(array) {
  const falsyRemovedArray = [];

  for (const item of array) {
    if (item) {
      falsyRemovedArray.push(item);
    }
  }
  return falsyRemovedArray;
}

export { removeFalsyValues };
