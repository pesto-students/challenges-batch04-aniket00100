function getMaximumSubarray(arr) {
  if (arr.length === 0) return [];
  const subArraySumMap = {};
  let end = arr.length - 1;
  let start = 0;
  let totalSum = arr.reduce((sum, item) => sum + item);
  subArraySumMap[`${start}-${end}`] = totalSum;
  while (start < end) {
    const sumWithoutStartElement = totalSum - arr[start];
    const sumWithoutEndElement = totalSum - arr[end];

    if (sumWithoutStartElement <= sumWithoutEndElement) {
      end -= 1;
      subArraySumMap[`${start}-${end}`] = sumWithoutEndElement;
      totalSum = sumWithoutEndElement;
    } else {
      start += 1;
      subArraySumMap[`${start}-${end}`] = sumWithoutStartElement;
      totalSum = sumWithoutStartElement;
    }
  }
  subArraySumMap[`${start}-${start}`] = arr[start];

  let maxValue = Number.MIN_SAFE_INTEGER;
  let maxKeys = null;
  for (const key of Object.keys(subArraySumMap)) {
    if (subArraySumMap[key] > maxValue) {
      maxValue = subArraySumMap[key];
      maxKeys = key;
    }
  }
  const [i, j] = maxKeys.split('-');
  return arr.slice(Number(i), Number(j) + 1);
}

// console.log(getMaximumSubarray([0, 0, 1]));

export { getMaximumSubarray };
