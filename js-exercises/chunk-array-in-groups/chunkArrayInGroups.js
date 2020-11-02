function chunkArrayInGroups(array, chunkSize) {
  const chunkedArray = [];
  let possibleFullChunks = Math.floor(array.length / chunkSize);
  const remainderChunks = array.length % chunkSize;
  let i = 0;
  while (possibleFullChunks > 0) {
    const chunk = array.slice(i, i + chunkSize);
    chunkedArray.push(chunk);
    i += chunkSize;
    possibleFullChunks -= 1;
  }
  if (remainderChunks) {
    const lastChunk = array.slice(i, array.length);
    chunkedArray.push(lastChunk);
  }
  return chunkedArray;
}

export { chunkArrayInGroups };
