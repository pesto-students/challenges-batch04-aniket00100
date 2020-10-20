// I need help re-writing sumFibs efficiently
// I think there is a better way to write this function
function sumFibs(num) {
  const fibNums = [1];
  let latestNumber = 1;

  while (latestNumber <= num) {
    fibNums.push(latestNumber);
    latestNumber = fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2];
  }

  const total = fibNums.reduce((sum, n) => {
    let tempSum;
    if (n % 2) {
      tempSum = sum + n;
      return tempSum;
    }
    tempSum = sum + 0;
    return tempSum;
  });

  return total;
}

// eslint-disable-next-line no-shadow
function cacheFunction(sumFibs) {
  const cache = {};

  return (num) => {
    if (num in cache) {
      return cache[num];
    }
    const result = sumFibs(num);
    cache[num] = result;
    return result;
  };
}

export { sumFibs, cacheFunction };
